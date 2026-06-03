import { Link } from "react-router";
import { Home, ArrowLeft, CalendarCheck, Mail } from "lucide-react";

export function NotFound() {
  return (
    <div className="py-20 lg:py-32 pb-32 bg-secondary">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <span className="text-3xl text-primary" style={{ fontWeight: 700 }}>404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>
          Deze pagina bestaat niet
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          De pagina die u zoekt is verplaatst of bestaat niet meer. Geen zorgen — we helpen u graag verder.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" /> Terug naar de homepage
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Vorige pagina
          </button>
        </div>

        <div className="bg-white rounded-xl border border-border p-6 text-left">
          <p className="text-[0.925rem] text-muted-foreground mb-4 text-center">
            Of ga direct verder met:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/adviesgesprek"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[0.925rem]" style={{ fontWeight: 500 }}>Gratis adviesgesprek</p>
                <p className="text-[0.8rem] text-muted-foreground">Plan een afspraak</p>
              </div>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[0.925rem]" style={{ fontWeight: 500 }}>Contact</p>
                <p className="text-[0.8rem] text-muted-foreground">Stuur ons een bericht</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
