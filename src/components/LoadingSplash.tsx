"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingSplash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-brand-maroon flex flex-col justify-center items-center text-brand-beige"
        >
          {/* Big Waikiki Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-[280px] h-[120px] sm:w-[380px] sm:h-[160px] md:w-[480px] md:h-[200px] mb-6"
          >
            <Image 
              src="/waikiki.png" 
              alt="Waikiki Logo" 
              fill 
              className="object-contain brightness-0 invert"
              priority
            />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl md:text-6xl tracking-tighter uppercase italic text-center"
            >
              The <span className="text-brand-beige">Experience</span>
            </motion.h2>
          </div>


          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="h-[1px] bg-brand-beige/30 mt-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5 }}
            className="font-sans text-[10px] uppercase tracking-[0.5em] mt-8"
          >
            Aloha Mumbai
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
