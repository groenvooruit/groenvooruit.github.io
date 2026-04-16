import { Link } from "react-router";
import { CalendarCheck, FileText, ArrowRight } from "lucide-react";

export function CTABanner({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/adviesgesprek" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
          <CalendarCheck className="w-4 h-4" /> Plan gratis adviesgesprek
        </Link>
        <Link to="/offerte" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-secondary transition-colors">
          <FileText className="w-4 h-4" /> Vraag offerte aan
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#0f2a1a] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl text-white mb-4">Klaar om te besparen op uw energiekosten?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Ontvang vrijblijvend persoonlijk advies van onze energiespecialisten. We helpen u de beste oplossing te vinden voor uw situatie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/adviesgesprek" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-lg">
            <CalendarCheck className="w-5 h-5" /> Gratis adviesgesprek plannen <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/offerte" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors text-lg">
            <FileText className="w-5 h-5" /> Direct offerte aanvragen
          </Link>
        </div>
        <p className="text-white/50 text-[0.875rem] mt-6">100% vrijblijvend &middot; Reactie binnen 24 uur &middot; Geen verplichtingen</p>
      </div>
    </section>
  );
}
