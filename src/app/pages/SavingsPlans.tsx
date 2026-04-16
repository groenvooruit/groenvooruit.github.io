import { CTABanner } from "../components/CTABanner";
import { PiggyBank, CheckCircle, BarChart3, Users, FileText, Lightbulb } from "lucide-react";

export function SavingsPlans() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
            <PiggyBank className="w-4 h-4" /> Bespaarplannen op maat
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700 }}>
            Uw persoonlijke energiebesparingsplan
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Geen standaardoplossing, maar een plan dat precies past bij uw woning, verbruik en budget. Onze specialisten analyseren uw situatie en adviseren de beste combinatie.
          </p>
          <CTABanner variant="compact" />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-12" style={{ fontWeight: 600 }}>Wat zit er in uw bespaarplan?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Verbruiksanalyse", desc: "We analyseren uw huidige energieverbruik en patronen" },
              { icon: Lightbulb, title: "Dakanalyse", desc: "Oriëntatie, hellingshoek en beschaduwing van uw dak" },
              { icon: FileText, title: "Systeemadvies", desc: "De ideale combinatie van panelen en/of batterij" },
              { icon: PiggyBank, title: "Besparingsberekening", desc: "Concreet inzicht in uw verwachte besparing per jaar" },
              { icon: Users, title: "Persoonlijk gesprek", desc: "Toelichting door een energiespecialist bij u thuis of online" },
              { icon: CheckCircle, title: "Transparante offerte", desc: "Alle kosten helder op een rij, zonder verrassingen" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-muted-foreground text-[0.925rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
