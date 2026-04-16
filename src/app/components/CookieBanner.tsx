import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-6 left-4 right-4 lg:left-auto lg:right-6 z-50 max-w-md">
      <div className="bg-white rounded-xl shadow-xl border border-border p-5">
        <p className="text-[0.875rem] text-muted-foreground mb-4">
          Wij gebruiken cookies om uw ervaring te verbeteren en onze website te optimaliseren. Door verder te gaan gaat u akkoord met ons{" "}
          <a href="/privacy" className="text-primary underline">cookiebeleid</a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setVisible(false)}
            className="flex-1 py-2 rounded-lg bg-primary text-white text-[0.875rem]"
          >
            Accepteren
          </button>
          <button
            onClick={() => setVisible(false)}
            className="flex-1 py-2 rounded-lg border border-border text-muted-foreground text-[0.875rem]"
          >
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
