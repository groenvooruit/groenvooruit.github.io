import { Link, useSearchParams } from "react-router";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

export function ThankYou() {
  const [params] = useSearchParams();
  const type = params.get("type");
  const isConsult = type === "adviesgesprek";

  return (
    <div className="py-24 lg:py-32 pb-32 lg:pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>
          {isConsult ? "Uw adviesgesprek is ingepland!" : "Bedankt voor uw aanvraag!"}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {isConsult
            ? "We hebben uw afspraak ontvangen en sturen een bevestiging naar uw e-mailadres. Onze specialist neemt voor het gesprek nog even contact met u op."
            : "We hebben uw offerteaanvraag ontvangen. Binnen 48 uur ontvangt u een reactie van een van onze energiespecialisten."
          }
        </p>

        <div className="bg-secondary rounded-xl p-6 mb-8 text-left space-y-3">
          <h3 className="text-[#0f2a1a]" style={{ fontWeight: 600 }}>Wat kunt u verwachten?</h3>
          <ul className="space-y-2 text-[0.925rem] text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Bevestiging per e-mail</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {isConsult ? "Contact voorafgaand aan het gesprek" : "Reactie binnen 48 uur"}</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {isConsult ? "Persoonlijk advies op maat" : "Persoonlijke offerte op basis van uw gegevens"}</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
            Terug naar home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/kennisbank" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
            Bekijk onze kennisbank
          </Link>
        </div>

        <div className="flex justify-center gap-6 text-[0.875rem] text-muted-foreground">
          <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> 071 - 123 4567</span>
          <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> info@groenvooruit.nl</span>
        </div>
      </div>
    </div>
  );
}
