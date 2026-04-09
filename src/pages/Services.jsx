export default function Services() {
  const services = [
    {
      title: "Tile Supply",
      desc: "Premium porcelain, glazed, and matt finish tiles in 600x600mm & 600x1200mm sizes.",
      icon: "🏠",
    },
    {
      title: "Roofing Materials",
      desc: "IBR sheeting, concrete tiles, trusses, and fixings for complete roof solutions.",
      icon: "🛡️",
    },
    {
      title: "Bulk Delivery",
      desc: "Fast, reliable delivery directly to your site or home in Clayville and surrounding areas.",
      icon: "🚚",
    },
    {
      title: "Expert Consultation",
      desc: "Not sure what you need? We help you choose the right materials for your project.",
      icon: "💡",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, renovate, or upgrade your property
            under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
