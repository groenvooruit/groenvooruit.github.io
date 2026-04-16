import { CTABanner } from "../components/CTABanner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>Contact</h1>
          <p className="text-lg text-muted-foreground">Heeft u een vraag of wilt u meer informatie? Neem gerust contact met ons op.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl text-[#0f2a1a] mb-6" style={{ fontWeight: 600 }}>Neem contact op</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: "Telefoon", value: "071 - 123 4567" },
                  { icon: Mail, label: "E-mail", value: "info@groenvooruit.nl" },
                  { icon: MapPin, label: "Adres", value: "Linnaeuspark 16, 2163 KK Lisse" },
                  { icon: Clock, label: "Openingstijden", value: "Ma–Vr: 08:30–17:30" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[0.875rem] text-muted-foreground">{item.label}</p>
                      <p style={{ fontWeight: 500 }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Map placeholder */}
              <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                <MapPin className="w-8 h-8 mr-2" /> Kaart: Linnaeuspark 16, Lisse
              </div>
            </div>

            <div>
              <h2 className="text-xl text-[#0f2a1a] mb-6" style={{ fontWeight: 600 }}>Stuur een bericht</h2>
              {sent ? (
                <div className="p-8 rounded-xl bg-secondary text-center">
                  <p className="text-lg text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>Bedankt voor uw bericht!</p>
                  <p className="text-muted-foreground">We nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Naam *</label>
                    <input type="text" required className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">E-mailadres *</label>
                    <input type="email" required className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Onderwerp</label>
                    <input type="text" className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Bericht *</label>
                    <textarea required rows={5} className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                    Versturen
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
