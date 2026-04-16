import { Link } from "react-router";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f2a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl" style={{ fontWeight: 600 }}>GroenVooruit</span>
            </div>
            <p className="text-white/70 text-[0.925rem] mb-6">
              Uw partner voor duurzame energie. Persoonlijk advies, eerlijke prijzen en vakkundige installatie.
            </p>
            <div className="space-y-2 text-[0.925rem] text-white/70">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 071 - 123 4567</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@groenvooruit.nl</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Linnaeuspark 16, Lisse</div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Oplossingen</h4>
            <ul className="space-y-2 text-[0.925rem] text-white/70">
              <li><Link to="/oplossingen/zonnepanelen" className="hover:text-white transition-colors">Zonnepanelen</Link></li>
              <li><Link to="/oplossingen/thuisbatterij" className="hover:text-white transition-colors">Thuisbatterij</Link></li>
              <li><Link to="/oplossingen/bespaarplannen" className="hover:text-white transition-colors">Bespaarplannen op maat</Link></li>
              <li><Link to="/bespaartool" className="hover:text-white transition-colors">Bespaartool</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Informatie</h4>
            <ul className="space-y-2 text-[0.925rem] text-white/70">
              <li><Link to="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
              <li><Link to="/werkwijze" className="hover:text-white transition-colors">Werkwijze</Link></li>
              <li><Link to="/kennisbank" className="hover:text-white transition-colors">Kennisbank</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Veelgestelde vragen</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Aan de slag</h4>
            <ul className="space-y-2 text-[0.925rem] text-white/70 mb-6">
              <li><Link to="/adviesgesprek" className="hover:text-white transition-colors">Gratis adviesgesprek</Link></li>
              <li><Link to="/offerte" className="hover:text-white transition-colors">Offerte aanvragen</Link></li>
            </ul>
            <h4 className="text-white mb-4">Juridisch</h4>
            <ul className="space-y-2 text-[0.925rem] text-white/70">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Algemene voorwaarden</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.875rem] text-white/50">
          <p>&copy; {new Date().getFullYear()} GroenVooruit. Alle rechten voorbehouden.</p>
          <p>Erkend installateur | KvK 12345678 | BTW NL123456789B01</p>
        </div>
      </div>
    </footer>
  );
}
