import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { Sun, CheckCircle, ArrowRight, TrendingDown, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router";

import solarImg from "../../imports/bdeac4d2-126e-4fe0-8d51-300046e633cc.jpg-1.jpeg";

export function SolarPanels() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
                <Sun className="w-4 h-4" /> Zonnepanelen
              </div>
              <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700 }}>
                Hoogrendement zonnepanelen voor uw woning
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Wek uw eigen stroom op met A-merk zonnepanelen. Lagere energiekosten, hogere woningwaarde en een bijdrage aan een duurzamere wereld.
              </p>
              <CTABanner variant="compact" />
            </div>
            <div className="rounded-2xl overflow-hidden w-full aspect-[4/3]">
              <ImageWithFallback src={solarImg} alt="Zonnepanelen op dak" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-12" style={{ fontWeight: 600 }}>Voordelen van zonnepanelen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingDown, title: "Lagere energiekosten", desc: "Bespaar tot 70% op uw energierekening" },
              { icon: Zap, title: "Eigen stroom opwekken", desc: "Word minder afhankelijk van stijgende energieprijzen" },
              { icon: Shield, title: "25 jaar garantie", desc: "Langdurige productgarantie op alle panelen" },
              { icon: Clock, title: "Terugverdientijd 5-7 jaar", desc: "Daarna geniet u jarenlang van gratis stroom" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-muted-foreground text-[0.875rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-8" style={{ fontWeight: 600 }}>Wat u krijgt</h2>
          <div className="bg-white rounded-xl border border-border p-8">
            <ul className="space-y-4">
              {[
                "Gratis dakinspectie en advies op maat",
                "A-merk panelen",
                "Inclusief micro-omvormers of string-omvormer",
                "Professionele installatie door gecertificeerde monteurs",
                "Aanmelding bij uw netbeheerder geregeld",
                "Monitoring app om uw opbrengst te volgen",
                "25 jaar productgarantie",
                "Persoonlijke nazorg en onderhoudstips",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link to="/adviesgesprek" className="inline-flex items-center gap-2 text-primary" style={{ fontWeight: 500 }}>
              Plan een gratis adviesgesprek <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}