import { useState } from "react";
import {
  Play,
  X,
  Heart,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Package,
  CheckCircle,
} from "lucide-react";

export default function Combos() {
  const [activeVideo, setActiveVideo] = useState(null);

  const combos = [
    {
      id: 1,
      title: "âœ¨ 600x600 Gloss Combo Special",
      description: "Everything you need for a glossy tile finish",
      videoSrc: "/videos/combo1.mp4",
      thumbnail: "/videos/combo1.jpeg",
      accent: "from-green-400 to-green-600",
      comboDetails: [
        "âœ“ 20 boxes tiles (600x600mm Gloss)",
        "âœ“ 10 bags tile cement",
        "âœ“ 2 x grout (1kg each)",
        "âœ“ 2 x bonding liquid (1L each)",
        "âœ“ 2 packs spacers",
      ],
      comboPrice: "R4,400",
      savings: "Bulk discount applied",
      whatsappMessage:
        "Hi NCC! I'm interested in the âœ¨ 600x600 Gloss Combo Special (20 boxes tiles + cement + grout + bonding liquid + spacers) for R4,400. Please confirm availability and delivery.",
    },
    {
      id: 2,
      title: "ðŸ† 600x600 Porcelain Combo Special",
      description: "Glazed/Polished porcelain bundle for premium spaces",
      videoSrc: "/videos/combo2.mp4",
      thumbnail: "/videos/combo2.jpeg",
      accent: "from-blue-400 to-blue-600",
      comboDetails: [
        "âœ“ 40 boxes tiles (600x600mm Glazed/Polished)",
        "âœ“ 20 bags tile cement",
        "âœ“ 4 x bonding liquid (1L each)",
        "âœ“ 4 x grout (1kg each)",
        "âœ“ 2 aluminium strips (10mm)",
      ],
      comboPrice: "R9,600",
      savings: "Bulk discount applied",
      whatsappMessage:
        "Hi NCC! I'm interested in the ðŸ† 600x600 Porcelain Combo Special (40 boxes tiles + cement + bonding liquid + grout + aluminium strips) for R9,600. Please confirm availability and delivery.",
    },
    {
      id: 3,
      title: "ðŸ’Ž 600x1200 Porcelain Combo Special",
      description: "Large format glazed/polished porcelain for luxury finishes",
      videoSrc: "/videos/combo3.mp4",
      thumbnail: "/videos/comobo3.png",
      accent: "from-pink-400 to-pink-600",
      comboDetails: [
        "âœ“ 10 boxes tiles (600x1200mm Glazed/Polished)",
        "âœ“ 5 bags tile Glue",
        "âœ“ 5 litre bonding liquid",
        "âœ“ 5kg grout",
        "âœ“ 1 packs spacers",
        "âœ“ 1 aluminium strip edge (10mm)",
      ],
      comboPrice: "R2,499.99",
      savings: "Best value for large projects",
      whatsappMessage:
        "Hi NCC! I'm interested in the ðŸ’Ž 600x1200 Porcelain Combo Special (50 boxes tiles + cement + bonding liquid + grout + spacers + aluminium strips) for R14,000. Please confirm availability and delivery.",
    },
  ];

  const handleComboRequest = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27670458628?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Exclusive Combo Deals
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Save More with NCC Combos âœ¨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Bundle tiles, cement, grout & accessories for exclusive discounts.
            Request your combo today!
          </p>

          {/* TikTok Button */}
          <a
            href="https://www.tiktok.com/@karabo0941?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            Check More Combo Deals on TikTok
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Video Thumbnail */}
              <div
                className="aspect-video relative overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(combo)}
              >
                <img
                  src={combo.thumbnail}
                  alt={combo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${combo.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm p-5 rounded-full shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Play className="w-10 h-10 text-green-600 fill-green-600" />
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-100" />
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                    {combo.savings}
                  </span>
                </div>
              </div>

              {/* Combo Details */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                    {combo.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {combo.description}
                </p>

                {/* Combo Details List */}
                <ul className="space-y-2 mb-4 flex-1">
                  {combo.comboDetails.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Package className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4 pt-4 border-t border-gray-100">
                  <p className="text-2xl font-bold text-green-600">
                    {combo.comboPrice}
                  </p>
                  <p className="text-xs text-gray-500">All items included</p>
                </div>

                {/* Request Button */}
                <button
                  onClick={() => handleComboRequest(combo.whatsappMessage)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn mt-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request via WhatsApp
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    â†’
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TikTok CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              ðŸŽµ Want More Combo Deals?
            </h3>
            <p className="text-gray-300 mb-6">
              Follow us on TikTok for exclusive flash deals, behind-the-scenes
              content, and customer transformations!
            </p>
            <a
              href="https://www.tiktok.com/@karabo0941?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              @karabo0941 on TikTok
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src={activeVideo.videoSrc}
              controls
              autoPlay
              className="w-full aspect-video"
            />
            <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <h3 className="font-bold text-xl mb-2">{activeVideo.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {activeVideo.description}
              </p>
              <button
                onClick={() => handleComboRequest(activeVideo.whatsappMessage)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Request This Combo via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
