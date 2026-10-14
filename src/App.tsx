import { useState, useEffect } from "react";
import StarterPackPage from "./StarterPackPage";
import SalesPageOffer from "./SalesPageOffer";
import FullPackOffer from "./FullPackOffer";
import heroImg from "./imports/hero_v5.jpg";
import servicesImg from "./imports/flat_lay.jpg";
import programmesImg from "./imports/4ccf67af-ad18-444c-88ab-db61f168eab6.jpeg";
import aboutImg from "./imports/grace_about.jpg";
import aboutImgNew from "./imports/grace_about_new.png";
import graceStoryImg from "./imports/grace_story_casual.jpg";
import graceCoachingImg from "./imports/visionnaire_final.jpg";
import extraImg from "./imports/Beige_Minimalist_Design_Basics_Webinar_Instagram_Post-1.jpeg";
import bannerImg from "./imports/fd379503-49c8-4ade-abcb-3ce69a7ef24a.jpeg";
import temoignagesHeroImg from "./imports/temoignages_hero_v2.jpg";
import postDiscoveryImg from "./imports/post_discovery_call_2.jpg";
import logoImg from "./imports/35e3e64f-97d8-498f-945b-1a4c9cde120d.jpeg";
import fullPackBannerImg from "./imports/AF360C92-9FBD-407C-B047-92244190071A.png";
import starterPackBannerImg from "./imports/173B008D-FA81-4C54-B76D-569A752C18B0.png";
import salesPageBannerImg from "./imports/sales_page_new.jpg";
import hayilBannerImg from "./imports/1EEE73E8-6B58-44C5-8857-E8041F3B7CD5.png";
import businessBannerImg from "./imports/F626897D-A920-42CA-BFD8-FA3017C867C4.png";
import HayilPage from "./HayilPage";
import BusinessPage from "./BusinessPage";
import temoignageDeborah from "./imports/temoignage_deborah_new.jpg";
import temoignageMaryAnge from "./imports/temoignage_maryange_new.jpg";
import temoignageNathalie from "./imports/temoignage_nathalie_new.jpg";
import temoignageMartha from "./imports/temoignage_martha_new.jpg";
import temoignagePatricia from "./imports/temoignage_patricia_new.jpg";
import temoignageLadyIsabel from "./imports/temoignage_ladyisabel_new.jpg";
import SmsFunnel from "./SmsFunnel";
import yofi1 from "./imports/yofi_1.jpg";
import yofi2 from "./imports/yofi_2.jpg";
import yofi3 from "./imports/yofi_3.jpg";
import realisation1 from "./imports/realisation_1.png";
import realisation2 from "./imports/realisation_2.png";
import realisation3 from "./imports/realisation_3.png";
import realisation4 from "./imports/realisation_4.png";
import realisation5 from "./imports/realisation_5.png";
import realisation6 from "./imports/realisation_6.png";
import realisation7 from "./imports/realisation_7.png";
import realisation8 from "./imports/realisation_8.png";

const ACCENT = "#8C5B4A"; // Terracotta
const INK = "#171717"; // Noir profond
const PAPER = "#FAF8F5"; // Blanc ivoire
const LAVENDER = "#EBE4EB"; // Lavande douce
const GREY = "#8F8A8A"; // Gris doux

