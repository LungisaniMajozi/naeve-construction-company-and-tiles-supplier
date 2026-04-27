import { Link } from "react-router-dom";
import { Award, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">About NCC Tiles</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Naeve Construction Company (NCC) strives to redefine spaces across South Africa. With over a decade of excellence, we bring you unmatched quality in ceramic and porcelain tiles alongside premier installation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              10+ Years Heritage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Established over ten years ago, NCC has built a strong reputation across the construction industry for reliability, scale, and high-end aesthetics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Uncompromising Quality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every single tile sourced meets strict SABS approval. We believe your walls and floors should outlast trends with unwavering structural integrity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Customer First
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From commercial contracting to individual home renovations, our consultants handle every client with explicit priority and dedicated design support.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl shadow-xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 -ml-20 -mb-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-green-500/30"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
