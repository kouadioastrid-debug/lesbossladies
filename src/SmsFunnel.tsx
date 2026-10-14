import { useState } from "react";
import logoImg from "./imports/35e3e64f-97d8-498f-945b-1a4c9cde120d.jpeg";
import heroImg from "./imports/178B9FE2-EFDE-42DD-B2FC-94EB16FA4E48.png";

const ACCENT = "#8C5B4A";
const INK = "#171717";
const PAPER = "#FAF8F5";
const LAVENDER = "#EBE4EB";
const GREY = "#8F8A8A";

export default function SmsFunnel({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<"form" | "quiz" | "success">("form");
  const [formData, setFormData] = useState({ name: "", phone: "", country: "" });
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

console.log("SmsFunnel chargé, version webhook");


 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("handleSubmit appelé");

    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/ilt8l2gb9oixk99rhduxlfbvxsqeno9u";

    console.log("Données envoyées à Make :", {
      first_name: formData.name,
      phone: formData.phone,
      country: formData.country,
      has_consent: true,
    });

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.name,
          phone: formData.phone,
          country: formData.country,
          has_consent: true,
        }),
      });

      if (response.ok) {
        console.log("Données transmises avec succès à Make !");
      } else {
        console.error("Erreur lors de l'envoi à Make :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }

    setStep("quiz");
  };

  const handleQuiz = (answer: string) => {
    setQuizAnswer(answer);
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  if (step === "success") {
    return (
      <div className="fixed inset-0 z-[110] overflow-y-auto flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700" style={{ backgroundColor: GREY, color: INK }}>
        <button onClick={onBack} className="absolute top-6 right-6 text-black bg-white/80 p-4 rounded-full hover:bg-black hover:text-white transition-all backdrop-blur-md shadow-lg z-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <p className="text-[10px] uppercase tracking-[0.4em] font-medium mb-6" style={{ color: ACCENT }}>
          Bienvenue chez Les Boss Ladies 👑
        </p>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          Ton numéro est bien enregistré.
        </h1>
        <p className="text-lg font-light leading-relaxed max-w-xl mx-auto mb-12 opacity-80">
          À partir de maintenant, ton téléphone devient aussi un espace de croissance.<br/><br/>
          <em className="italic" style={{ color: ACCENT }}>Ton prochain déclic pourrait arriver cette semaine.</em>
        </p>
        <button onClick={onBack} className="px-10 py-5 text-[11px] tracking-[0.2em] uppercase transition-all hover:brightness-110 active:scale-95 text-white shadow-xl shadow-purple-500/30" style={{ backgroundColor: ACCENT }}>
          Découvrir les programmes
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] overflow-y-auto flex flex-col animate-in fade-in duration-500" style={{ backgroundColor: PAPER, color: INK }}>
      
      <button onClick={onBack} className="fixed top-6 right-6 text-black bg-white/80 p-4 rounded-full hover:bg-black hover:text-white transition-all backdrop-blur-md shadow-lg z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full mt-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8" style={{ color: ACCENT }}>
            Le SMS des Boss Ladies
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Et si ton prochain déclic arrivait directement sur ton téléphone ?
          </h1>
          <p className="text-lg font-light leading-relaxed mb-12 opacity-80 max-w-lg">
            Chaque semaine, un SMS pour reprendre le contrôle de ton mindset, dépasser tes blocages et avancer avec l'énergie d'une véritable Boss Lady.
          </p>
          
          {step === "form" && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md bg-white p-8 border border-black/5 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 text-2xl">✨</div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Prénom</label>
                <input required type="text" className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Numéro de téléphone</label>
                <input required type="tel" className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" placeholder="+33 6 00 00 00 00" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Pays</label>
                <input required type="text" className="border-b border-black/20 pb-2 outline-none focus:border-black transition-colors bg-transparent" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} />
              </div>
              
              <button type="submit" className="w-full py-5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all hover:brightness-110 active:scale-95 text-white shadow-xl shadow-black/10" style={{ backgroundColor: ACCENT }}>
                Je veux ces messages EST<span>→</span>
              </button>
              
              <p className="text-[10px] text-center opacity-60 mt-2 font-light">
                Un message par semaine. Tu te désinscris quand tu veux — mais la plupart restent.
              </p>
            </form>
          )}

          {step === "quiz" && (
            <div className="max-w-md bg-white p-8 border border-black/5 shadow-2xl animate-in slide-in-from-right-8 duration-500">
              <h3 className="text-xl font-medium mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
                Quelle Boss Lady veux-tu devenir ?
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "🔥", label: "Celle qui ose" },
                  { icon: "👑", label: "Celle qui dirige" },
                  { icon: "🚀", label: "Celle qui construit" },
                  { icon: "✨", label: "Celle qui influence" }
                ].map((choice, i) => (
                  <button 
                    key={i}
                    onClick={() => handleQuiz(choice.label)}
                    className={`p-4 border text-left flex items-center gap-4 transition-all duration-300 ${quizAnswer === choice.label ? 'border-purple-400 bg-purple-50' : 'border-black/10 hover:border-black/30 hover:bg-black/5'}`}
                  >
                    <span className="text-xl">{choice.icon}</span>
                    <span className="font-medium tracking-wide">{choice.label}</span>
                  </button>
                ))}
              </div>
              {quizAnswer && (
                <p className="text-center mt-8 text-sm italic animate-in fade-in" style={{ color: ACCENT }}>
                  Alors prépare-toi. Ton premier SMS arrive bientôt.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="relative w-full pt-6 pr-4 md:pr-8">
          {/* Arche de fond (Noire) */}
          <div className="absolute top-0 right-0 w-[90%] max-w-md mx-auto aspect-[4/5.5] bg-[#0D0C0F] rounded-t-full rounded-b-3xl transform -translate-x-4 md:-translate-x-8 translate-y-4"></div>
          
          {/* Arche principale (Photo) */}
          <div className="aspect-[4/5.5] w-[90%] max-w-md mx-auto relative bg-[#F4EFF6] rounded-t-full rounded-b-3xl border-4 border-[#F4EFF6] z-10 overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Phone illustration" className="w-full h-full object-cover object-[50%_25%] saturate-[0.85] contrast-[1.1] brightness-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-6 border border-black/5 shadow-2xl z-20">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50 mb-2">Aperçu</p>
            <p className="text-sm font-light italic" style={{ fontFamily: "var(--font-display)" }}>
              "Tu n’as pas besoin d’être prête pour commencer. Tu as besoin de décider que ta vision mérite d’être construite..."
            </p>
          </div>
        </div>
      </section>

      {/* 4 Cartes */}
      <section className="px-6 md:px-12 py-24 border-y border-black/5" style={{ backgroundColor: GREY }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium mb-6" style={{ color: ACCENT }}>Ce que tu vas recevoir</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Parce qu’une Boss Lady ne se contente pas de rêver. Elle décide, elle construit, elle avance.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "DÉCLIC", desc: "Une pensée qui remet les choses en perspective." },
              { num: "02", title: "MINDSET", desc: "Un message pour renforcer ta posture et ta confiance." },
              { num: "03", title: "ACTION", desc: "Un petit défi concret à appliquer dans ta semaine." },
              { num: "04", title: "VISION", desc: "Une question qui t’oblige à penser plus grand." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-black/5 hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <p className="text-[10px] font-medium opacity-40 mb-8">{item.num}</p>
                <h3 className="text-lg font-medium tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{item.title}</h3>
                <p className="font-light opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu complet */}
      <section className="px-6 md:px-12 py-32 bg-white flex flex-col items-center">
        <div className="max-w-md w-full bg-[#f4f4f4] rounded-[3rem] p-4 shadow-2xl border-4 border-[#e5e5e5] relative">
          <div className="w-32 h-6 bg-[#e5e5e5] rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
          <div className="bg-white w-full h-full rounded-[2.5rem] overflow-hidden pt-12 pb-6 px-6 shadow-inner flex flex-col gap-4">
            <div className="text-center border-b border-black/5 pb-4 mb-4">
              <div className="w-12 h-12 bg-black/5 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">👑</div>
              <p className="text-xs font-medium tracking-widest uppercase">Les Boss Ladies</p>
            </div>
            
            <div className="bg-[#f0f0f0] text-black p-4 rounded-2xl rounded-tl-sm text-sm font-light leading-relaxed">
              <p className="mb-4">LES BOSS LADIES ✨</p>
              <p className="mb-4">Tu n’as pas besoin d’être prête pour commencer. Tu as besoin de décider que ta vision mérite d’être construite.</p>
              <p className="mb-4">Cette semaine, arrête de demander :<br/>"Est-ce que je suis capable ?"</p>
              <p className="mb-4">Demande plutôt :<br/>"Quelle est la prochaine action que la femme que je veux devenir ferait aujourd’hui ?"</p>
              <p>À toi de jouer, Boss Lady. 👑</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-lg">
          <p className="text-2xl font-light italic mb-8" style={{ fontFamily: "var(--font-display)", color: ACCENT }}>
            Imagine recevoir ce genre de déclic chaque semaine.
          </p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-10 py-5 text-[11px] tracking-[0.2em] uppercase transition-all hover:brightness-110 active:scale-95 text-white shadow-xl shadow-purple-500/30" style={{ backgroundColor: ACCENT }}>
            Oui, je veux mon SMS
          </button>
        </div>
      </section>

      {/* Identification */}
      <section className="px-6 md:px-12 py-24 border-t border-black/5" style={{ backgroundColor: INK, color: PAPER }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16" style={{ fontFamily: "var(--font-display)" }}>
            Ce SMS est pour toi si…
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto">
            {[
              "Tu as une vision mais tu procrastines parfois.",
              "Tu veux développer une vraie posture de leader.",
              "Tu veux arrêter de te limiter.",
              "Tu construis un business et tu veux rester constante.",
              "Tu veux être entourée de femmes qui pensent grand.",
              "Tu veux travailler autant sur ta personne que sur ton business."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <span style={{ color: ACCENT }}>✓</span>
                <span className="font-light">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