function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y py-4 flex whitespace-nowrap" style={{ backgroundColor: LAVENDER, borderColor: `${GREY}30` }}>
      <div className="animate-marquee flex gap-8 items-center">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 text-xs tracking-[0.3em] uppercase font-light text-black/40">
            <span>Identité Visuelle</span>
            <span style={{ color: ACCENT }}>✦</span>
            <span>Stratégie Business</span>
            <span style={{ color: ACCENT }}>✦</span>
            <span>Communauté</span>
            <span style={{ color: ACCENT }}>✦</span>
            <span>Coaching</span>
            <span style={{ color: ACCENT }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-black/5 backdrop-blur-xl" style={{ backgroundColor: 'rgba(250, 248, 245, 0.95)' }}>
      <a href="#" className="flex-shrink-0">
        <img 
          src={logoImg} 
          alt="Les Boss Ladies" 
          className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
        />
      </a>
      <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: GREY }}>
        <a href="#temoignages" className="hover:text-black transition-colors">Communauté</a>
        <a
          href="#services"
          className="ml-4 px-6 py-3 transition-all hover:opacity-90 shadow-sm"
          style={{ backgroundColor: ACCENT, color: PAPER }}
        >
          Travailler avec nous
        </a>
      </nav>
      <button className="md:hidden" style={{ color: GREY }} onClick={() => setOpen(!open)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {open ? (
            <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.5" />
          ) : (
            <>
              <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
              <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-black/10 px-6 py-8 flex flex-col gap-6 text-xs uppercase tracking-[0.2em] md:hidden shadow-2xl" style={{ backgroundColor: PAPER, color: GREY }}>
          <button onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent('open-sms')); }} className="text-left hover:text-black">Le SMS</button>
          <a href="#temoignages" onClick={() => setOpen(false)} className="hover:text-black">Communauté</a>
          <a href="#services" onClick={() => setOpen(false)} style={{ color: ACCENT, fontWeight: "600" }}>Travailler avec nous →</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: LAVENDER }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left z-10 mt-8 lg:mt-0">
          <h1
            style={{ fontFamily: "var(--font-display)", color: INK }}
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-4"
          >
            Ton Dieu ordonne<br />
            que tu sois puissante.
          </h1>
          <p
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-10 font-medium"
            style={{ color: ACCENT }}
          >
            PSAUMES 68 : 29
          </p>
          <p className="text-base md:text-lg font-light max-w-lg leading-relaxed mb-10" style={{ color: GREY }}>
            Accompagnement et agence pour les femmes qui veulent bâtir un business, un ministère ou une plateforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#programmes"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:opacity-90 active:scale-95 shadow-md"
              style={{ backgroundColor: ACCENT, color: PAPER }}
            >
              Je commence ici
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative pt-6 pl-4 md:pl-8">
          {/* Arche de fond (Ivoire) */}
          <div className="absolute top-0 left-0 w-[90%] max-w-sm mx-auto lg:ml-auto aspect-[4/5.5] rounded-t-full rounded-b-3xl transform translate-x-4 md:translate-x-8 translate-y-4" style={{ backgroundColor: PAPER }}></div>
          
          {/* Arche principale (Photo) */}
          <div className="aspect-[4/6] md:aspect-[4/5.5] w-[90%] max-w-sm mx-auto lg:ml-auto relative rounded-t-full rounded-b-3xl border-4 z-10 flex items-end justify-center overflow-hidden shadow-xl" style={{ backgroundColor: PAPER, borderColor: PAPER }}>
            <img
              src={heroImg}
              alt="Grace, Les Boss Ladies"
              className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl saturate-[0.85] contrast-[1.1] brightness-[1.02] transition-all duration-[2s] hover:scale-105"
            />
          </div>
          <div className="mt-6 text-center max-w-sm mx-auto lg:ml-auto w-[90%]">
             <p className="text-[9px] md:text-[10px] tracking-widest uppercase font-medium" style={{ color: GREY }}>
                Grace Mafoua <span className="mx-1 opacity-50">·</span> Fondatrice des Boss Ladies <span className="mx-1 opacity-50">·</span> Conférencière & Pasteur
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Services({ onSelectOffer }: { onSelectOffer: (offer: string) => void }) {
  return (
    <section id="services" className="px-6 md:px-12 py-32" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
              L'AGENCE · DONE FOR YOU
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)", color: INK }}
              className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight"
            >
              Tu veux déléguer ?<br />
              <em className="font-light italic" style={{ color: GREY }}>On le fait pour toi.</em>
            </h2>
            <p className="text-base font-light leading-relaxed mt-8 max-w-md" style={{ color: GREY }}>
              Notre équipe construit les bases de ton business pour toi. Des livrables professionnels prêts à être utilisés pour vendre.
            </p>
          </div>
          <div className="flex-1 w-full relative pt-6 pl-4 hidden md:block">
            {/* Arche de fond */}
            <div className="absolute top-0 left-0 w-[90%] max-w-sm mx-auto lg:ml-auto aspect-[4/5.5] rounded-t-full rounded-b-3xl transform translate-x-4 md:translate-x-8 translate-y-4" style={{ backgroundColor: LAVENDER }}></div>
            
            {/* Arche principale (Photo) */}
            <div className="aspect-[4/5.5] w-[90%] max-w-sm mx-auto lg:ml-auto relative rounded-t-full rounded-b-3xl border-4 z-10 overflow-hidden shadow-xl" style={{ backgroundColor: PAPER, borderColor: PAPER }}>
               <img
                src={servicesImg}
                alt="Design process"
                className="w-full h-full object-cover object-top saturate-[0.85] contrast-[1.1] brightness-[1.02] hover:scale-105 transition-all duration-[1.5s]"
              />
            </div>
          </div>
        </div>

        {/* GRILLE SERVICES */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* STARTER PACK */}
          <div className="flex flex-col p-8 md:p-10 hover:shadow-md hover:-translate-y-1 transition-all duration-500 group relative rounded-2xl bg-white" style={{ border: `1px solid ${GREY}30` }}>
            <div className="mb-8 border-b pb-8" style={{ borderColor: `${GREY}30` }}>
              <h3 className="text-3xl font-medium tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", color: INK }}>
                Starter Pack
              </h3>
              <p className="text-sm font-light uppercase tracking-widest mt-2" style={{ color: ACCENT }}>297 $ CAD · Livré en 7 jours</p>
            </div>
            <p className="font-medium mb-4 uppercase tracking-[0.1em] text-[10px]" style={{ color: ACCENT }}>Pour poser les bases</p>
            <p className="font-light text-sm leading-relaxed mb-8 h-20" style={{ color: GREY }}>
              Ton logo, tes couleurs, ton kit Canva et un message clair. Pour celles qui se lancent ou qui veulent rafraîchir leur image.
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {["Logo et déclinaisons", "Palette et typographies", "Kit Canva réseaux sociaux", "Clarification du message"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-xs font-light" style={{ color: INK }}>
                  <span className="mt-[2px] text-[8px]" style={{ color: ACCENT }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <button onClick={() => onSelectOffer('starter')} className="text-[10px] tracking-[0.2em] uppercase font-medium transition-all border-b pb-1 w-max" style={{ color: INK, borderColor: `${GREY}50` }}>
              <span className="group-hover:opacity-70 transition-opacity">Je veux mon Starter Pack</span>
              <span className="ml-4 transition-transform group-hover:translate-x-2 inline-block" style={{ color: ACCENT }}>→</span>
            </button>
          </div>

          {/* PAGE DE VENTE */}
          <div className="flex flex-col p-8 md:p-10 hover:shadow-md hover:-translate-y-1 transition-all duration-500 group rounded-2xl bg-white" style={{ border: `1px solid ${GREY}30` }}>
            <div className="mb-8 border-b pb-8" style={{ borderColor: `${GREY}30` }}>
              <h3 className="text-3xl font-medium tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", color: INK }}>
                Page de Vente
              </h3>
              <p className="text-sm font-light uppercase tracking-widest mt-2" style={{ color: ACCENT }}>497 $ CAD · Livrée en 14 jours</p>
            </div>
            <p className="font-medium mb-4 uppercase tracking-[0.1em] text-[10px]" style={{ color: ACCENT }}>Pour présenter et vendre</p>
            <p className="font-light text-sm leading-relaxed mb-8 h-20" style={{ color: GREY }}>
              Une page rédigée, designée et mise en ligne, prête à convertir tes prospects en clientes.
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {["Structure stratégique", "Copywriting et optimisation", "Design de la page", "Intégration technique"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-xs font-light" style={{ color: INK }}>
                  <span className="mt-[2px] text-[8px]" style={{ color: ACCENT }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <button onClick={() => onSelectOffer('sales_page')} className="text-[10px] tracking-[0.2em] uppercase font-medium transition-all border-b pb-1 w-max" style={{ color: INK, borderColor: `${GREY}50` }}>
              <span className="group-hover:opacity-70 transition-opacity">Je veux ma Page de Vente</span>
              <span className="ml-4 transition-transform group-hover:translate-x-2 inline-block" style={{ color: ACCENT }}>→</span>
            </button>
          </div>

          {/* FULL PACK */}
          <div className="flex flex-col p-8 md:p-10 hover:shadow-md hover:-translate-y-1 transition-all duration-500 group rounded-2xl bg-white" style={{ border: `1px solid ${GREY}30` }}>
            <div className="mb-8 border-b pb-8" style={{ borderColor: `${GREY}30` }}>
              <h3 className="text-3xl font-medium tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", color: INK }}>
                Full Pack
              </h3>
              <p className="text-sm font-light uppercase tracking-widest mt-2" style={{ color: ACCENT }}>1 200 $ CAD · Livré en 21 jours</p>
            </div>
            <p className="font-medium mb-4 uppercase tracking-[0.1em] text-[10px]" style={{ color: ACCENT }}>Pour tout mettre en place</p>
            <p className="font-light text-sm leading-relaxed mb-8 h-28" style={{ color: GREY }}>
              Ton image et ta page de vente, créées ensemble pour que tout soit cohérent, du logo jusqu’au bouton d’achat. On reste avec toi après la livraison.
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {["Logo et déclinaisons", "Palette et typographies", "Kit Canva réseaux sociaux", "Clarification du message", "Structure stratégique de la page", "Copywriting et optimisation", "Design de la page", "Intégration technique"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-xs font-light" style={{ color: INK }}>
                  <span className="mt-[2px] text-[8px]" style={{ color: ACCENT }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <button onClick={() => onSelectOffer('full_pack')} className="text-[10px] tracking-[0.2em] uppercase font-medium transition-all border-b pb-1 w-max" style={{ color: INK, borderColor: `${GREY}50` }}>
              <span className="group-hover:opacity-70 transition-opacity">Je veux le Full Pack</span>
              <span className="ml-4 transition-transform group-hover:translate-x-2 inline-block" style={{ color: ACCENT }}>→</span>
            </button>
          </div>
        </div>
        
        <div className="mt-24 md:mt-32 border-t pt-16 md:pt-24" style={{ borderColor: `${GREY}20` }}>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
                PROCESSUS
              </p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: INK }}>
                Comment ça se passe
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <span className="font-medium text-lg" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>1.</span>
                  <p className="text-lg font-light pt-1" style={{ color: INK }}>Tu réserves.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium text-lg" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>2.</span>
                  <p className="text-lg font-light pt-1" style={{ color: INK }}>Nous établissons un rdvs.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium text-lg" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>3.</span>
                  <p className="text-lg font-light pt-1 leading-relaxed" style={{ color: INK }}>On livre dans le délai annoncé, avec 2 révision(s) incluse(s).</p>
                </div>
              </div>

              <div className="p-6 bg-white/50 rounded-xl" style={{ border: `1px solid ${GREY}30` }}>
                <p className="text-sm font-light mb-4" style={{ color: GREY }}>Pas sûre de ton choix entre l’agence et Visionnaire ?</p>
                <a href="#appel-decouverte" className="text-[10px] uppercase tracking-[0.2em] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: INK }}>
                  Réserve un appel de 15 minutes →
                </a>
              </div>
            </div>

            <div className="flex-[1.5] w-full">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
                PORTFOLIO
              </p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: INK }}>
                Nos réalisations
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation6} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation7} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation8} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation1} alt="Réalisation Agence - Identité Visuelle" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation2} alt="Réalisation Agence - Réseaux Sociaux" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation3} alt="Réalisation Agence - Kit de Marque" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation4} alt="Réalisation Agence - Papeterie" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={realisation5} alt="Réalisation Agence - Site Web" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={yofi1} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={yofi2} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] snap-start rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-white border" style={{ borderColor: `${GREY}20` }}>
                  <img src={yofi3} alt="Réalisation Agence" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function Recognize() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-black/5" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2
          style={{ fontFamily: "var(--font-display)", color: INK }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-16"
        >
          Tu te reconnais ici ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl mx-auto">
          {[
            "Tu as la vision, mais tu ne sais pas quoi faire en premier.",
            "Tu veux gagner de l’argent sans trahir ta foi ni tes valeurs.",
            "Tu publies, tu travailles, et ton offre ne se vend pas encore.",
            "Tu es prête à investir en toi avant d’investir dans des outils."
          ].map((text, i) => (
            <div key={i} className="flex flex-col items-center p-10 shadow-sm hover:-translate-y-1 transition-transform duration-500 rounded-2xl" style={{ backgroundColor: LAVENDER }}>
              <span className="text-3xl mb-6" style={{ color: ACCENT }}>✦</span>
              <p className="font-light leading-relaxed text-lg" style={{ color: INK }}>{text}</p>
            </div>
          ))}
        </div>

        <a
          href="#par-ou-commencer"
          className="inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:opacity-90 active:scale-95 shadow-md"
          style={{ backgroundColor: INK, color: PAPER }}
        >
          Voir par où commencer <span>→</span>
        </a>
      </div>
    </section>
  );
}

