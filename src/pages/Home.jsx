import { Link } from "react-router-dom";
import { Grid, Hammer, Truck, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 min-h-[600px] flex items-center justify-center bg-gray-900 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/home.png')" }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              SABS Approved Quality
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Premium Tiles &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Construction
              </span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Transform your space with our curated collection of porcelain,
              glazed, and matt finish tiles. Quality roofing materials delivered
              straight to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="group bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                Browse Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose NCC?</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Grid className="w-8 h-8 text-orange-600" />,
                title: "Premium Tiles",
                desc: "600x600mm & 600x1200mm porcelain, glazed & matt finishes",
                bgColor: "bg-orange-100/50"
              },
              {
                icon: <Hammer className="w-8 h-8 text-blue-600" />,
                title: "Roofing Materials",
                desc: "IBR sheeting, concrete tiles, trusses & high-quality fixings",
                bgColor: "bg-blue-100/50"
              },
              {
                icon: <Truck className="w-8 h-8 text-green-600" />,
                title: "Fast Delivery",
                desc: "Reliable & timely delivery to Clayville and surrounding areas",
                bgColor: "bg-green-100/50"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${item.bgColor}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
