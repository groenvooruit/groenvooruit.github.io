import { Link } from "react-router";
import { CalendarCheck, FileText } from "lucide-react";

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex gap-2 p-3">
        <Link
          to="/adviesgesprek"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-white text-[0.875rem]"
        >
          <CalendarCheck className="w-4 h-4" /> Adviesgesprek
        </Link>
        <Link
          to="/offerte"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-primary text-primary text-[0.875rem]"
        >
          <FileText className="w-4 h-4" /> Offerte
        </Link>
      </div>
    </div>
  );
}
