"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF7A00]/20 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest shadow-sm"
        >
          <MapPin className="w-4 h-4" /> Visit Us
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          Our Location
        </motion.h2>
      </div>

      <div className="w-full h-[500px]">
        <iframe 
          src="https://maps.google.com/maps?q=Mahabaleshwor%20Dairy%20and%20Beverage%20Pvt.%20Ltd.&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen 
          aria-hidden="false" 
          tabIndex={0}
          title="Mahabaleshwor Dairy Location"
          className="grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </section>
  );
}
