import { MapPin, Phone, Mail, Droplet } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src="/images/logo of mahabaleshwar.png?v=2" alt="Mahabaleshwar Dairy" className="h-16 w-auto object-contain bg-white/95 p-2.5 rounded-xl shadow-lg" />
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed font-medium">
              Premium dairy beverages crafted with rich flavors and natural goodness. Bringing the authentic taste of Badam Drink to your home.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/MDIbadamdrink" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.facebook.com/MDIbadamdrink" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://www.facebook.com/MDIbadamdrink" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="/#home" className="hover:text-[#FF7A00] transition-colors">Home</a></li>
              <li><Link href="/about" className="hover:text-[#FF7A00] transition-colors">Brand Story</Link></li>
              <li><Link href="/products" className="hover:text-[#FF7A00] transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FF7A00] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF7A00] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/products" className="hover:text-[#FF7A00] transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>Premium Badam Drink</Link></li>
              <li><a href="#products" className="hover:text-[#FF7A00] transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></div>Refreshing Badam Drink</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-sm">Belbariya, Butwal, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-sm">+977 9857025489</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-sm">mahabaleshowr@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Mahabaleshwor Dairy And Beverage Industry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
