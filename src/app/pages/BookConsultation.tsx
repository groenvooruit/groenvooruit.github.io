import { useState } from "react";
import { useNavigate } from "react-router";
import { CalendarCheck, CheckCircle, Shield, Clock, Phone, Video, Home, ChevronLeft, ChevronRight } from "lucide-react";

const TIME_SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1; // Monday start
  return { daysInMonth, offset };
}

const MONTHS = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

export function BookConsultation() {
  const navigate = useNavigate();
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultType, setConsultType] = useState("thuis");
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });

  const { daysInMonth, offset } = getMonthDays(year, month);
  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const isWeekend = (day: number) => {
    const d = new Date(year, month, day);
    return d.getDay() === 0 || d.getDay() === 6;
  };
  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/bedankt?type=adviesgesprek");
  };

  return (
    <div className="pb-16 lg:pb-0">
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[0.875rem] mb-4">
            <CalendarCheck className="w-4 h-4" /> Gratis adviesgesprek
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#0f2a1a] mb-4" style={{ fontWeight: 700 }}>
            Plan uw gratis adviesgesprek
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kies een datum en tijdstip dat u uitkomt. Ons gesprek is geheel vrijblijvend en duurt ongeveer 30-45 minuten.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={submit}>
            {/* Consult type */}
            <div className="mb-8">
              <label className="block mb-3 text-[0.925rem]" style={{ fontWeight: 500 }}>Type gesprek</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: "thuis", icon: Home, label: "Bij u thuis" },
                  { id: "online", icon: Video, label: "Online (video)" },
                  { id: "telefoon", icon: Phone, label: "Telefonisch" },
                ].map(opt => (
                  <button key={opt.id} type="button" onClick={() => setConsultType(opt.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-[0.925rem] transition-colors ${consultType === opt.id ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                    <opt.icon className="w-4 h-4" /> {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Calendar */}
              <div className="p-6 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-4">
                  <button type="button" onClick={prevMonth} className="p-1 hover:bg-muted rounded"><ChevronLeft className="w-5 h-5" /></button>
                  <span style={{ fontWeight: 600 }}>{MONTHS[month]} {year}</span>
                  <button type="button" onClick={nextMonth} className="p-1 hover:bg-muted rounded"><ChevronRight className="w-5 h-5" /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[0.8rem] text-muted-foreground mb-2">
                  {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isWeekend(day) || isPast(day);
                    const selected = selectedDate === day;
                    return (
                      <button key={day} type="button" disabled={disabled}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square rounded-lg text-[0.875rem] transition-colors ${
                          disabled ? "text-muted-foreground/40 cursor-not-allowed" :
                          selected ? "bg-primary text-white" :
                          "hover:bg-secondary text-foreground"
                        }`}>
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div>
                <p className="mb-3 text-[0.925rem]" style={{ fontWeight: 500 }}>
                  {selectedDate ? `Beschikbare tijden op ${selectedDate} ${MONTHS[month]}` : "Kies eerst een datum"}
                </p>
                {selectedDate ? (
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map(t => (
                      <button key={t} type="button" onClick={() => setSelectedTime(t)}
                        className={`px-4 py-3 rounded-lg border text-[0.925rem] transition-colors ${
                          selectedTime === t ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                        }`}>
                        {t}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center text-muted-foreground text-[0.925rem] border border-dashed border-border rounded-xl">
                    Selecteer een datum in de kalender
                  </div>
                )}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-5 mb-8">
              <h3 className="text-[#0f2a1a]" style={{ fontWeight: 600 }}>Uw gegevens</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 text-[0.925rem]">Naam *</label>
                  <input type="text" required value={form.name} onChange={e => update("name", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                </div>
                <div>
                  <label className="block mb-1.5 text-[0.925rem]">E-mailadres *</label>
                  <input type="email" required value={form.email} onChange={e => update("email", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 text-[0.925rem]">Telefoonnummer *</label>
                  <input type="tel" required value={form.phone} onChange={e => update("phone", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                </div>
                <div>
                  <label className="block mb-1.5 text-[0.925rem]">Adres {consultType === "thuis" ? "*" : "(optioneel)"}</label>
                  <input type="text" required={consultType === "thuis"} value={form.address} onChange={e => update("address", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem]" />
                </div>
              </div>
              <div>
                <label className="block mb-1.5 text-[0.925rem]">Opmerkingen (optioneel)</label>
                <textarea value={form.notes} onChange={e => update("notes", e.target.value)} rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-input-background text-[0.925rem] resize-none" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button type="submit" disabled={!selectedDate || !selectedTime}
                className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Adviesgesprek bevestigen
              </button>
              <div className="flex flex-wrap gap-4 text-[0.875rem] text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Gratis</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Vrijblijvend</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> 30-45 min</span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
