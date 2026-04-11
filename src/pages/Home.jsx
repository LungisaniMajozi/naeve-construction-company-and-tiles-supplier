import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Premium Tiles &<br />
            Construction Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your space with our curated collection of porcelain,
            glazed, and matt finish tiles. Quality roofing materials delivered
            straight to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Browse Collection
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-slate-800 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-all shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Premium Tiles",
                desc: "600x600mm & 600x1200mm porcelain, glazed & matt finishes",
              },
              {
                icon: "🛡️",
                title: "Roofing Materials",
                desc: "IBR sheeting, concrete tiles, trusses & fixings",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                desc: "Reliable delivery to Clayville & surrounding areas",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
