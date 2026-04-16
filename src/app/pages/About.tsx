import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { Shield, Heart, Eye, Users, Award, Leaf } from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzYzNDQxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
                GroenVooruit is opgericht met een missie: huiseigenaren helpen om slimmer en duurzamer met energie om te gaan. Geen ingewikkelde verhalen, maar eerlijk advies en bewezen oplossingen.
              </p>
              <p className="text-lg text-muted-foreground">
                Vanuit ons kantoor aan het Linnaeuspark in Lisse bedienen we klanten door heel Nederland. Ons team van energiespecialisten en gecertificeerde installateurs staat voor u klaar.
              </p>
            </div>
            <ImageWithFallback src={TEAM_IMG} alt="Het GroenVooruit team" className="rounded-2xl w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-center text-[#0f2a1a] mb-12" style={{ fontWeight: 600 }}>Onze kernwaarden</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Transparantie", desc: "Eerlijke prijzen, duidelijke offertes en geen verborgen kosten. U weet altijd waar u aan toe bent." },
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

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1.500+", label: "Installaties" },
              { num: "4.9/5", label: "Klanttevredenheid" },
              { num: "10 jaar", label: "Garantie" },
              { num: "100%", label: "Gecertificeerd" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl text-primary mb-1" style={{ fontWeight: 700 }}>{s.num}</p>
                <p className="text-muted-foreground text-[0.925rem]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
