import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import {
  Sun, Battery, PiggyBank, Shield, Award, Users, ArrowRight,
  CalendarCheck, FileText, CheckCircle, Zap, TrendingDown, Leaf,
  Phone, Star, Clock
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzYzNDQxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CONSULT_IMG = "https://images.unsplash.com/flagged/photo-1574359980899-5cf19389d281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc2MzQ0MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Home() {
  return (
    <div className="pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-6">
                <Leaf className="w-4 h-4" /> Duurzaam &middot; Persoonlijk &middot; Betrouwbaar
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700, lineHeight: 1.15 }}>
                Bespaar op energie.<br />
                <span className="text-primary">Investeer in uw toekomst.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                GroenVooruit helpt huiseigenaren met persoonlijk advies over zonnepanelen en thuisbatterijen. Van vrijblijvend gesprek tot vakkundige installatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link to="/adviesgesprek" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                  <CalendarCheck className="w-5 h-5" /> Plan gratis adviesgesprek <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/offerte" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border hover:bg-muted transition-colors">
                  <FileText className="w-5 h-5" /> Vraag offerte aan
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> 100% vrijblijvend</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Erkend installateur</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> 10 jaar garantie</span>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback src={HERO_IMG} alt="Zonnepanelen op een woning" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[0.8rem] text-muted-foreground">Gemiddelde besparing</p>
                    <p className="text-lg text-[#0f2a1a]" style={{ fontWeight: 600 }}>&euro;1.200/jaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, label: "4.9/5 klanttevredenheid", sub: "250+ reviews" },
              { icon: Award, label: "Erkend installateur", sub: "Gecertificeerd" },
              { icon: Users, label: "1.500+ installaties", sub: "In heel Nederland" },
              { icon: Clock, label: "Reactie binnen 24 uur", sub: "Persoonlijk contact" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-primary" />
                <p className="text-[0.875rem]" style={{ fontWeight: 500 }}>{item.label}</p>
                <p className="text-[0.8rem] text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>
              Waarom kiezen voor GroenVooruit?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Wij geloven in eerlijk advies, transparante prijzen en kwaliteit die u jarenlang besparing oplevert.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Persoonlijk advies", desc: "Geen verkooppraatjes, maar eerlijk en deskundig advies afgestemd op uw woning en situatie." },
              { icon: PiggyBank, title: "Maximale besparing", desc: "We berekenen uw besparingspotentieel en adviseren de meest rendabele oplossing." },
              { icon: Sun, title: "Kwaliteitsproducten", desc: "Alleen A-merk zonnepanelen en bewezen batterijsystemen met uitgebreide garantie." },
              { icon: Zap, title: "Energieonafhankelijk", desc: "Met een thuisbatterij slaat u zonne-energie op en bent u minder afhankelijk van het net." },
              { icon: Award, title: "Gecertificeerd vakwerk", desc: "Onze installateurs zijn volledig gecertificeerd. Installatie volgens de hoogste normen." },
              { icon: Phone, title: "Altijd bereikbaar", desc: "Voor en na de installatie staan wij voor u klaar. Persoonlijk contact, geen callcenter." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all bg-white group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-muted-foreground text-[0.925rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions overview */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Onze oplossingen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Van zonnepanelen tot modulaire thuisbatterijen: wij bieden complete energieoplossingen voor uw woning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun, title: "Zonnepanelen", desc: "Hoogrendement panelen die uw dak omtoveren tot een energiecentrale. Terugverdientijd vanaf 5 jaar.",
                link: "/oplossingen/zonnepanelen", cta: "Meer over zonnepanelen"
              },
              {
                icon: Battery, title: "Thuisbatterij", desc: "Modulaire systemen van 5 tot 40 kWh. Sla uw zonne-energie op en gebruik het wanneer u het nodig heeft.",
                link: "/oplossingen/thuisbatterij", cta: "Meer over thuisbatterijen"
              },
              {
                icon: PiggyBank, title: "Bespaarplan op maat", desc: "Persoonlijk energiebesparingsplan met advies over de beste combinatie van systemen voor uw situatie.",
                link: "/oplossingen/bespaarplannen", cta: "Meer over bespaarplannen"
              },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="block p-8 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl text-[#0f2a1a] mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-muted-foreground text-[0.925rem] mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-[0.925rem] group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Hoe werkt het?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">In vijf stappen naar een duurzaam en zuinig huis.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Kennismaking", desc: "Gratis en vrijblijvend adviesgesprek" },
              { step: "2", title: "Analyse", desc: "We analyseren uw woning en verbruik" },
              { step: "3", title: "Persoonlijk plan", desc: "Op maat gemaakt energiebesparingsplan" },
              { step: "4", title: "Offerte", desc: "Transparante offerte zonder verrassingen" },
              { step: "5", title: "Installatie", desc: "Vakkundige installatie door gecertificeerde monteurs" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-lg" style={{ fontWeight: 600 }}>
                  {item.step}
                </div>
                <h3 className="text-[#0f2a1a] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-muted-foreground text-[0.875rem]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/werkwijze" className="inline-flex items-center gap-2 text-primary hover:underline" style={{ fontWeight: 500 }}>
              Bekijk onze volledige werkwijze <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Wat onze klanten zeggen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Familie De Vries", location: "Lisse", text: "Uitstekend advies en een vlekkeloze installatie. We besparen nu al meer dan verwacht!", rating: 5 },
              { name: "Peter & Annemarie", location: "Hillegom", text: "De thuisbatterij was precies wat we nodig hadden. Professioneel team, duidelijke uitleg.", rating: 5 },
              { name: "Sandra Bakker", location: "Noordwijk", text: "Eerlijk advies zonder druk. Ze hebben echt meegedacht over de beste oplossing voor ons huis.", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[0.925rem] text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="text-[0.875rem]" style={{ fontWeight: 500 }}>{review.name}</p>
                <p className="text-[0.8rem] text-muted-foreground">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation image + CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ImageWithFallback src={CONSULT_IMG} alt="Adviesgesprek bij klant thuis" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            <div>
              <h2 className="text-2xl sm:text-3xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>
                Persoonlijk advies, zonder verplichtingen
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tijdens een gratis adviesgesprek bespreken we uw situatie, wensen en mogelijkheden. We kijken naar uw dak, verbruik en budget om het beste plan te maken.
              </p>
              <ul className="space-y-3 mb-8">
                {["Gratis en geheel vrijblijvend", "Bij u thuis of online", "Persoonlijk energiebesparingsadvies", "Binnen 24 uur een reactie"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[0.925rem]">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <CTABanner variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
