import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About NCC</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building quality spaces with premium tiles and reliable construction
            solutions since day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>NAEVE CONSTRUCTION COMPANY AND TILES SUPPLIER</strong> was
              founded with a simple mission: to make high-quality building
              materials accessible to every homeowner and contractor. Based in
              Clayville, we specialize in premium porcelain, glazed, and matt
              finish tiles, alongside durable roofing solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're renovating a single room or managing a large
              construction project, our curated collection and expert guidance
              ensure you get the perfect finish.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "100%", label: "Quality Assured" },
                { num: "Local", label: "Clayville Based" },
                { num: "Fast", label: "Delivery & Service" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-orange-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-600">
                    {item.num}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
