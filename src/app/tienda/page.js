'use client';

import { motion } from 'framer-motion';
import { basePath } from '@/lib/config';

const products = [
  { id: 1, name: "Camisetas", price: "25 €", desc: "Precisión y control absoluto.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-15 Instagram.png" },
  { id: 2, name: "Pantalones", price: "60 €", desc: "Ligereza y máxima resistencia térmica.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-31 Instagram.png" },
  { id: 3, name: "Sudadera", price: "70 €", desc: "Seguridad y rendimiento en movimiento.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-37 Instagram.png" },
  { id: 4, name: "Bikinis", price: "45 €", desc: "Protección de grado militar.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-45 Instagram.png" },
  { id: 5, name: "Pantalones cortos", price: "20 €", desc: "Gestión de energía ininterrumpida.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-51 Instagram.png" },
  { id: 6, name: "Pack Completo", price: "180 €", desc: "Todo para el mantenimiento óptimo.", image: "/productos-images/Screenshot 2026-04-30 at 01-50-59 Instagram.png" },
];

export default function Tienda() {
  return (
    <main className="scroll-main">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
          backgroundImage: `url(${basePath}/about-us-frames/ezgif-frame-105.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6 // Slightly dim the background so products stand out
        }}
      />
      <div className="page-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-header"
        >
          <h1 className="page-title">Tienda Oficial</h1>
          <p className="page-subtitle">Vistete con estilo y marca la diferencia con los mejores productos de Pitweiler.</p>
        </motion.div>

        <div className="store-grid">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="product-card hero-glass"
              style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem' }} // Added glass effect and darker bg for readability
            >
              <div className="product-image-container" style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)' }}>
                <img
                  src={`${basePath}${product.image}`}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="product-title" style={{ marginBottom: '0.25rem' }}>{product.name}</h3>
              <p className="product-price" style={{ marginBottom: '1.5rem' }}>{product.price}</p>
              <button className="btn-primary mt-auto">
                Añadir al Carrito
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
