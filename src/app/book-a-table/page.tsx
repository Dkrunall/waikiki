"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Users, User, Phone, MessageSquare, MapPin, ArrowUpRight, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";

const TIME_SLOTS = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM",
];

const INFO_ITEMS = [
  { icon: <Clock className="w-4 h-4" />, label: "Hours", value: "Tue – Sun · 6 PM – 3 AM" },
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Hotel Peninsula Grand, Saki Naka, Andheri East, Mumbai 400072" },
  { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+91 81500 00345", href: "tel:+918150000345" },
];

const OCCASIONS = ["Dinner", "Date Night", "Birthday", "Corporate", "Private Party", "Anniversary", "Other"];

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

export default function BookATablePage() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `*New Table Booking — Waikiki*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Date:* ${form.date}`,
      `*Time:* ${form.time}`,
      `*Guests:* ${form.guests}`,
      `*Occasion:* ${form.occasion || "Not specified"}`,
      `*Notes:* ${form.notes || "None"}`,
    ].join("\n");
    window.open(`https://wa.me/918150000345?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_014.jpg"
            alt="Book a table at Waikiki — best restaurant Andheri East Mumbai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon via-brand-maroon/50 to-brand-maroon/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Waikiki Experience</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/40">Andheri East · Mumbai</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-[13vw] sm:text-[8vw] lg:text-[6vw] leading-[0.88] tracking-tighter text-brand-beige uppercase"
          >
            Reserve
            <br />
            <span className="italic text-brand-beige/70">Your Table</span>
          </motion.h1>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── FORM ── */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20 space-y-6 border border-brand-maroon/10"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-maroon flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-brand-beige" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-serif text-4xl sm:text-5xl tracking-tighter">
                      Booking<br /><span className="italic text-brand-maroon/60">Received</span>
                    </h2>
                    <p className="font-sans text-sm text-brand-maroon/60 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong>{form.name}</strong>. We'll confirm your reservation at <strong>{form.phone}</strong> shortly.
                    </p>
                  </div>
                  <div className="h-px w-12 bg-brand-maroon/20" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/40">Aloha · Waikiki Mumbai</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" }); }}
                    className="font-sans text-xs uppercase tracking-[0.3em] border border-brand-maroon/20 px-6 py-3 hover:bg-brand-maroon hover:text-brand-beige transition-colors"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Form header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-8 bg-brand-maroon/30" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Reservation</span>
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight mb-10">
                    Book Your<br />
                    <span className="italic text-brand-maroon/60">Experience</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <User size={10} /> Full Name
                        </label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-white/70 border border-brand-maroon/15 px-4 py-3.5 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <Phone size={10} /> Phone Number
                        </label>
                        <input
                          required name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX" type="tel"
                          className="w-full bg-white/70 border border-brand-maroon/15 px-4 py-3.5 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <Calendar size={10} /> Date
                        </label>
                        <input
                          required name="date" value={form.date} onChange={handleChange} type="date"
                          className="w-full bg-white/70 border border-brand-maroon/15 px-4 py-3.5 font-sans text-base text-brand-maroon/70 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <Clock size={10} /> Time
                        </label>
                        <select
                          required name="time" value={form.time} onChange={handleChange}
                          className="w-full bg-white/70 border border-brand-maroon/15 px-4 py-3.5 font-sans text-base text-brand-maroon/70 focus:outline-none focus:border-brand-maroon/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>Select time</option>
                          {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="space-y-3">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <Users size={10} /> Number of Guests
                      </label>
                      <div className="grid grid-cols-8 gap-2">
                        {["1", "2", "3", "4", "5", "6", "7", "8+"].map(n => (
                          <button
                            key={n} type="button"
                            onClick={() => setForm(f => ({ ...f, guests: n }))}
                            className={`py-3 font-sans text-[11px] uppercase tracking-wide border transition-colors text-center ${
                              form.guests === n
                                ? "bg-brand-maroon text-brand-beige border-brand-maroon"
                                : "bg-white/70 border-brand-maroon/15 hover:border-brand-maroon/40"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-3">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50">
                        Occasion <span className="text-brand-maroon/30">(optional)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {OCCASIONS.map(o => (
                          <button
                            key={o} type="button"
                            onClick={() => setForm(f => ({ ...f, occasion: f.occasion === o ? "" : o }))}
                            className={`px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] border transition-colors ${
                              form.occasion === o
                                ? "bg-brand-maroon text-brand-beige border-brand-maroon"
                                : "border-brand-maroon/20 hover:border-brand-maroon/50"
                            }`}
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-2">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <MessageSquare size={10} /> Special Requests <span className="text-brand-maroon/30">(optional)</span>
                      </label>
                      <textarea
                        name="notes" value={form.notes} onChange={handleChange} rows={3}
                        placeholder="Dietary requirements, seating preference, celebration details…"
                        className="w-full bg-white/70 border border-brand-maroon/15 px-4 py-3.5 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-brand-maroon text-brand-beige font-sans text-[11px] uppercase tracking-[0.4em] py-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-3"
                    >
                      <Calendar size={13} />
                      Confirm Reservation via WhatsApp
                    </button>

                    <p className="text-center font-sans text-[9px] text-brand-maroon/40 tracking-wide">
                      Or call us directly at{" "}
                      <a href="tel:+918150000345" className="underline underline-offset-2 hover:text-brand-maroon transition-colors">
                        +91 81500 00345
                      </a>
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SIDEBAR INFO ── */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="sticky top-28 space-y-6">

              {/* Venue image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative h-64 sm:h-80 overflow-hidden border border-brand-maroon/10 group"
              >
                <Image
                  src="/new/Waikiki_013.jpg"
                  alt="Waikiki interior — dining room Andheri East"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-1">
                  <div className="h-px w-8 bg-brand-beige/40 mb-3" />
                  <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige/50">Mumbai's Tropical Escape</p>
                  <p className="font-serif text-xl italic text-brand-beige leading-tight">An island-inspired<br />dining destination.</p>
                </div>
              </motion.div>

              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="border border-brand-maroon/10 divide-y divide-brand-maroon/10"
              >
                {INFO_ITEMS.map(item => (
                  <div key={item.label} className="flex items-start gap-4 px-5 py-4">
                    <div className="text-brand-maroon/40 mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div className="space-y-0.5">
                      <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/40">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-sans text-sm text-brand-maroon/80 hover:text-brand-maroon transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-brand-maroon/80 leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* What to expect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-brand-maroon text-brand-beige p-6 sm:p-8 space-y-5 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <Image src="/tiki-pattern-light.png" alt="" fill className="object-cover" />
                </div>
                <div className="relative space-y-4">
                  <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige/40">What to Expect</p>
                  <ul className="space-y-3">
                    {[
                      "Pan-Asian & Hawaiian cuisine",
                      "Handcrafted tiki cocktails",
                      "Lounge, dining & rooftop spaces",
                      "Live DJ & nightlife",
                      "Private dining available",
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-brand-beige/40 flex-shrink-0" />
                        <span className="font-sans text-sm text-brand-beige/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="h-px bg-brand-beige/10 pt-2" />
                  <a
                    href="https://share.google/e3c0MaDRDKot85D9s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-brand-beige/60 hover:text-brand-beige transition-colors pt-1"
                  >
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em]">View Google Reviews</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>

              {/* Map link */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRuZbZFnyec7Me9-oLpRFyVZ&daddr=1st+Floor,+Hotel+Peninsula+Grand+Metro+Station,+near+Saki+Naka,+Lokmanya+Tilak+Nagar,+Andheri+East,+Mumbai,+Maharashtra+400072"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-brand-maroon/10 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-maroon/40" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-maroon/70">Get Directions</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-maroon/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
