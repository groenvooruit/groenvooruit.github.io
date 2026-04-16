import { useParams, Link } from "react-router";
import { CTABanner } from "../components/CTABanner";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";

const ARTICLES: Record<string, { title: string; cat: string; readTime: string; date: string; content: string[] }> = {
  "zonnepanelen-investering": {
    title: "Zijn zonnepanelen nog een goede investering in 2026?",
    cat: "Zonnepanelen", readTime: "5 min", date: "10 april 2026",
    content: [
      "De energiemarkt is de afgelopen jaren flink veranderd. Energieprijzen schommelen, de salderingsregeling wordt aangepast en de panelen zelf worden steeds efficiënter en betaalbaarder. Maar is het in 2026 nog steeds verstandig om zonnepanelen te laten installeren?",
      "Het korte antwoord: ja, absoluut. De terugverdientijd van zonnepanelen ligt momenteel tussen de 5 en 7 jaar, afhankelijk van uw dakoriëntatie, verbruik en het type panelen. Met een levensduur van 25+ jaar betekent dit dat u na de terugverdientijd nog minstens 18 jaar profiteert van gratis stroom.",
      "De afbouw van de salderingsregeling betekent wel dat het nóg belangrijker wordt om zoveel mogelijk van uw eigen stroom direct te gebruiken. Hier komt een thuisbatterij in beeld: door overtollige zonne-energie op te slaan, kunt u uw eigen verbruik verhogen van circa 35% naar 70% of meer.",
      "Daarnaast stijgt de waarde van uw woning met gemiddeld 3-4% door de installatie van zonnepanelen. Een investering die zich dus op meerdere manieren terugbetaalt.",
      "Bij GroenVooruit helpen we u de juiste afweging te maken. Tijdens een gratis adviesgesprek berekenen we uw exacte situatie en adviseren we de meest rendabele oplossing."
    ]
  },
  "thuisbatterij-uitleg": {
    title: "Thuisbatterij: wat is het en heb ik er een nodig?",
    cat: "Thuisbatterij", readTime: "7 min", date: "5 april 2026",
    content: [
      "Een thuisbatterij is een energieopslagsysteem dat u in huis plaatst om zelf opgewekte stroom op te slaan. In plaats van overtollige zonne-energie terug te leveren aan het net, slaat u het op voor later gebruik.",
      "De voordelen zijn duidelijk: meer eigen verbruik van uw zonne-energie, lagere energiekosten, noodstroom bij stroomuitval, en de mogelijkheid om te profiteren van dynamische energietarieven.",
      "Onze modulaire systemen variëren van 5 tot 40 kWh. Een gemiddeld huishouden heeft genoeg aan 10 kWh om het avond- en nachtverbruik af te dekken. Het mooie van modulaire systemen is dat u kunt beginnen met een kleinere capaciteit en later eenvoudig kunt uitbreiden.",
      "De kosten van een thuisbatterij variëren van €3.500 voor een compact 5 kWh systeem tot €16.500 voor een volledig 40 kWh systeem. De terugverdientijd hangt af van uw verbruikspatroon en de energieprijzen.",
      "Benieuwd of een thuisbatterij bij uw situatie past? Plan een gratis adviesgesprek en we berekenen het voor u uit."
    ]
  },
};

export function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? ARTICLES[slug] : null;

  if (!article) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Artikel niet gevonden</h1>
        <Link to="/kennisbank" className="text-primary">Terug naar kennisbank</Link>
      </div>
    );
  }

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/kennisbank" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-[0.925rem] mb-8">
            <ArrowLeft className="w-4 h-4" /> Terug naar kennisbank
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.8rem] text-primary bg-primary/10 px-2 py-0.5 rounded">{article.cat}</span>
            <span className="flex items-center gap-1 text-[0.8rem] text-muted-foreground"><Clock className="w-3 h-3" /> {article.readTime}</span>
            <span className="flex items-center gap-1 text-[0.8rem] text-muted-foreground"><CalendarDays className="w-3 h-3" /> {article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-8" style={{ fontWeight: 700 }}>{article.title}</h1>
          <div className="space-y-5 text-muted-foreground text-[1.05rem]" style={{ lineHeight: 1.75 }}>
            {article.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-12 p-8 rounded-xl bg-secondary border border-border text-center">
            <h3 className="text-xl text-[#0f2a1a] mb-3" style={{ fontWeight: 600 }}>Wilt u weten wat dit voor uw situatie betekent?</h3>
            <p className="text-muted-foreground mb-6">Plan een gratis adviesgesprek en we berekenen uw persoonlijke besparing.</p>
            <CTABanner variant="compact" />
          </div>
        </article>
      </section>
    </div>
  );
}
