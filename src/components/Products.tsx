"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Badam Drink",
    subtitle: "The Classic Royal Recipe",
    description: "Our signature Badam Drink crafted with pure ingredients, crushed premium almonds, and a touch of saffron for that authentic, luxurious taste.",
    benefits: ["Rich in Protein & Calcium", "100% Real Almonds", "No Artificial Colors", "Perfectly Sweetened"],
    image: "/images/user-yellow.png",
    badge: "Best Seller",
    color: "from-amber-400 to-yellow-500",
    bgLight: "bg-amber-50"
  },
  {
    id: 2,
    name: "Refreshing Badam Drink",
    subtitle: "Light & Energizing",
    description: "A lighter, intensely refreshing almond beverage designed to cool you down instantly while providing natural nut-based energy.",
    benefits: ["Light & Refreshing", "Natural Energy Boost", "Dairy-Free Options", "Zero Preservatives"],
    image: "/images/user-orange.png",
    badge: "New Arrival",
    color: "from-[#FF7A00] to-orange-600",
    bgLight: "bg-orange-50"
  }
];

export default function Products() {
  const [zoomedProduct, setZoomedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF7A00] font-bold mb-4 text-xs uppercase tracking-widest"
          >
            Our Collection
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Discover True <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-amber-500">Refreshment</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group flex flex-col sm:flex-row items-center gap-8 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500`}
            >
              
              {/* Product Image Side */}
              <div 
                className={`relative w-full md:w-1/2 aspect-square sm:aspect-auto sm:min-h-[450px] md:min-h-[500px] ${product.bgLight} rounded-3xl flex items-center justify-center overflow-hidden p-6 cursor-zoom-in group/img`}
                onClick={() => setZoomedProduct(product)}
              >
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${product.color} opacity-10`}></div>
                
                {product.badge && (
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-20 shadow-md`}>
                    {product.badge}
                  </div>
                )}
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain relative z-10 scale-110 group-hover/img:scale-125 transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-1">{product.name}</h3>
                <p className="text-[#FF7A00] font-bold text-sm uppercase tracking-wide mb-4">{product.subtitle}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-auto w-full py-4 rounded-xl border-2 border-[#FF7A00] text-[#FF7A00] font-bold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-center inline-block">
                  Explore Details
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedProduct(null)}
            className="fixed inset-0 z-[100] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900 via-gray-900 to-black flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setZoomedProduct(null)}
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
              className={`relative max-w-[95vw] md:max-w-full max-h-[90vh] rounded-3xl shadow-2xl p-6 md:p-12 overflow-hidden flex items-center justify-center ${zoomedProduct.bgLight}`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${zoomedProduct.color} opacity-20`}></div>
              <img
                src={zoomedProduct.image}
                alt={zoomedProduct.name}
                className="relative z-10 max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
