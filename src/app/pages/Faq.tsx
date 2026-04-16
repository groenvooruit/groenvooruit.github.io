import { useState } from "react";
import { CTABanner } from "../components/CTABanner";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Hoeveel kosten zonnepanelen?", a: "De kosten hangen af van het aantal panelen en het type. Gemiddeld kost een installatie van 10 panelen tussen de €3.500 en €5.000 inclusief installatie. Tijdens een adviesgesprek berekenen we de exacte prijs voor uw situatie." },
  { q: "Wat is de terugverdientijd?", a: "De gemiddelde terugverdientijd ligt tussen de 5 en 7 jaar, afhankelijk van uw dakoriëntatie, verbruik en het aantal panelen. Met een thuisbatterij kunt u de besparing verder optimaliseren." },
  { q: "Heb ik een thuisbatterij nodig?", a: "Niet per se, maar het wordt steeds interessanter. Met de afbouw van de salderingsregeling is het slim om meer eigen stroom te gebruiken. Een batterij verhoogt uw eigenverbruik van ~35% naar ~70% of meer." },
  { q: "Hoe groot moet mijn thuisbatterij zijn?", a: "Dat hangt af van uw verbruik en het aantal zonnepanelen. Een gemiddeld huishouden (3.500 kWh/jaar) heeft genoeg aan 10 kWh. Ons modulaire systeem groeit mee: u kunt beginnen met 5 kWh en later uitbreiden tot 40 kWh." },
  { q: "Wat houdt het gratis adviesgesprek in?", a: "Een vrijblijvend gesprek van 30-45 minuten, bij u thuis, online of telefonisch. We bespreken uw woning, verbruik en wensen, en geven een eerste inschatting van de mogelijkheden en besparing." },
  { q: "Hoelang duurt de installatie?", a: "De installatie van zonnepanelen duurt meestal 1 dag. Een thuisbatterij erbij voegt maximaal een halve dag toe. We plannen alles in overleg met u." },
  { q: "Welke garantie krijg ik?", a: "U krijgt 25 jaar productgarantie op de zonnepanelen, 10 jaar op de omvormer en thuisbatterij, en 10 jaar garantie op onze installatie." },
  { q: "Regelen jullie de subsidie?", a: "Ja, we informeren u over beschikbare subsidies en helpen bij de aanvraag waar mogelijk. Op dit moment zijn er diverse lokale en landelijke regelingen beschikbaar." },
  { q: "Kan ik ook alleen een offerte aanvragen zonder adviesgesprek?", a: "Zeker! U kunt direct een offerte aanvragen via ons formulier. Op basis van uw gegevens stellen we een indicatieve offerte op. Voor een nauwkeuriger advies raden we wel een (gratis) gesprek aan." },
  { q: "In welke regio zijn jullie actief?", a: "We zijn gevestigd in Lisse en actief door heel Nederland. Ons team van installateurs is regionaal verspreid voor snelle service." },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>Veelgestelde vragen</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over zonnepanelen, thuisbatterijen en onze dienstverlening.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-[#0f2a1a] pr-4" style={{ fontWeight: 500 }}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-[0.925rem]" style={{ lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
