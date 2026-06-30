"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/user-yellow.png",
    alt: "Premium Badam Drink Can",
    className: "bg-amber-50 p-8 md:p-16 aspect-square flex items-center justify-center",
    title: "Signature Can"
  },
  {
    src: "/images/user-orange.png",
    alt: "Refreshing Badam Drink Can",
    className: "bg-orange-50 p-8 md:p-16 aspect-square flex items-center justify-center",
    title: "New Refreshing Can"
  }
];

export default function Gallery() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest"
          >
            Inside Aura Dairy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Our <span className="text-[#FF7A00]">Gallery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setZoomedImage(item.src)}
              className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in ${item.className}`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-700 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-20">
                <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[100] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900 via-gray-900 to-black flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#FF7A00] transition-colors p-2 bg-black/50 rounded-full z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] md:max-w-full max-h-[90vh] rounded-3xl shadow-2xl p-6 md:p-12 overflow-hidden flex items-center justify-center bg-amber-50"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-15"></div>
              <img
                src={zoomedImage}
                alt="Zoomed Gallery Image"
                className="relative z-10 max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
