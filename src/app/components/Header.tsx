import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl text-[#0f2a1a] tracking-tight" style={{ fontWeight: 600 }}>
              GroenVooruit
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" active={isActive("/")}>Home</NavLink>
            <NavLink to="/over-ons" active={isActive("/over-ons")}>Over ons</NavLink>
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-[0.925rem] text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center gap-1">
                Oplossingen <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 pt-1 hidden group-hover:block">
                <div className="bg-white rounded-xl shadow-lg border border-border p-2 min-w-[220px]">
                  <DropLink to="/oplossingen/zonnepanelen">Zonnepanelen</DropLink>
                  <DropLink to="/oplossingen/thuisbatterij">Thuisbatterij</DropLink>
                  <DropLink to="/oplossingen/bespaarplannen">Bespaarplannen op maat</DropLink>
                </div>
              </div>
            </div>
            <NavLink to="/werkwijze" active={isActive("/werkwijze")}>Werkwijze</NavLink>
            <NavLink to="/bespaartool" active={isActive("/bespaartool")}>Bespaartool</NavLink>
            <NavLink to="/kennisbank" active={isActive("/kennisbank")}>Kennisbank</NavLink>
            <NavLink to="/faq" active={isActive("/faq")}>FAQ</NavLink>
            <NavLink to="/contact" active={isActive("/contact")}>Contact</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/offerte"
              className="px-4 py-2.5 rounded-lg border border-primary text-primary hover:bg-secondary transition-colors text-[0.925rem]"
            >
              Offerte aanvragen
            </Link>
            <Link
              to="/adviesgesprek"
              className="px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-[0.925rem]"
            >
              Gratis adviesgesprek
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 space-y-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/over-ons" onClick={() => setOpen(false)}>Over ons</MobileLink>
            <button
              onClick={() => setSolOpen(!solOpen)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-muted-foreground flex items-center justify-between"
            >
              Oplossingen <ChevronDown className={`w-4 h-4 transition-transform ${solOpen ? "rotate-180" : ""}`} />
            </button>
            {solOpen && (
              <div className="pl-4 space-y-1">
                <MobileLink to="/oplossingen/zonnepanelen" onClick={() => setOpen(false)}>Zonnepanelen</MobileLink>
                <MobileLink to="/oplossingen/thuisbatterij" onClick={() => setOpen(false)}>Thuisbatterij</MobileLink>
                <MobileLink to="/oplossingen/bespaarplannen" onClick={() => setOpen(false)}>Bespaarplannen</MobileLink>
              </div>
            )}
            <MobileLink to="/werkwijze" onClick={() => setOpen(false)}>Werkwijze</MobileLink>
            <MobileLink to="/bespaartool" onClick={() => setOpen(false)}>Bespaartool</MobileLink>
            <MobileLink to="/kennisbank" onClick={() => setOpen(false)}>Kennisbank</MobileLink>
            <MobileLink to="/faq" onClick={() => setOpen(false)}>FAQ</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <div className="pt-3 space-y-2">
              <Link
                to="/offerte"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2.5 rounded-lg border border-primary text-primary"
              >
                Offerte aanvragen
              </Link>
              <Link
                to="/adviesgesprek"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2.5 rounded-lg bg-primary text-white"
              >
                Gratis adviesgesprek
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-lg text-[0.925rem] transition-colors ${
        active ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      }`}
    >
      {children}
    </Link>
  );
}

function DropLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="block px-3 py-2 rounded-lg text-[0.925rem] text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="block px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">
      {children}
    </Link>
  );
}
