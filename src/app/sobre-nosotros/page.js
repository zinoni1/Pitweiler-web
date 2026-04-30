'use client';

import { motion } from 'framer-motion';
import CanvasSequence from '@/components/CanvasSequence';

export default function SobreNosotros() {
  return (
    <main className="scroll-main">
      <CanvasSequence frameCount={105} folderPath="/about-us-frames" />
      
      <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        
        {/* Header Section */}
        <div className="page-container" style={{ minHeight: '70vh', paddingBottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="page-header"
            style={{ marginBottom: 0 }}
          >
            <h1 className="page-title">La Ingeniería del Pitweiler</h1>
            <p className="page-subtitle">Redefiniendo los límites de lo posible mediante un diseño obsesivo y una manufactura sin precedentes.</p>
          </motion.div>
        </div>

        {/* Section 1 */}
        <div className="page-container about-content" style={{ minHeight: '60vh', paddingTop: '50px', paddingBottom: '50px', display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-section hero-glass"
            style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            <h3>Nuestra Misión</h3>
            <p style={{ marginBottom: 0 }}>
              El Pitweiler no nació de la conformidad. Nació de la necesidad absoluta de crear la máquina perfecta. 
              Hemos reunido a los mejores ingenieros del mundo para construir un sistema donde cada micro-componente 
              sirve a un propósito superior, eliminando lo innecesario y optimizando lo esencial.
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="page-container about-content" style={{ minHeight: '60vh', paddingTop: '50px', paddingBottom: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'auto' }}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-section hero-glass"
            style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            <h3>Diseño de Precisión</h3>
            <p style={{ marginBottom: 0 }}>
              No creemos en cajas negras. Creemos en mostrar la belleza de la ingeniería interna. 
              El chasis del Pitweiler ha sido esculpido a nivel micrométrico, permitiendo que el flujo térmico 
              y la distribución de peso sean perfectos. Es por eso que invitamos a nuestros usuarios a diseccionarlo 
              visualmente.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="page-container about-content" style={{ minHeight: '60vh', paddingTop: '50px', paddingBottom: '50px', display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-section hero-glass"
            style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            <h3>El Futuro del Rendimiento</h3>
            <p style={{ marginBottom: 0 }}>
              Nuestra arquitectura no es solo una declaración estética. Es la promesa de que, bajo la carga más 
              extrema, el Pitweiler no solo resistirá, sino que superará cualquier expectativa. Bienvenidos a la 
              nueva era del rendimiento.
            </p>
          </motion.div>
        </div>

        {/* Spacer for final frames */}
        <div style={{ height: '150vh' }}></div>
      </div>
    </main>
  );
}
