import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Clock } from "lucide-react";
import { CTABanner } from "../components/CTABanner";

const ARTICLES = [
  { slug: "zonnepanelen-investering", title: "Zijn zonnepanelen nog een goede investering in 2026?", excerpt: "Met veranderende regelgeving en dalende panelprijzen: loont het nog om zonnepanelen te laten installeren?", cat: "Zonnepanelen", readTime: "5 min", img: "https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzYzNDQxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { slug: "thuisbatterij-uitleg", title: "Thuisbatterij: wat is het en heb ik er een nodig?", excerpt: "Alles wat u moet weten over thuisbatterijen, van werking tot kosten en wanneer het de moeite waard is.", cat: "Thuisbatterij", readTime: "7 min", img: "https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYmF0dGVyeSUyMHN0b3JhZ2UlMjBzeXN0ZW18ZW58MXx8fHwxNzc2MzQ0MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { slug: "energie-besparen-tips", title: "10 praktische tips om energie te besparen in uw woning", excerpt: "Van isolatie tot slim energiebeheer: ontdek hoe u direct kunt besparen op uw energierekening.", cat: "Besparen", readTime: "4 min", img: "https://images.unsplash.com/photo-1607171779628-903a203e58e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVuZXJneSUyMHN1c3RhaW5hYmxlJTIwbmF0dXJlfGVufDF8fHx8MTc3NjM0NDEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { slug: "salderingsregeling-2026", title: "Salderingsregeling 2026: wat verandert er?", excerpt: "De salderingsregeling wordt afgebouwd. Wat betekent dit voor uw zonnepanelen en wat kunt u doen?", cat: "Regelgeving", readTime: "6 min", img: "https://images.unsplash.com/photo-1717920378737-ca5c90fac825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMGZhbWlseSUyMGhvbWUlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzYzNDQxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

export function Blog() {
  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>Kennisbank</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artikelen, tips en inzichten over zonnepanelen, thuisbatterijen en energie besparen.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {ARTICLES.map(a => (
              <Link key={a.slug} to={`/kennisbank/${a.slug}`} className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                <ImageWithFallback src={a.img} alt={a.title} className="w-full aspect-[16/9] object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.8rem] text-primary bg-primary/10 px-2 py-0.5 rounded">{a.cat}</span>
                    <span className="flex items-center gap-1 text-[0.8rem] text-muted-foreground"><Clock className="w-3 h-3" /> {a.readTime}</span>
                  </div>
                  <h3 className="text-[#0f2a1a] mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>{a.title}</h3>
                  <p className="text-muted-foreground text-[0.925rem] mb-3">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-[0.875rem] group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                    Lees meer <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
