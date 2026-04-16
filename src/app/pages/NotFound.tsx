import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="py-24 lg:py-32 text-center pb-32">
      <div className="max-w-md mx-auto px-4">
        <p className="text-6xl text-primary mb-4" style={{ fontWeight: 700 }}>404</p>
        <h1 className="text-2xl text-[#0f2a1a] mb-4" style={{ fontWeight: 600 }}>Pagina niet gevonden</h1>
        <p className="text-muted-foreground mb-8">De pagina die u zoekt bestaat niet of is verplaatst.</p>
        <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
