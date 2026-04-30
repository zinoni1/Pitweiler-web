'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { basePath } from '@/lib/config';

export default function CanvasSequence({ frameCount = 240, folderPath = '/frames' }) {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `${basePath}${folderPath}/ezgif-frame-${paddedIndex}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, folderPath]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    const renderFrame = (index) => {
      if (!context) return;
      const i = Math.min(frameCount - 1, Math.max(0, Math.floor(index) - 1));
      const img = images[i];
      if (!img) return;

      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const unsubscribe = frameIndex.on('change', (latest) => {
      renderFrame(latest);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [loaded, images, frameIndex]);

  return (
    <div className="canvas-container-sticky">
      <canvas
        ref={canvasRef}
        className="canvas-element"
        style={{ opacity: loaded ? 1 : 0 }}
      />
      {!loaded && (
        <div className="loading-text">
          Iniciando Sistema...
        </div>
      )}
    </div>
  );
}
