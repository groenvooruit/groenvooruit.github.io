import { BatteryAnimation } from "../components/BatteryAnimation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { Battery, CheckCircle, Zap, Shield, TrendingUp, Layers } from "lucide-react";

import batteryImg from "../../imports/dPgne.jpg";

const TIERS = [
  { kwh: "5 kWh", label: "Compact", desc: "Ideaal voor klein verbruik of als aanvulling", price: "Op aanvraag", fit: "Appartement of klein huishouden" },
  { kwh: "10 kWh", label: "Standaard", desc: "Perfect voor een gemiddeld huishouden", price: "Op aanvraag", fit: "Gezinswoning, 2-4 personen", popular: true },
  { kwh: "20 kWh", label: "Groot", desc: "Voor huishoudens met hoger verbruik of EV", price: "Op aanvraag", fit: "Grote woning of elektrische auto" },
  { kwh: "40 kWh", label: "Maximum", desc: "Volledige energieonafhankelijkheid", price: "Op aanvraag", fit: "Maximale zelfvoorzienendheid" },
];

export function HomeBatteries() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
                <Battery className="w-4 h-4" /> Thuisbatterij
              </div>
              <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700 }}>
                Modulaire thuisbatterij van 5 tot 40 kWh
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sla uw zelf opgewekte energie op en gebruik het wanneer u het nodig heeft. Onze modulaire systemen groeien mee met uw energiebehoefte.
              </p>
              <CTABanner variant="compact" />
            </div>
            <ImageWithFallback src={batteryImg} alt="Thuisbatterij systeem" className="rounded-2xl w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Modular visual */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Zo werkt een thuisbatterij</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Overdag laden uw zonnepanelen de batterij op. 's Avonds en 's nachts gebruikt u de opgeslagen energie in uw woning.
            </p>
          </div>
          <BatteryAnimation />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Modulair en schaalbaar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kies de capaciteit die bij u past. Later uitbreiden? Dat kan eenvoudig met extra modules.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier, i) => (
              <div key={i} className={`relative p-6 rounded-xl border-2 ${tier.popular ? "border-primary shadow-lg" : "border-border"} bg-white`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-[0.75rem] rounded-full" style={{ fontWeight: 500 }}>
                    Meest gekozen
                  </div>
                )}
                {/* Battery visual */}
                <div className="flex justify-center mb-4 gap-1">
                  {Array.from({ length: Math.round(parseInt(tier.kwh) / 5) }).map((_, j) => (
                    <div key={j} className="w-5 h-10 rounded bg-primary/20 border border-primary/30 flex items-end">
                      <div className="w-full bg-primary rounded-b" style={{ height: `${60 + Math.random() * 30}%` }} />
                    </div>
                  ))}
                </div>
                <h3 className="text-center text-xl text-[#0f2a1a] mb-1" style={{ fontWeight: 700 }}>{tier.kwh}</h3>
                <p className="text-center text-primary text-[0.875rem] mb-3" style={{ fontWeight: 500 }}>{tier.label}</p>
                <p className="text-center text-muted-foreground text-[0.875rem] mb-4">{tier.desc}</p>
                <p className="text-center text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>{tier.price}</p>
                <p className="text-center text-muted-foreground text-[0.8rem]">{tier.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-[0.875rem] mt-6">
            * Vraag een vrijblijvend adviesgesprek aan voor een prijs op maat.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-8" style={{ fontWeight: 600 }}>Voordelen van een thuisbatterij</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Eigen stroom gebruiken", desc: "Gebruik uw zonne-energie 's avonds en 's nachts" },
              { icon: Shield, title: "Noodstroom", desc: "Bij stroomuitval heeft u altijd een backup" },
              { icon: TrendingUp, title: "Hogere rendementen", desc: "Profiteer van dynamische energietarieven" },
              { icon: Layers, title: "Modulair uitbreidbaar", desc: "Begin klein en breid later eenvoudig uit" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-white border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[#0f2a1a] mb-1" style={{ fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-muted-foreground text-[0.875rem]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}