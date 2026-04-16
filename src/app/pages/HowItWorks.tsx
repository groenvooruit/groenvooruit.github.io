import { CTABanner } from "../components/CTABanner";
import { Phone, BarChart3, FileText, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: Phone, num: "1", title: "Kennismakingsgesprek",
    desc: "We beginnen met een vrijblijvend gesprek. U vertelt over uw woning, verbruik en wensen. Dit kan telefonisch, online of bij u thuis.",
    details: ["Geen kosten of verplichtingen", "Eerste inschatting van mogelijkheden", "Beantwoording van al uw vragen"]
  },
  {
    icon: BarChart3, num: "2", title: "Analyse & inventarisatie",
    desc: "Onze specialist analyseert uw situatie: dakoriëntatie, verbruikspatroon, aansluitcapaciteit en uw budget.",
    details: ["Dakinspectie (fysiek of via satelliet)", "Verbruiksanalyse op basis van uw gegevens", "Technische haalbaarheid beoordeling"]
  },
  {
    icon: FileText, num: "3", title: "Persoonlijk energieplan",
    desc: "Op basis van de analyse ontvangt u een persoonlijk energiebesparingsplan met concrete adviezen en verwachte besparingen.",
    details: ["Advies over panelen, batterij of combinatie", "Indicatieve besparingsberekening", "Overzicht van subsidie mogelijkheden"]
  },
  {
    icon: ClipboardCheck, num: "4", title: "Transparante offerte",
    desc: "U ontvangt een gedetailleerde offerte waarin alle kosten helder zijn opgenomen. Geen kleine lettertjes.",
    details: ["Vaste prijs, geen verrassingen achteraf", "Specificatie van alle materialen", "Planningsvoorstel voor installatie"]
  },
  {
    icon: Wrench, num: "5", title: "Vakkundige installatie",
    desc: "Onze gecertificeerde monteurs installeren het systeem. Wij regelen alles, inclusief de aanmelding bij uw netbeheerder.",
    details: ["Installatie meestal in 1 dag", "Oplevering met uitleg en monitoring", "Alles netjes achtergelaten"]
  },
];

export function HowItWorks() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-6" style={{ fontWeight: 700 }}>
            Onze werkwijze
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van eerste contact tot werkend systeem: transparant, persoonlijk en professioneel. In vijf stappen naar een duurzaam en zuinig huis.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xl" style={{ fontWeight: 700 }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-[#0f2a1a]" style={{ fontWeight: 600 }}>{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-[0.925rem]">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
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