function WhereToStart({ onSelectOffer }: { onSelectOffer: (offer: string) => void }) {
  const options = [
    { text: "Je veux un peu de motivation gratuite", action: "SMS des Boss Ladies", onClick: () => { window.location.href = '#sms'; } },
    { text: "Je veux de la clarté, vite, avec Grace", action: "Visionnaire · 197 $", onClick: () => { window.location.href = '#visionnaire'; } },
    { text: "Je veux être plus forte intérieurement", action: "HAYIL", onClick: () => onSelectOffer('hayil') },
    { text: "Je veux construire mon offre", action: "Business Strategy", onClick: () => onSelectOffer('business') },
    { text: "Je veux déléguer", action: "L’agence", onClick: () => { window.location.href = '#services'; } }
  ];

  return (
    <section id="par-ou-commencer" className="px-6 md:px-12 py-24 border-t border-black/5" style={{ backgroundColor: PAPER }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
          PAR OÙ COMMENCER ?
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)", color: INK }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-center"
        >
          Choisis ton point de départ.
        </h2>
        
        <div className="w-full flex flex-col gap-4">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={opt.onClick}
              className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left group"
              style={{ backgroundColor: LAVENDER, border: `1px solid ${GREY}20` }}
            >
              <span className="font-light text-lg sm:text-xl mb-2 sm:mb-0" style={{ color: INK }}>{opt.text}</span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: ACCENT }}>{opt.action}</span>
                <span className="text-xl transition-transform group-hover:translate-x-2" style={{ color: ACCENT }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


function Programmes({ onSelectOffer }: { onSelectOffer: (offer: string) => void }) {
  return (
    <section id="programmes" className="px-6 md:px-12 py-32" style={{ backgroundColor: LAVENDER }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
            L'Académie (Done-with-you)
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)", color: INK }}
            className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight"
          >
            Nos programmes<br />
            <em className="font-light italic" style={{ color: GREY }}>de transformation.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* HAYIL */}
          <div className="p-10 md:p-16 flex flex-col justify-center rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0" style={{ backgroundColor: PAPER }}>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: ACCENT }}>
              PROGRAMME EN GROUPE · HAYIL
            </p>
            <h3 className="text-3xl md:text-4xl font-medium mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", color: INK }}>
              Deviens la femme capable de porter sa vision
            </h3>
            <p className="text-lg font-light italic mb-8" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>
              Challenge de force intérieure — 14 jours
            </p>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: GREY }}>
              Avant de bâtir un business, on bâtit la femme. HAYIL t'accompagne dans une transformation profonde pour poser les fondations qui ne s'effondrent pas.
            </p>
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4" style={{ color: INK }}>Tu travailleras sur :</p>
              <div className="grid grid-cols-2 gap-3">
                {["Ton identité", "Ta discipline", "Ta confiance", "Ton leadership", "Ta légitimité", "Ton mindset"].map(item => (
                  <span key={item} className="text-sm font-light flex items-start gap-2" style={{ color: GREY }}>
                    <span className="text-[10px] mt-0.5" style={{ color: ACCENT }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Encadré témoignage intégré */}
            <div className="p-6 border mb-10 shadow-sm relative rounded-xl" style={{ backgroundColor: LAVENDER, borderColor: `${GREY}30` }}>
              <span className="absolute -top-4 -left-2 text-4xl" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>"</span>
              <p className="italic font-light text-sm leading-relaxed relative z-10" style={{ color: INK }}>
                Je comprends enfin ce qui bloquait dans mon message...
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] font-medium mt-3" style={{ color: GREY }}>
                — Lady Isabel, participante
              </p>
            </div>

            <button onClick={() => onSelectOffer('hayil')} className="inline-flex items-center justify-center gap-4 px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all active:scale-95 w-full md:w-max rounded-sm" style={{ backgroundColor: ACCENT, color: PAPER }}>
              Réserver ma place →
            </button>
          </div>

          {/* BUSINESS STRATEGY */}
          <div className="p-10 md:p-16 flex flex-col justify-center rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0" style={{ backgroundColor: PAPER }}>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: ACCENT }}>
              ACADÉMIE · EN GROUPE · BUSINESS STRATEGY
            </p>
            <h3 className="text-3xl md:text-4xl font-medium mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", color: INK }}>
              3 mois pour transformer ton talent en business rentable
            </h3>
            <p className="text-lg font-light italic mb-6" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>
              Un accompagnement de 3 mois, en ligne, pour passer de l’idée à une offre qui se vend.
            </p>
            <p className="text-base font-light leading-relaxed mb-6" style={{ color: GREY }}>
              Il est temps de construire les fondations d’un business solide et d’apprendre à vendre de manière alignée, de l’idée jusqu’à ta cliente idéale.
            </p>
            
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium mb-2" style={{ color: INK }}>Pour toi si</p>
              <p className="text-sm font-light leading-relaxed" style={{ color: GREY }}>
                Tu as un talent, une idée ou une offre, et tu veux en faire un business qui rapporte.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4" style={{ color: INK }}>Tu repars avec :</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Une offre que tu expliques en une phrase",
                  "Un positionnement qui attire tes clientes idéales",
                  "Des prix que tu annonces avec assurance",
                  "Un parcours de vente prêt pour tes premières clientes"
                ].map(item => (
                  <span key={item} className="text-sm font-light flex items-start gap-2" style={{ color: GREY }}>
                    <span className="text-[10px] mt-0.5" style={{ color: ACCENT }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 py-3 mb-8 text-[9px] md:text-[10px] uppercase tracking-widest font-medium flex flex-wrap items-center gap-3 w-full lg:w-fit rounded-sm border" style={{ borderColor: `${GREY}30`, backgroundColor: '#FFFFFF' }}>
              <span style={{ color: INK }}>3 × 197 $ CAD (591 $ au total)</span>
              <span className="hidden sm:inline" style={{ color: GREY }}>·</span>
              <span style={{ color: INK }}>3 MOIS</span>
              <span className="hidden sm:inline" style={{ color: GREY }}>·</span>
              <span style={{ color: INK }}>EN LIGNE</span>
              <span className="hidden sm:inline" style={{ color: GREY }}>·</span>
              <span style={{ color: INK }}>10 places pour cette formation de groupe</span>
              <span className="hidden sm:inline" style={{ color: GREY }}>·</span>
              <span style={{ color: ACCENT }}>Les sessions ouvrent à des dates précises.</span>
            </div>

            {/* Encadré témoignage intégré */}
            <div className="p-6 border mb-10 shadow-sm relative rounded-xl" style={{ backgroundColor: LAVENDER, borderColor: `${GREY}30` }}>
              <span className="absolute -top-4 -left-2 text-4xl" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>"</span>
              <p className="italic font-light text-sm leading-relaxed relative z-10" style={{ color: INK }}>
                Grâce au programme, j'ai enfin lancé mon offre avec clarté. Mes premières clientes sont arrivées naturellement.
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] font-medium mt-3" style={{ color: GREY }}>
                — Sarah, entrepreneure
              </p>
            </div>

            <button onClick={() => onSelectOffer('business')} className="inline-flex items-center justify-center gap-4 px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all active:scale-95 w-full md:w-max rounded-sm" style={{ backgroundColor: ACCENT, color: PAPER }}>
              Me prévenir de la prochaine session →
            </button>
          </div>

        </div>
        
        {/* IMAGE INTERCALAIRE */}
        <div className="w-full mt-24 md:aspect-[21/9] aspect-square overflow-hidden shadow-md rounded-3xl" style={{ backgroundColor: LAVENDER }}>
          <img
            src={programmesImg}
            alt="Boss Ladies Communauté"
            className="w-full h-full object-cover object-[50%_15%] md:object-[50%_15%] saturate-[0.85] contrast-[1.1] brightness-[1.02] transition-all duration-[2s] hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}



function DiscoveryCall() {
  return (
    <section id="appel-decouverte" className="px-6 md:px-12 py-32 border-t border-black/5" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6 flex items-center justify-center gap-2" style={{ color: ACCENT }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          30 Min · <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Appel Vidéo
        </p>

        <h2 style={{ fontFamily: "var(--font-display)", color: '#111' }} className="text-4xl md:text-5xl font-medium leading-[1.1] mb-4">
          Réserve ton appel découverte
        </h2>
        
        <p className="font-light text-xl md:text-2xl mb-10 italic" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
          Choisis le moment qui te convient.
        </p>
        
        <p className="font-light text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#444' }}>
          Cet appel gratuit est l'occasion d'explorer ta vision, de discuter de tes besoins et de déterminer quelle offre est la plus alignée pour toi.
        </p>
        
        <a
          href="https://calendar.app.google/rXonAJbCoAaitn3i8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm text-white uppercase tracking-[0.15em] font-medium transition-colors hover:opacity-90 flex items-center justify-center shadow-lg"
          style={{ 
            backgroundColor: ACCENT, 
            fontSize: '13px', 
            padding: '24px 0',
            fontFamily: 'var(--font-body)',
            borderRadius: '0'
          }}
        >
          Voir mes disponibilités
        </a>
        
        <p className="text-[10px] md:text-xs font-light mt-6 uppercase tracking-[0.1em]" style={{ color: '#666' }}>
          S'ouvre dans un onglet sécurisé
        </p>
      </div>
    </section>
  );
}


function Temoignages() {
  const items = [
    {
      quote: "Ces modules m’ont ouvert les yeux d’une autre manière sur l’entrepreneuriat et comment poser de bonnes bases. Je les prends tous en considération. Merci de m’avoir poussée à me lancer.",
      name: "Déborah",
      role: "Participante au programme",
      img: temoignageDeborah
    },
    {
      quote: "C’était super, très enrichissant et concret. Surtout, merci pour tes conseils pratiques qui viennent de ton expérience concrète dans le domaine.",
      name: "Mary Ange",
      role: "Participante au programme",
      img: temoignageMaryAnge
    },
    {
      quote: "Tu as assuré comme une cheffe. Wow ! Merci pour ta persévérance et détermination. Ce cours simplifie ce que j'ai appris sur le tunnel de vente. Merci du fond du cœur pour tes enseignements de Haute Qualité.",
      name: "Nathalie",
      role: "Participante au programme",
      img: temoignageNathalie
    },
    {
      quote: "Merci beaucoup pour cette formation. J’ai énormément appris lors de ces derniers trois mois. Merci de m’avoir encouragée, accompagnée, conseillée et soutenue ! Je suis reconnaissante pour ce parcours riche et formateur.",
      name: "Martha",
      role: "Participante au programme",
      img: temoignageMartha
    },
    {
      quote: "Je réalise vraiment qu'en peu de temps, j'ai réussi à avoir une idée plus claire et précise de quoi faire et comment le faire. Je suis sincèrement heureuse de sortir de ma coquille peu à peu.",
      name: "Patricia",
      role: "Participante au programme",
      img: temoignagePatricia
    },
    {
      quote: "Je comprends enfin ce qui bloquait dans mon message. J'ai pu me projeter et voir comment les choses vont se débloquer. Je suis émue d'avoir investi dans quelque chose qui va réellement m'aider. Une formation simple mais puissante. Ce programme n'a pas de prix !",
      name: "Lady Isabel",
      role: "Participante au programme",
      img: temoignageLadyIsabel
    }
  ];

  return (
    <section id="temoignages" className="px-6 md:px-12 py-32" style={{ backgroundColor: LAVENDER }}>
      <div className="max-w-7xl mx-auto">
        
        {/* IMAGE INTRODUCTIVE TÉMOIGNAGES */}
        <div className="w-full max-w-2xl mx-auto mb-20 overflow-hidden shadow-xl rounded-3xl aspect-square" style={{ backgroundColor: PAPER }}>
          <img
            src={temoignagesHeroImg}
            alt="Femmes de la communauté Les Boss Ladies"
            className="w-full h-full object-cover object-top saturate-[0.85] contrast-[1.1] brightness-[1.02]"
          />
        </div>

        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "var(--font-display)", color: INK }}
            className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight"
          >
            Leurs mots. Notre fierté.
          </h2>
        </div>

        {/* GRILLE DES TÉMOIGNAGES TEXTES */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((t, i) => (
            <div key={i} className="flex flex-col justify-between p-6 md:p-8 hover:-translate-y-1 transition-all duration-500 rounded-2xl shadow-sm" style={{ backgroundColor: PAPER, border: `1px solid ${GREY}30` }}>
              <div className="mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl opacity-30" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>"</span>
                <p className="font-light leading-snug md:leading-relaxed mt-2 text-sm md:text-base" style={{ fontFamily: "var(--font-display)", color: INK }}>
                  {t.quote}
                </p>
              </div>
              <div className="pt-4 md:pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4" style={{ borderColor: `${GREY}30` }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border shrink-0 bg-black/5" style={{ borderColor: `${GREY}30` }}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover saturate-[0.85] contrast-[1.1] brightness-[1.02]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium" style={{ color: INK }}>{t.name}</p>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest mt-0.5" style={{ color: GREY }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 md:px-12 py-32 border-t border-black/5" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-3xl text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-8 font-medium" style={{ color: ACCENT }}>
            À propos
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)", color: INK }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight"
          >
            Derrière Les Boss Ladies, il y a Grace Mafoua.
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 w-full relative pt-6 md:pl-4">
            {/* Arche de fond */}
            <div className="absolute top-0 left-0 w-[90%] mx-auto lg:mx-0 aspect-[4/5] rounded-t-full rounded-b-3xl transform translate-x-4 translate-y-4 hidden md:block" style={{ backgroundColor: LAVENDER }}></div>
            
            {/* Arche principale (Photo) */}
            <div className="aspect-[4/5] w-full md:w-[90%] mx-auto lg:mx-0 relative rounded-t-full rounded-b-3xl border-4 z-10 overflow-hidden shadow-2xl" style={{ backgroundColor: PAPER, borderColor: PAPER }}>
              <img
                src={aboutImgNew}
                alt="Grace Mafoua"
                className="w-full h-full object-cover saturate-[0.85] contrast-[1.1] brightness-[1.02] transition-all duration-[2s] hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center max-w-sm mx-auto lg:ml-auto w-[90%]">
               <p className="text-[9px] md:text-[10px] tracking-widest uppercase font-medium" style={{ color: GREY }}>
                  Grace Mafoua <span className="mx-1 opacity-50">·</span> fondatrice des Boss Ladies <span className="mx-1 opacity-50">·</span> conférencière
               </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed" style={{ color: INK }}>
              <p>
                J'ai grandi en admirant ma mère. Passionnée de mode, couturière, dessinatrice : elle avait tout pour briller. Mais la vie en a décidé autrement. Elle s'est retrouvée aide-soignante en France, loin de ses rêves, jusqu'à un accident de travail grave qui aurait pu tout arrêter. Elle ne s'est pas arrêtée. Elle s'est battue. Et c'est elle qui m'a montré le chemin de l'entrepreneuriat.
              </p>
              <p>
                Moi, j'ai fait mes études en communication avec un seul rêve : travailler pour un grand magazine féminin. L'image, la beauté, la mode, le luxe, mais surtout les femmes. Leur place dans la société. Leur évolution. Leur histoire. Et particulièrement les femmes noires, si peu représentées dans les espaces où se construit le monde.
              </p>
              <p>
                Mais les portes ne s'ouvraient pas. J'allais en entretien avec la certitude que ces places n'étaient pas faites pour moi.
              </p>
              <p>
                Un jour, j'ai arrêté d'attendre qu'on me fasse une place. J'ai décidé d'en créer une, pour moi et pour toutes les femmes de ma communauté qui vivaient la même frustration. Des femmes diplômées, capables, pleines de vision, qui ne savaient pas encore qu'elles avaient tout ce qu'il fallait pour bâtir.
              </p>
              <p>
                Les Boss Ladies est né de ça. Pas d'une stratégie. D'une nécessité.
              </p>
            </div>
            
            <div className="mt-10 md:mt-16 mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight w-full" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
                La place que tu cherches, tu peux la créer. Et tu n'as pas à le faire seule.
              </h3>
            </div>

            <div className="pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6" style={{ borderColor: `${GREY}30` }}>
              <div>
                <p className="text-sm uppercase tracking-widest font-medium" style={{ color: INK }}>
                  Grace Mafoua
                </p>
                <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: GREY }}>
                  Fondatrice des Boss Ladies depuis 2018
                </p>
              </div>
              <div className="flex flex-wrap gap-6 sm:gap-12 mt-6 sm:mt-0">
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
                    200
                  </p>
                  <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: GREY }}>
                    Femmes<br/>accompagnées
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
                    5
                  </p>
                  <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: GREY }}>
                    Conférences
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
                    72
                  </p>
                  <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: GREY }}>
                    Sessions de<br/>programme
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 font-medium text-xs md:text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-display)", color: GREY }}>
               <span style={{ color: INK }}>Forbes</span>
               <span>·</span>
               <span style={{ color: INK }}>Marie Claire</span>
               <span>·</span>
               <span style={{ color: INK }}>Canal+</span>
            </div>
            
            <div className="mt-12">
              <a
                href="#par-ou-commencer"
                className="inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:opacity-90 active:scale-95 shadow-md w-full sm:w-max"
                style={{ backgroundColor: INK, color: PAPER }}
              >
                Voir comment je t’accompagne <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function CTA({ onSelectOffer }: { onSelectOffer: (offer: string) => void }) {
  return (
    <section id="cta" className="relative px-6 md:px-12 py-32 flex flex-col items-center justify-center text-center border-t border-white/5" style={{ backgroundColor: INK, color: PAPER }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10 text-center">
        
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6" style={{ color: GREY }}>
          TU ES PRÊTE
        </p>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-16"
        >
          Ton Dieu ordonne que tu sois puissante.<br />
          <em className="font-light italic" style={{ color: GREY }}>Et si tu commençais aujourd'hui ?</em>
        </h2>
        
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-16">
          <button
            onClick={() => onSelectOffer('hayil')}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-[11px] font-medium transition-all hover:opacity-90 active:scale-95 uppercase tracking-[0.2em] shadow-xl"
            style={{ backgroundColor: ACCENT, color: PAPER }}
          >
            Je rejoins HAYIL <span>→</span>
          </button>
          <button
            onClick={() => onSelectOffer('business')}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-[11px] font-medium transition-all hover:opacity-90 active:scale-95 uppercase tracking-[0.2em] shadow-xl"
            style={{ backgroundColor: LAVENDER, color: INK }}
          >
            Je rejoins Business Strategy <span>→</span>
          </button>
          <a
            href="#visionnaire"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-[11px] font-medium transition-all hover:bg-white/5 active:scale-95 uppercase tracking-[0.2em] border"
            style={{ borderColor: PAPER, color: PAPER }}
          >
            Je réserve ma séance VISIONNAIRE <span>→</span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[11px] md:text-xs font-light opacity-60 leading-relaxed mb-4 max-w-sm">
            Tu ne sais pas par où commencer ?<br />
            Commence par le SMS — Pasteure Grâce t'accompagne<br className="hidden md:block" /> chaque semaine, gratuitement.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-sms'))}
            className="text-[11px] uppercase tracking-widest font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
            style={{ color: GREY }}
          >
            Je m'inscris au SMS <span>→</span>
          </button>
        </div>
        
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-20 pb-10 flex flex-col items-center overflow-hidden" style={{ backgroundColor: INK, color: PAPER }}>
      <div className="w-full px-6 md:px-12 mb-20 text-center flex justify-center">
        <h2 
          className="text-[10vw] whitespace-nowrap font-bold tracking-tight uppercase opacity-30 hover:opacity-100 transition-opacity duration-700"
          style={{ fontFamily: "var(--font-body)", color: PAPER }}
        >
          LESBOSSLADIES
        </h2>
      </div>
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em]" style={{ color: GREY }}>
        <span>© {new Date().getFullYear()} — Tous droits réservés</span>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: GREY }}>Mentions légales</a>
          <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: GREY }}>CGV</a>
          <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: LAVENDER }}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function OfferLandingPage({ offer, onClose }: { offer: string; onClose: () => void }) {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const offerDetails: Record<string, any> = {
    starter: { title: "Starter Pack", price: "297 $ CAD", desc: "Poser les bases de ton identité.", text: "Ton logo, ton message, ton image — posés une bonne fois pour toutes. Dans quelques jours, tu auras tout ce qu'il faut pour te présenter au monde avec clarté et confiance.", img: starterPackBannerImg, heightClass: "h-auto max-h-[85vh]", imgClass: "w-full h-auto object-contain object-top", saturate: "saturate-[0.85] contrast-[1.1] brightness-[1.02]" },
    sales_page: { title: "Page de Vente", price: "497 $ CAD", desc: "De ton image à ta conversion.", text: "Une page qui parle, qui convainc, qui vend — pendant que tu dors. On s'occupe de la structure, du texte et du design. Toi, tu te concentres sur ce que tu fais de mieux.", img: salesPageBannerImg, heightClass: "h-auto max-h-[85vh]", imgClass: "w-full h-auto object-contain object-top", saturate: "saturate-[0.85] contrast-[1.1] brightness-[1.02]", link: "https://buy.stripe.com/6oU00kclU0DL2h2edga7C09" },
    full_pack: { title: "Full Pack", price: "1 200 $ CAD", desc: "L'expérience complète de lancement.", text: "Tu ne commandes pas juste un service. Tu poses les fondations d'un business qui te ressemble de A à Z. Identité, page de vente, stratégie de lancement — tout est pensé ensemble, pour que tu arrives sur le marché avec force.", img: fullPackBannerImg, objectPos: "object-center", saturate: "saturate-[0.85] contrast-[1.1] brightness-[1.02]", link: "https://buy.stripe.com/14A7sM4Ts729g7S4CGa7C0a" },
    hayil: { title: "HAYIL", price: "Prochaine session à venir", desc: "14 jours de challenge de force intérieure", img: hayilBannerImg, heightClass: "h-auto max-h-[85vh]", imgClass: "w-full h-auto object-contain object-top", saturate: "saturate-[0.85] contrast-[1.1] brightness-[1.02]", waitlist: true },
    business: { title: "Business Strategy", price: "Prochaine session à venir", desc: "Trois mois d'accompagnement de suivi business en ligne", img: businessBannerImg, heightClass: "h-auto max-h-[85vh]", imgClass: "w-full h-auto object-contain object-top", saturate: "saturate-[0.85] contrast-[1.1] brightness-[1.02]", waitlist: true },
  };

  const current = offerDetails[offer];
  const imageToUse = current.img || bannerImg;
  const objectPosition = current.objectPos || "object-[50%_35%]";
  const filterStyle = current.saturate || "saturate-[0.85] contrast-[1.1] brightness-[1.02]";
  const heightClass = current.heightClass || "h-[40vh] md:h-[50vh]";
  const imgClass = current.imgClass || "w-full h-full object-cover";

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto flex flex-col animate-in fade-in duration-500" style={{ backgroundColor: PAPER }}>
      
      {/* Bouton de fermeture */}
      <button onClick={onClose} className="absolute top-6 right-6 text-black bg-white/80 p-4 rounded-full hover:bg-black hover:text-white transition-all backdrop-blur-md shadow-lg z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div className={`w-full ${heightClass} border-b border-black/10 shrink-0 flex items-center justify-center overflow-hidden bg-black/5`}>
        <img src={imageToUse} className={`${imgClass} ${objectPosition} ${filterStyle}`} style={{ maxHeight: 'inherit' }} alt="Banner" />
      </div>
      
      {/* Contenu sous l'image */}
      <div className="max-w-3xl mx-auto w-full px-6 py-16 flex flex-col items-center text-center flex-1">
        <p className="text-[10px] uppercase tracking-[0.4em] font-medium mb-6" style={{ color: ACCENT }}>{current.waitlist ? "Liste d'attente" : "Excellent choix"}</p>
        
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: INK }}>
          {current.title}
        </h2>
        
        <p className="text-xl md:text-2xl font-light italic mb-10" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>
          {current.desc}
        </p>
        
        <p className="text-black/60 text-lg font-light leading-relaxed mb-16 max-w-xl">
          {current.waitlist 
            ? "Les inscriptions pour la prochaine session ouvriront bientôt. Inscris-toi sur la liste d'attente pour être informée en avant-première et sécuriser ta place." 
            : current.text || "Tu es sur le point de transformer ta vision en réalité. Pour finaliser ta demande et démarrer notre collaboration, clique sur le bouton ci-dessous pour procéder au paiement et réserver ton appel de lancement."}
        </p>
        
        {current.waitlist ? (
          waitlistSubmitted ? (
            <div className="flex flex-col w-full max-w-sm gap-6 animate-in fade-in">
              <div className="p-8 border border-black/5 bg-black/5 text-black">
                <p className="text-lg mb-2">✨</p>
                <p className="font-medium tracking-widest uppercase text-xs mb-2">Inscription confirmée</p>
                <p className="font-light text-sm opacity-60">Tu recevras un email dès l'ouverture des places.</p>
              </div>
              <button onClick={onClose} className="w-full py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all text-black/40 hover:text-black border-b border-transparent hover:border-black w-max mx-auto">
                Retour au site
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setWaitlistSubmitted(true); }} className="flex flex-col w-full max-w-sm gap-4 text-left">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Prénom</label>
                <input required type="text" className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Email</label>
                <input required type="email" className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <button type="submit" className="w-full py-6 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:brightness-110 text-white shadow-xl shadow-purple-500/20" style={{ backgroundColor: ACCENT }}>
                Rejoindre la liste
              </button>
              <button type="button" onClick={onClose} className="w-full py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all text-black/40 hover:text-black border-b border-transparent hover:border-black w-max mx-auto">
                Retour au site
              </button>
            </form>
          )
        ) : (
          <div className="flex flex-col w-full max-w-sm gap-6">
            <a 
              href={current.link || "mailto:contact@lesbossladies.com"} 
              target={current.link ? "_blank" : undefined}
              rel={current.link ? "noopener noreferrer" : undefined}
              className="w-full py-6 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:brightness-110 text-white shadow-xl shadow-purple-500/20" 
              style={{ backgroundColor: ACCENT }}
            >
              Valider & Réserver ({current.price})
            </a>
            <button onClick={onClose} className="w-full py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all text-black/40 hover:text-black border-b border-transparent hover:border-black w-max mx-auto">
              Retour au site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SessionIndividuelle() {
  return (
    <section id="visionnaire" className="px-6 md:px-12 py-32 border-t border-black/5" style={{ backgroundColor: PAPER, color: INK }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: ACCENT }}>
            Session Individuelle
          </p>
          
          <h2 style={{ fontFamily: "var(--font-display)", color: INK }} className="text-5xl md:text-7xl font-medium mb-12">
            VISIONNAIRE
          </h2>

          <p className="font-light leading-relaxed text-base md:text-lg mb-8" style={{ color: GREY }}>
            Tu as la vision. Tu as la foi. Mais en ce moment, tu as besoin de quelqu'un qui te regarde en face et te dit exactement où aller. VISIONNAIRE, c'est 90 minutes uniquement pour toi — stratégie, transformation intérieure, et clarté pour lancer ce que tu portes depuis trop longtemps. Pas de formule générique. Pas de groupe. Juste toi, ta vision, et une accompagnatrice qui comprend à la fois la femme et l'entrepreneuse que tu es.
          </p>

          <div className="px-6 py-4 mb-8 text-[10px] md:text-xs uppercase tracking-widest font-medium flex flex-wrap items-center gap-4 w-full lg:w-fit rounded-sm border" style={{ borderColor: `${GREY}30`, backgroundColor: '#FFFFFF' }}>
            <span style={{ color: INK }}>197 $ CAD</span>
            <span className="hidden sm:inline" style={{ color: GREY }}>·</span>
            <span style={{ color: INK }}>90 minutes</span>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-max">
            <a
              href="https://buy.stripe.com/6oUcN6gCaael08U8SWa7C0e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:opacity-90 active:scale-95 shadow-md w-full"
              style={{ backgroundColor: ACCENT, color: PAPER }}
            >
              Je réserve ma séance Visionnaire <span>→</span>
            </a>
            <p className="text-[10px] text-center uppercase tracking-widest opacity-60 font-medium">
              Report possible jusqu’à 48 h avant la séance.
            </p>
            <a href="#appel-decouverte" className="text-[11px] text-center mt-4 uppercase tracking-[0.2em] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: INK }}>
              Pas sûre que ce soit pour toi ? Réserve un appel de 15 minutes.
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 w-full relative pt-6 md:pl-4">
          {/* Arche de fond */}
          <div className="absolute top-0 left-0 w-[90%] mx-auto lg:mx-0 aspect-[4/5] rounded-t-full rounded-b-3xl transform translate-x-4 translate-y-4 hidden md:block" style={{ backgroundColor: LAVENDER }}></div>
          
          {/* Arche principale (Photo) */}
          <div className="aspect-[4/5] w-full md:w-[90%] mx-auto lg:mx-0 relative bg-white rounded-t-full rounded-b-3xl border-4 border-white z-10 overflow-hidden shadow-xl">
            <img
              src={graceCoachingImg}
              alt="Grace Mafoua en session de coaching"
              className="w-full h-full object-cover saturate-[0.85] contrast-[1.1] brightness-[1.02] transition-all duration-[2s] hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function SmsCtaMidPage() {
  const [smsForm, setSmsForm] = useState({ name: "", country: "", phone: "" });
  const [smsStatus, setSmsStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (smsStatus === "sending") return;

    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/ilt8l2gb9oixk99rhduxlfbvxsqeno9u";
    const payload = {
      first_name: smsForm.name,
      phone: smsForm.phone,
      country: smsForm.country,
      has_consent: true,
    };

    console.log("Données envoyées à Make :", payload);
    setSmsStatus("sending");

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Données transmises avec succès à Make !");
        setSmsStatus("success");
        setSmsForm({ name: "", country: "", phone: "" });
      } else {
        console.error("Erreur lors de l'envoi à Make :", response.status, response.statusText);
        setSmsStatus("error");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setSmsStatus("error");
    }
  };

  return (
    <section id="sms" className="px-6 md:px-12 py-32 border-y border-black/5" style={{ backgroundColor: LAVENDER }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Textes et Mockup */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6" style={{ color: ACCENT }}>
            GRATUIT · EN ATTENDANT HAYIL
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", color: INK }} className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8">
            Et si ton prochain déclic arrivait directement sur ton téléphone ?
          </h2>
          
          <p className="font-light text-base md:text-lg mb-12 leading-relaxed" style={{ color: GREY }}>
            Chaque semaine, un SMS court pour garder ton élan jusqu'à la prochaine session de HAYIL : une pensée qui te remet en perspective, une posture à adopter, un petit défi concret et une question qui te fait voir plus grand.
          </p>
          
          {/* Faux Message */}
          <div className="p-6 md:p-8 rounded-2xl rounded-bl-none shadow-sm max-w-sm relative" style={{ backgroundColor: PAPER, border: `1px solid ${GREY}20` }}>
            <div className="text-sm font-light leading-relaxed space-y-4" style={{ color: INK }}>
              <p><strong className="font-medium" style={{ color: ACCENT }}>Déclic :</strong> Tu n'as pas besoin qu'on te fasse une place.</p>
              <p><strong className="font-medium" style={{ color: ACCENT }}>Action :</strong> Écris en une phrase ce que tu veux lancer, et envoie-la à une personne de confiance.</p>
              <p className="text-xs uppercase tracking-widest mt-4 opacity-60">LES BOSS LADIES 👑</p>
              <p className="italic">À toi de jouer, Boss Lady.</p>
            </div>
            {/* Queue de la bulle */}
            <div className="absolute -bottom-3 left-0 w-6 h-6" style={{ backgroundColor: PAPER, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
          </div>
        </div>
        
        {/* Formulaire */}
        <div className="p-8 md:p-12 rounded-3xl shadow-xl bg-white" style={{ border: `1px solid ${GREY}20` }}>
          <h3 className="text-2xl font-medium mb-8" style={{ fontFamily: "var(--font-display)", color: INK }}>
            Reçois le SMS des Boss Ladies
          </h3>
          <form className="flex flex-col gap-6" onSubmit={handleSmsSubmit}>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: GREY }}>Prénom</label>
              <input required type="text" placeholder="Ton prénom" value={smsForm.name} onChange={(e) => setSmsForm({ ...smsForm, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors" style={{ borderColor: `${GREY}40`, backgroundColor: PAPER, color: INK }} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: GREY }}>Pays</label>
              <select required value={smsForm.country} onChange={(e) => setSmsForm({ ...smsForm, country: e.target.value })} className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors appearance-none" style={{ borderColor: `${GREY}40`, backgroundColor: PAPER, color: INK }}>
                <option value="">Sélectionne ton pays</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="BE">Belgique</option>
                <option value="CH">Suisse</option>
                <option value="OTHER">Autre</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: GREY }}>Téléphone</label>
              <input required type="tel" placeholder="+1 (555) 000-0000" value={smsForm.phone} onChange={(e) => setSmsForm({ ...smsForm, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors" style={{ borderColor: `${GREY}40`, backgroundColor: PAPER, color: INK }} />
            </div>
            
            <button
              type="submit"
              disabled={smsStatus === "sending"}
              className="w-full mt-4 flex items-center justify-center gap-4 px-8 py-5 text-[11px] font-medium transition-all hover:opacity-90 active:scale-95 uppercase tracking-[0.2em] shadow-md rounded-lg disabled:opacity-60"
              style={{ backgroundColor: ACCENT, color: PAPER }}
            >
              {smsStatus === "sending" ? "Envoi en cours…" : <>Je veux ces messages <span>→</span></>}
            </button>

            {smsStatus === "success" && (
              <p className="text-sm text-center font-medium" style={{ color: ACCENT }} role="status">
                C'est noté ! Ton premier SMS arrive bientôt. 👑
              </p>
            )}
            {smsStatus === "error" && (
              <p className="text-sm text-center font-medium text-red-700" role="alert">
                Oups, l'inscription n'a pas pu aboutir. Réessaie dans un instant.
              </p>
            )}

            <p className="text-[9px] md:text-[10px] font-light mt-4 text-center leading-relaxed" style={{ color: GREY }}>
              Un message par semaine. En t'inscrivant, tu acceptes de recevoir un SMS hebdomadaire des Boss Ladies. Tu te désinscris quand tu veux en répondant STOP.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default function App() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'sms'>('home');

  useEffect(() => {
    const handleOpenSms = () => {
      setView('sms');
    };
    window.addEventListener('open-sms', handleOpenSms);
    return () => window.removeEventListener('open-sms', handleOpenSms);
  }, []);

  return (
    <div className="min-h-full font-light overflow-x-hidden" style={{ backgroundColor: PAPER, color: INK }}>
      <Nav />
      <Hero />
      <Marquee />
      <Recognize />
      <WhereToStart onSelectOffer={setSelectedOffer} />
      <SessionIndividuelle />
      {/* Session individuelle added */}
      <Programmes onSelectOffer={setSelectedOffer} />
      <SmsCtaMidPage />
      <Services onSelectOffer={setSelectedOffer} />
      <DiscoveryCall />
      <Temoignages />
      <About />
      <CTA onSelectOffer={setSelectedOffer} />
      <Footer />
      {selectedOffer === 'hayil' ? (
        <HayilPage onClose={() => setSelectedOffer(null)} />
      ) : selectedOffer === 'business' ? (
        <BusinessPage onClose={() => setSelectedOffer(null)} />
      ) : selectedOffer === 'starter' ? (
        <StarterPackPage onClose={() => setSelectedOffer(null)} />
      ) : selectedOffer === 'sales_page' ? (
        <SalesPageOffer onClose={() => setSelectedOffer(null)} />
      ) : selectedOffer === 'full_pack' ? (
        <FullPackOffer onClose={() => setSelectedOffer(null)} />
      ) : selectedOffer ? (
        <OfferLandingPage offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
      ) : null}
      {view === 'sms' && (
        <SmsFunnel onBack={() => setView('home')} />
      )}
    </div>
  );
}
