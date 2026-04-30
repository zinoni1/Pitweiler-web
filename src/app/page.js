import CanvasSequence from '@/components/CanvasSequence';
import HeroUI from '@/components/HeroUI';

export default function Home() {
  return (
    <main className="scroll-main">
      <div className="scroll-spacer"></div>
      <CanvasSequence />
      <HeroUI />
      
      {/* Final CTA at the bottom of the scroll */}
      <div className="final-cta">
        <h2>La Suma de Todas las Partes.</h2>
        <button className="btn-primary mt-6 mx-auto">
          Comprar Ahora
        </button>
      </div>
    </main>
  );
}
