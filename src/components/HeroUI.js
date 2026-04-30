'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroUI() {
  const { scrollY } = useScroll();
  // Fade out as user scrolls down (from 0 to 500px)
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const pointerEvents = useTransform(scrollY, [0, 100], ['auto', 'none']);

  return (
    <div className="hero-container-sticky">
      <motion.div 
        style={{ opacity, y, pointerEvents }}
        className="hero-content"
      >
        <div className="hero-glass">
          <h1 className="hero-title">Pitweiler</h1>
          <p className="hero-subtitle">
            Rendimiento absoluto. Ingeniería al descubierto. Desplázate para diseccionar la máquina perfecta.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              Comprar Ahora
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
