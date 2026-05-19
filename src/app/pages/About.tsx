import { CTABanner } from "../components/CTABanner";
import { Shield, Heart, Eye, Users, Award, Leaf } from "lucide-react";

export function About() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700 }}>
                Over GroenVooruit
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                GroenVooruit is ontstaan uit frustratie. We zagen hoe de markt voor zonnepanelen en thuisbatterijen werd overspoeld door cowboybedrijven — partijen die snel willen cashen met hoge prijzen, slechte installaties en misleidende beloftes. Klanten die dachten een goede deal te sluiten, kwamen er te laat achter dat ze te veel betaalden voor te weinig kwaliteit.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Dat moest anders. Wij hebben GroenVooruit opgericht omdat wij geloven dat het wél eerlijk kan. Geen verkooppraatjes, geen druk om snel te tekenen, geen verborgen kosten. Wij willen de klant écht helpen: met een eerlijk advies dat past bij uw situatie, en een eerlijke prijs waar u niet achteraf van schrikt.
              </p>
              <p className="text-lg text-muted-foreground"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-12" style={{ fontWeight: 600 }}>Onze kernwaarden</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Transparantie", desc: "Eerlijke prijzen, duidelijke voorstellen en geen verborgen kosten. U weet altijd waar u aan toe bent." },
              { icon: Heart, title: "Persoonlijke aandacht", desc: "Elk huis is anders. Wij nemen de tijd om uw situatie goed te begrijpen." },
              { icon: Eye, title: "Kwaliteit", desc: "Alleen A-merk producten en gecertificeerde installateurs. Kwaliteit waar u op kunt bouwen." },
              { icon: Leaf, title: "Duurzaamheid", desc: "We geloven in een groene toekomst en helpen u daar concreet aan bij te dragen." },
              { icon: Users, title: "Klantgericht", desc: "Van eerste contact tot nazorg: u staat centraal in alles wat we doen." },
              { icon: Award, title: "Vakmanschap", desc: "Gecertificeerde installateurs met jarenlange ervaring in zonne-energie en batterijsystemen." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-[#0f2a1a] mb-1" style={{ fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-muted-foreground text-[0.925rem]">{item.desc}</p>
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