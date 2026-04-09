import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Premium Tiles &<br />
          Construction Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your space with our curated collection of porcelain, glazed,
          and matt finish tiles. Quality roofing materials delivered straight to
          your doorstep.
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
  );
}
