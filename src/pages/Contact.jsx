import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us for quotes, product
            inquiries, or delivery details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">
                    Phone Numbers
                  </p>
                  <div className="space-y-1">
                    <a
                      href="tel:0670458628"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      067 045 8628
                    </a>
                    <a
                      href="tel:0639939627"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      063 993 9627
                    </a>
                    <a
                      href="tel:0634481130"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      063 448 1130
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/27670458628?text=Hello%20NCC%20Tiles%20Supplier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium block"
                  >
                    +27 67 045 8628
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Tap to chat instantly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Location</p>
                  <p className="text-gray-600 leading-relaxed">
                    9692 De Luba Crescent,
                    <br />
                    Clayville Ext 79, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">
                    Business Hours
                  </p>
                  <p className="text-gray-600 text-sm">
                    Mon - Fri: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 8:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="tel:+27670458628"
                className="flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-xl font-semibold hover:bg-slate-900 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/27670458628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-96 flex items-center justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=9692+De+Luba+Crescent+Clayville+Ext+79"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-6"
              >
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="font-semibold text-slate-800 mb-2">
                  9692 De Luba Crescent, Clayville Ext 79
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Click to open in Google Maps
                </p>
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                  Get Directions
                </span>
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-green-800">
                <span className="font-semibold">Note:</span> We offer bulk
                delivery services to construction sites across Clayville and
                surrounding areas. Contact us for quotes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
