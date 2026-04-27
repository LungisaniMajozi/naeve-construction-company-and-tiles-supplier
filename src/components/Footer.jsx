import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900">
      {/* Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-green-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-1.5 rounded-lg">
                <Send className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-bold tracking-tight">
                NCC SUPPLIER
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
              Your trusted partner for premium porcelain, glazed, and matt
              finish tiles. Quality roofing materials delivered straight to your
              doorstep.
            </p>

            {/* Quick Call Button */}
            <a
              href="tel:0670458628"
              className="inline-flex items-center gap-1.5 text-green-500 hover:text-green-400 font-semibold text-xs transition-all duration-300 hover:translate-x-1 group"
            >
              <Phone className="w-3.5 h-3.5 group-hover:animate-pulse" />
              Quick Call
              <span className="block h-0.5 w-0 bg-green-500 group-hover:w-8 transition-all duration-300 mt-0.5"></span>
            </a>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Contact Details
            </h4>

            {/* Phone Numbers - Horizontal Layout */}
            <div>
              <h5 className="text-zinc-300 font-semibold text-xs flex items-center gap-1.5 mb-2">
                <Phone className="w-3.5 h-3.5 text-green-500" />
                Call Us
              </h5>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {["067 045 8628", "063 993 9627", "063 448 1130"].map(
                  (num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="text-zinc-300 hover:text-white text-sm group flex items-center gap-1 transition-all duration-300 hover:translate-x-0.5"
                    >
                      {num}
                      <span className="block h-0.5 w-0 bg-green-500 group-hover:w-8 transition-all duration-300"></span>
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group">
              <h5 className="text-zinc-300 font-semibold text-xs flex items-center gap-1.5 mb-1">
                <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                WhatsApp
              </h5>
              <a
                href="https://wa.me/27670458628?text=Hello%20NCC%20Tiles%20Supplier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-green-400 text-sm group inline-flex items-center gap-1 transition-all duration-300 hover:translate-x-0.5"
              >
                +27 67 045 8628
                <span className="block h-0.5 w-0 bg-green-500 group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>

            {/* Location */}
            <div className="group">
              <h5 className="text-zinc-300 font-semibold text-xs flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                Visit Us
              </h5>
              <a
                href="https://www.google.com/maps/search/?api=1&query=9692+De+Luba+Crescent+Clayville+Ext+79"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-blue-400 text-sm group block transition-all duration-300 hover:translate-x-0.5 leading-snug"
              >
                9692 De Luba Crescent, Clayville Ext 79
                <span className="block h-0.5 w-0 bg-blue-500 group-hover:w-16 transition-all duration-300 mt-1"></span>
              </a>
            </div>
          </div>

          {/* Column 3: Business Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Business Hours
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between gap-4 border-b border-zinc-800 pb-2">
                <span className="text-zinc-300 font-medium">Mon - Fri:</span>
                <span className="text-zinc-400">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800 pb-2">
                <span className="text-zinc-300 font-medium">Saturday:</span>
                <span className="text-zinc-400">8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-zinc-300 font-medium">Sunday:</span>
                <span className="text-green-500 font-medium">Closed</span>
              </div>
            </div>

            {/* Quick Note - Compact */}
            <div className="mt-4 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-green-500/30 transition-colors duration-300">
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                <span className="text-green-500 font-semibold">Note:</span>{" "}
                Bulk delivery to construction sites. Contact for quotes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-500">
            <p>
              Â© {new Date().getFullYear()}{" "}
              <span className="text-zinc-400">NCC Tiles & Supplier</span>. All
              rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
