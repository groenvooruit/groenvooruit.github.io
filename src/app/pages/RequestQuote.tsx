import { useState } from "react";
import { useNavigate } from "react-router";
import { FileText, CheckCircle, Shield, Clock, Phone } from "lucide-react";

export function RequestQuote() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    interest: "", propertyType: "", panels: "", batteryKwh: "", usage: "", notes: "",
    name: "", email: "", phone: "", address: "", city: "", postalCode: ""
  });

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/bedankt?type=offerte");
  };

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
            <FileText className="w-4 h-4" /> Offerte aanvragen
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>
            Ontvang een vrijblijvende offerte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vul het formulier in en ontvang binnen 48 uur een offerte op maat. Geen verplichtingen, geen verrassingen.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.875rem] ${step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`} style={{ fontWeight: 600 }}>
                      {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                    </div>
                    <span className="text-[0.875rem] text-muted-foreground">{s === 1 ? "Projectgegevens" : "Uw gegevens"}</span>
                    {s < 2 && <div className="w-8 h-0.5 bg-muted" />}
                  </div>
                ))}
              </div>

              <form onSubmit={submit}>
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Waar heeft u interesse in?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Zonnepanelen", "Thuisbatterij", "Beide"].map(opt => (
                          <button key={opt} type="button" onClick={() => update("interest", opt)}
                            className={`px-4 py-3 rounded-lg border text-[0.925rem] transition-colors ${form.interest === opt ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Type woning</label>
                      <select value={form.propertyType} onChange={e => update("propertyType", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]">
                        <option value="">Selecteer...</option>
                        <option>Vrijstaand</option>
                        <option>Twee-onder-een-kap</option>
                        <option>Rijtjeswoning</option>
                        <option>Hoekwoning</option>
                        <option>Appartement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Geschat jaarverbruik (kWh, optioneel)</label>
                      <input type="text" value={form.usage} onChange={e => update("usage", e.target.value)}
                        placeholder="bijv. 3500" className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Opmerkingen of wensen</label>
                      <textarea value={form.notes} onChange={e => update("notes", e.target.value)} rows={3}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem] resize-none" />
                    </div>
                    <button type="button" onClick={() => setStep(2)}
                      className="w-full py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                      Volgende stap
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5 text-[0.925rem]">Naam *</label>
                        <input type="text" required value={form.name} onChange={e => update("name", e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-[0.925rem]">E-mailadres *</label>
                        <input type="email" required value={form.email} onChange={e => update("email", e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Telefoonnummer *</label>
                      <input type="tel" required value={form.phone} onChange={e => update("phone", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[0.925rem]">Adres</label>
                      <input type="text" value={form.address} onChange={e => update("address", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5 text-[0.925rem]">Postcode</label>
                        <input type="text" value={form.postalCode} onChange={e => update("postalCode", e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-[0.925rem]">Plaats</label>
                        <input type="text" value={form.city} onChange={e => update("city", e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
                        Terug
                      </button>
                      <button type="submit" className="flex-1 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                        Offerte aanvragen
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Trust sidebar */}
            <div className="space-y-4">
              {[
                { icon: Shield, title: "100% vrijblijvend", desc: "Geen verplichtingen na het aanvragen" },
                { icon: Clock, title: "Binnen 48 uur", desc: "U ontvangt snel een reactie" },
                { icon: Phone, title: "Persoonlijk contact", desc: "Vragen? Bel 071 - 123 4567" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-secondary border border-border">
                  <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.925rem]" style={{ fontWeight: 500 }}>{item.title}</p>
                    <p className="text-[0.8rem] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
