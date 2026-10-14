import { useState } from "react";
import businessBannerImg from "./imports/F626897D-A920-42CA-BFD8-FA3017C867C4.png";

const ACCENT = "var(--color-accent)";
const PAPER = "var(--color-paper)";
const INK = "var(--color-ink)";

export default function BusinessPage({ onClose }: { onClose: () => void }) {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/0hpzykvbjc89mi651wdrl3o9lfhsepeh";
    const OFFER = "Business Strategy";
    const payload = {
      first_name: form.name.trim(),
      email: form.contact.trim(),
      phone: "",
      offer: OFFER,
    };

    console.log("Données envoyées à Make :", payload);
    setStatus("sending");

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Données transmises avec succès à Make !");
        setWaitlistSubmitted(true);
        setStatus("idle");
      } else {
        console.error("Erreur lors de l'envoi à Make :", response.status, response.statusText);
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto flex flex-col animate-in fade-in duration-500" style={{ backgroundColor: PAPER }}>
      
      {/* Bouton de fermeture */}
      <button onClick={onClose} className="fixed top-6 right-6 text-black bg-white/80 p-4 rounded-full hover:bg-black hover:text-white transition-all backdrop-blur-md shadow-lg z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div className="w-full h-[40vh] md:h-[50vh] border-b border-black/10 shrink-0 flex items-center justify-center overflow-hidden bg-black/5">
        <img src={businessBannerImg} className="w-full h-auto max-h-[85vh] object-contain object-top saturate-[0.85] contrast-[1.1] brightness-[1.02]" style={{ maxHeight: 'inherit' }} alt="Banner Business Strategy" />
      </div>
      
      {/* Contenu sous l'image */}
      <div className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col items-center flex-1">
        
        <p className="text-[10px] uppercase tracking-[0.4em] font-medium mb-6 text-center" style={{ color: ACCENT }}>LISTE D'ATTENTE</p>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4 text-center" style={{ fontFamily: "var(--font-display)", color: INK }}>
          Business Strategy
        </h1>
        
        <p className="text-xl md:text-2xl font-light italic mb-16 text-center max-w-2xl" style={{ color: ACCENT, fontFamily: "var(--font-display)" }}>
          Trois mois d'accompagnement de suivi business en ligne
        </p>

        {/* LIGNE DE SEPARATION */}
        <hr className="w-full max-w-sm border-black/10 mb-16" />
        
        {/* BLOC ACCROCHE */}
        <p className="text-black/80 text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-2xl text-center">
          "Tu as le talent. Tu as la vision.<br className="hidden md:block"/>
          Il te manque la structure pour que ça devienne<br className="hidden md:block"/>
          un vrai business — rentable et aligné."
        </p>

        {/* LIGNE DE SEPARATION */}
        <hr className="w-full max-w-sm border-black/10 mb-16" />

        {/* TU REPARS AVEC */}
        <div className="w-full max-w-2xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium mb-8 text-center text-black/40">Tu repars avec :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 md:gap-x-12">
            {[
              "Une offre que tu expliques en une phrase",
              "Un positionnement qui attire tes clientes idéales",
              "Des prix que tu annonces avec assurance",
              "Un parcours de vente prêt pour tes premières clientes"
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: ACCENT }} className="mt-1 shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-sm md:text-base font-light text-black/80 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LIGNE DE SEPARATION */}
        <hr className="w-full max-w-sm border-black/10 mb-16" />

        {/* TEMOIGNAGE */}
        <div className="bg-white/50 border border-black/5 p-8 md:p-12 mb-16 w-full max-w-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 text-6xl opacity-5" style={{ color: INK, fontFamily: "var(--font-display)" }}>"</div>
          <p className="text-lg md:text-xl font-light italic mb-6 text-black/80 relative z-10 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
            "Grâce au programme, j'ai enfin lancé mon offre avec clarté. Mes premières clientes sont arrivées naturellement."
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-black/40">
            — Sarah, Entrepreneuse
          </p>
        </div>

        {/* LIGNE DE SEPARATION */}
        <hr className="w-full max-w-sm border-black/10 mb-16" />

        {/* BLOC LISTE D'ATTENTE */}
        <div className="flex flex-col items-center w-full max-w-sm">
          <p className="text-black/80 text-lg md:text-xl font-light leading-relaxed mb-6 text-center">
            Les inscriptions pour la prochaine session ouvriront bientôt.
          </p>
          <p className="text-sm italic font-light text-black/60 mb-10 text-center">
            Seulement 10 places pour cette formation de groupe.<br/>
            Les inscrits sur la liste sont prioritaires.
          </p>

          {waitlistSubmitted ? (
            <div className="flex flex-col w-full gap-6 animate-in fade-in">
              <div className="p-8 border border-black/5 bg-black/5 text-black text-center">
                <p className="text-lg mb-2">✨</p>
                <p className="font-medium tracking-widest uppercase text-xs mb-2">Inscription confirmée</p>
                <p className="font-light text-sm opacity-60">Tu recevras un email dès l'ouverture des places.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col w-full gap-4 text-left">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Prénom</label>
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Email</label>
                <input required type="email" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" />
              </div>
              <button type="submit" disabled={status === "sending"} className="w-full py-6 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:brightness-110 text-white shadow-xl shadow-purple-500/20 disabled:opacity-60" style={{ backgroundColor: ACCENT }}>
                {status === "sending" ? "Envoi en cours…" : <>Je sécurise ma place <span>→</span></>}
              </button>
              {status === "error" && (
                <p className="text-sm text-center font-medium text-red-700" role="alert">
                  Oups, l'inscription n'a pas pu aboutir. Réessaie dans un instant.
                </p>
              )}
            </form>
          )}

          <p className="text-[10px] md:text-xs opacity-50 font-light text-black text-center mt-6">
            Aucun engagement. Tu seras informée en avant-première à l'ouverture des inscriptions.
          </p>
        </div>

      </div>
    </div>
  );
}
