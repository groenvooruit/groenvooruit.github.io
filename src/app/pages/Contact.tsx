import { CTABanner } from "../components/CTABanner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(e.currentTarget);
    data.append("access_key", "b60637fc-b995-48b2-b6e3-edac16bbf8b3");
    data.append("from_name", "GroenVooruit website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await response.json();
      if (json.success) {
        setSent(true);
      } else {
        setError("Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons.");
      }
    } catch {
      setError("Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons.");
    } finally {
      setSubmitting(false);
    }
  };

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
                  { icon: Phone, label: "Telefoon", value: "+31 6 83 37 76 45" },
                  { icon: Mail, label: "E-mail", value: "info@groenvooruit.nl" },
                  { icon: Clock, label: "Openingstijden", value: "Ma–Za: 08:30–21:30" },
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
            </div>

            <div>
              <h2 className="text-xl text-[#0f2a1a] mb-6" style={{ fontWeight: 600 }}>Stuur een bericht</h2>
              {sent ? (
                <div className="p-8 rounded-xl bg-secondary text-center">
                  <p className="text-lg text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>Bedankt voor uw bericht!</p>
                  <p className="text-muted-foreground">We nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <input type="hidden" name="subject" value="Nieuw contactbericht – GroenVooruit" />
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Naam *</label>
                    <input type="text" name="naam" required className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">E-mailadres *</label>
                    <input type="email" name="email" required className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Onderwerp</label>
                    <input type="text" name="onderwerp" className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[0.925rem]">Bericht *</label>
                    <textarea name="bericht" required rows={5} className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem] resize-none" />
                  </div>
                  <button type="submit" disabled={submitting} className="w-full py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? "Bezig met verzenden..." : "Versturen"}
                  </button>
                  {error && <p className="text-[0.875rem] text-red-600">{error}</p>}
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