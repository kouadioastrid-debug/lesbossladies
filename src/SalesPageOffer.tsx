import { useEffect, useState } from "react";
import img1 from "./imports/flat_lay.jpg"; // Fallback to flat_lay which usually has the notebook/coffee/etc.

export default function SalesPageOffer({ onClose }: { onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex flex-col" style={{ backgroundColor: '#F7F5F0' }}>
      
      {/* Top Image */}
      <div className="w-full h-[420px] md:h-[460px] lg:h-[520px] shrink-0 pt-[40px] overflow-hidden">
        <img src={img1} alt="Aesthetic flat lay" className="w-full h-full object-cover object-[center_10%] saturate-[0.85] contrast-[1.1] brightness-[1.02]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 py-20 md:py-24">
        <div 
          className={`w-full max-w-[640px] flex flex-col items-center text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span 
            className="uppercase tracking-[0.3em] font-medium mb-4" 
            style={{ fontSize: '13px', color: '#5A2E22', fontFamily: 'var(--font-body)' }}
          >
            Excellent choix
          </span>

          <h1 
            className="text-[56px] md:text-[64px] leading-[1.05] tracking-tight mb-2" 
            style={{ fontFamily: 'var(--font-display)', color: '#111111' }}
          >
            Page de Vente
          </h1>

          <h2 
            className="text-[28px] md:text-[32px] italic font-light mb-10" 
            style={{ fontFamily: 'var(--font-display)', color: '#8A4F3A' }}
          >
            De ton image à ta conversion.
          </h2>

          <p 
            className="text-[20px] font-light leading-[1.7] mb-16 max-w-[90%] mx-auto" 
            style={{ fontFamily: 'var(--font-body)', color: '#444444' }}
          >
            Une page qui parle, qui convainc, qui vend — pendant que tu dors. On s'occupe de la structure, du texte et du design. Toi, tu te concentres sur ce que tu fais de mieux.
          </p>

          <a 
            href="https://buy.stripe.com/bJe00k71A1HP9Ju4CGa7C0c" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-white uppercase tracking-[0.15em] font-medium transition-colors hover:opacity-90 flex items-center justify-center mb-8"
            style={{ 
              backgroundColor: '#8C5B4A', 
              fontSize: '15px', 
              padding: '28px 0',
              fontFamily: 'var(--font-body)',
              borderRadius: '0'
            }}
          >
            Valider & Réserver (497 $ CAD)
          </a>

          <button 
            onClick={onClose} 
            className="uppercase tracking-[0.2em] font-medium transition-colors hover:underline underline-offset-4"
            style={{ fontSize: '11px', color: '#666666', fontFamily: 'var(--font-body)' }}
          >
            Retour au site
          </button>
        </div>
      </div>
    </div>
  );
}
