import { useState } from "react";
import { Link } from "react-router";
import { Calculator, Sun, Battery, Zap, ArrowRight, Info } from "lucide-react";

export function SavingsTool() {
  const [panels, setPanels] = useState(12);
  const [usage, setUsage] = useState(3500);
  const [battery, setBattery] = useState(false);
  const [batteryKwh, setBatteryKwh] = useState(10);
  const [roofDir, setRoofDir] = useState("south");

  const dirFactor: Record<string, number> = { south: 1, "south-east": 0.95, "south-west": 0.95, east: 0.85, west: 0.85, north: 0.6 };
  const factor = dirFactor[roofDir] || 1;
  const yearlyProduction = Math.round(panels * 400 * factor);
  const selfUseWithoutBattery = Math.min(yearlyProduction, usage) * 0.35;
  const selfUseWithBattery = Math.min(yearlyProduction, usage) * (0.35 + 0.35 * Math.min(batteryKwh / 20, 1));
  const selfUse = battery ? selfUseWithBattery : selfUseWithoutBattery;
  const feedIn = yearlyProduction - selfUse;
  const savingsSelf = Math.round(selfUse * 0.25);
  const savingsFeedIn = Math.round(feedIn * 0.07);
  const totalSavings = savingsSelf + savingsFeedIn;
  const panelCost = panels * 350;
  const batteryCost = battery ? batteryKwh * 450 : 0;
  const totalCost = panelCost + batteryCost;
  const payback = totalSavings > 0 ? (totalCost / totalSavings).toFixed(1) : "—";

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
            <Calculator className="w-4 h-4" /> Bespaartool
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>
            Bereken uw besparing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Krijg een indicatie van uw mogelijke besparing met zonnepanelen en/of een thuisbatterij. Dit is een schatting — voor een exact advies plannen we graag een gesprek.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Input */}
            <div className="lg:col-span-3 space-y-6">
              <div className="p-6 rounded-xl border border-border bg-white">
                <h3 className="text-[#0f2a1a] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <Sun className="w-5 h-5 text-primary" /> Zonnepanelen
                </h3>
                <label className="block mb-2 text-[0.925rem]">
                  Aantal panelen: <span className="text-primary" style={{ fontWeight: 600 }}>{panels}</span>
                </label>
                <input type="range" min={4} max={30} value={panels} onChange={e => setPanels(+e.target.value)}
                  className="w-full accent-[#16a34a]" />
                <div className="flex justify-between text-[0.8rem] text-muted-foreground mt-1"><span>4</span><span>30</span></div>

                <label className="block mb-2 mt-6 text-[0.925rem]">Dakoriëntatie</label>
                <select value={roofDir} onChange={e => setRoofDir(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]">
                  <option value="south">Zuid</option>
                  <option value="south-east">Zuidoost</option>
                  <option value="south-west">Zuidwest</option>
                  <option value="east">Oost</option>
                  <option value="west">West</option>
                  <option value="north">Noord</option>
                </select>
              </div>

              <div className="p-6 rounded-xl border border-border bg-white">
                <h3 className="text-[#0f2a1a] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <Zap className="w-5 h-5 text-primary" /> Uw verbruik
                </h3>
                <label className="block mb-2 text-[0.925rem]">
                  Jaarlijks verbruik: <span className="text-primary" style={{ fontWeight: 600 }}>{usage.toLocaleString()} kWh</span>
                </label>
                <input type="range" min={1000} max={10000} step={100} value={usage} onChange={e => setUsage(+e.target.value)}
                  className="w-full accent-[#16a34a]" />
                <div className="flex justify-between text-[0.8rem] text-muted-foreground mt-1"><span>1.000 kWh</span><span>10.000 kWh</span></div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#0f2a1a] flex items-center gap-2" style={{ fontWeight: 600 }}>
                    <Battery className="w-5 h-5 text-primary" /> Thuisbatterij
                  </h3>
                  <button
                    onClick={() => setBattery(!battery)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${battery ? "bg-primary" : "bg-gray-300"}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${battery ? "left-6" : "left-0.5"}`} />
                  </button>
                </div>
                {battery && (
                  <>
                    <label className="block mb-2 text-[0.925rem]">
                      Capaciteit: <span className="text-primary" style={{ fontWeight: 600 }}>{batteryKwh} kWh</span>
                    </label>
                    <input type="range" min={5} max={40} step={5} value={batteryKwh} onChange={e => setBatteryKwh(+e.target.value)}
                      className="w-full accent-[#16a34a]" />
                    <div className="flex justify-between text-[0.8rem] text-muted-foreground mt-1"><span>5 kWh</span><span>40 kWh</span></div>
                  </>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 p-6 rounded-xl bg-[#0f2a1a] text-white">
                <h3 className="text-white mb-6" style={{ fontWeight: 600 }}>Uw indicatieve besparing</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Jaarlijkse opwek</span>
                    <span style={{ fontWeight: 600 }}>{yearlyProduction.toLocaleString()} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Eigen verbruik</span>
                    <span style={{ fontWeight: 600 }}>{Math.round(selfUse).toLocaleString()} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Teruglevering</span>
                    <span style={{ fontWeight: 600 }}>{Math.round(feedIn).toLocaleString()} kWh</span>
                  </div>
                  <div className="border-t border-white/20 pt-4" />
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Besparing eigen verbruik</span>
                    <span className="text-green-400" style={{ fontWeight: 600 }}>&euro;{savingsSelf}/jr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Opbrengst teruglevering</span>
                    <span className="text-green-400" style={{ fontWeight: 600 }}>&euro;{savingsFeedIn}/jr</span>
                  </div>
                  <div className="border-t border-white/20 pt-4" />
                  <div className="flex justify-between items-baseline">
                    <span className="text-white">Totale jaarlijkse besparing</span>
                    <span className="text-2xl text-green-400" style={{ fontWeight: 700 }}>&euro;{totalSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Geschatte investering</span>
                    <span style={{ fontWeight: 600 }}>&euro;{totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-[0.925rem]">Terugverdientijd</span>
                    <span style={{ fontWeight: 600 }}>~{payback} jaar</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-lg bg-white/10 text-[0.8rem] text-white/70 mb-6">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Dit is een indicatie. De exacte besparing hangt af van uw specifieke situatie. Plan een gratis adviesgesprek voor een nauwkeurige berekening.</span>
                </div>

                <div className="space-y-3">
                  <Link to="/adviesgesprek" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-[0.925rem]">
                    Gratis adviesgesprek <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/offerte" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors text-[0.925rem]">
                    Direct offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
