"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aarav S.",
    role: "Verified Customer",
    text: "Refreshing taste and premium quality. One of the best dairy drinks I have ever had. The badam drink is perfectly balanced and authentic."
  },
  {
    id: 2,
    name: "Sneha P.",
    role: "Regular Buyer",
    text: "You can really taste the natural almond flavor. It's my go-to refreshing drink for the summer. Highly recommended to everyone!"
  },
  {
    id: 3,
    name: "Rohan D.",
    role: "Verified Customer",
    text: "The packaging and the taste both scream luxury and quality. It's great to see such a world-class premium beverage from our local dairy."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full blur-[100px] opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF7A00]/20 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest"
          >
            Customer Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            What Our Customers <span className="text-[#FF7A00]">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-orange-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-8 text-orange-100 group-hover:text-orange-200 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed font-medium mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-[#FF7A00] flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
