"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, User, Phone, MessageSquare } from "lucide-react";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"];

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `*New Table Booking — Waikiki*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Date:* ${form.date}\n*Time:* ${form.time}\n*Guests:* ${form.guests}\n*Notes:* ${form.notes || "None"}`;
    const url = `https://wa.me/918150000345?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", guests: "2", notes: "" }); }, 500);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-brand-maroon/80 backdrop-blur-sm"
          />

          {/* Modal — bottom sheet on mobile, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 z-[95] w-full sm:w-[540px] bg-brand-beige text-brand-maroon flex flex-col max-h-[92dvh] sm:max-h-[90vh]"
          >
            {/* Header — fixed inside modal */}
            <div className="flex items-start justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-brand-maroon/10 flex-shrink-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-5 bg-brand-magenta" />
                  <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-magenta">Waikiki Experience</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl tracking-tighter leading-none">
                  Reserve<br /><span className="italic">Your Table</span>
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-maroon/15 hover:bg-brand-maroon hover:text-brand-beige transition-colors flex-shrink-0 mt-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-maroon flex items-center justify-center mx-auto">
                      <span className="text-brand-beige text-2xl">✓</span>
                    </div>
                    <h3 className="font-serif text-2xl italic tracking-tight">Booking Received</h3>
                    <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed max-w-xs mx-auto">
                      Thank you, {form.name}. We&apos;ll confirm your reservation at <span className="font-medium">{form.phone}</span> shortly. Aloha!
                    </p>
                    <button onClick={handleClose} className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] underline underline-offset-4 text-brand-maroon/50 hover:text-brand-maroon transition-colors">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5 pb-4">

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <User size={10} />Name
                      </label>
                      <input
                        required name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/60 border border-brand-maroon/15 px-4 py-3 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <Phone size={10} />Phone
                      </label>
                      <input
                        required name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX" type="tel"
                        className="w-full bg-white/60 border border-brand-maroon/15 px-4 py-3 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                      />
                    </div>

                    {/* Date + Time — 2 col on all sizes */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <Calendar size={10} />Date
                        </label>
                        <input
                          required name="date" value={form.date} onChange={handleChange} type="date"
                          className="w-full bg-white/60 border border-brand-maroon/15 px-3 py-3 font-sans text-base text-brand-maroon/70 focus:outline-none focus:border-brand-maroon/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                          <Clock size={10} />Time
                        </label>
                        <select
                          required name="time" value={form.time} onChange={handleChange}
                          className="w-full bg-white/60 border border-brand-maroon/15 px-3 py-3 font-sans text-base text-brand-maroon/70 focus:outline-none focus:border-brand-maroon/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>Time</option>
                          {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="space-y-2">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <Users size={10} />Guests
                      </label>
                      <div className="grid grid-cols-8 gap-1.5">
                        {["1", "2", "3", "4", "5", "6", "7", "8+"].map(n => (
                          <button
                            key={n} type="button"
                            onClick={() => setForm(f => ({ ...f, guests: n }))}
                            className={`py-2.5 font-sans text-[10px] uppercase tracking-wide border transition-colors text-center ${form.guests === n ? "bg-brand-maroon text-brand-beige border-brand-maroon" : "bg-white/60 border-brand-maroon/15 hover:border-brand-maroon/40"}`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-maroon/50 flex items-center gap-1.5">
                        <MessageSquare size={10} />Special Requests
                      </label>
                      <textarea
                        name="notes" value={form.notes} onChange={handleChange} rows={2}
                        placeholder="Dietary requirements, occasion, seating preference…"
                        className="w-full bg-white/60 border border-brand-maroon/15 px-4 py-3 font-sans text-base placeholder:text-brand-maroon/30 focus:outline-none focus:border-brand-maroon/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-maroon text-brand-beige font-sans text-[10px] uppercase tracking-[0.4em] py-4 hover:opacity-80 transition-opacity flex items-center justify-center gap-3"
                    >
                      <Calendar size={12} /> Confirm Reservation
                    </button>

                    <p className="text-center font-sans text-[9px] text-brand-maroon/40 tracking-wide pb-2">
                      Or call us at{" "}
                      <a href="tel:+918150000345" className="underline hover:text-brand-maroon transition-colors">+91 81500 00345</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
