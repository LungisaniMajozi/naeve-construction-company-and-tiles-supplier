import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initial: "S",
      name: "Sarah Jenkins",
      role: "Homeowner",
      quote:
        "NCC Tiles transformed our kitchen completely! The quality of the tiles is exactly what we were looking for and the installation was flawless.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      initial: "D",
      name: "David Mokoena",
      role: "Property Developer",
      quote:
        "As a developer, I need reliable suppliers. NCC has consistently delivered premium tiles on time and within budget for all my projects.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      initial: "M",
      name: "Michelle van der Merwe",
      role: "Interior Designer",
      quote:
        "Their range of modern tiles is unmatched. I always bring my clients here first as I know they'll find something unique and high-quality.",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      initial: "S",
      name: "Sipho Ndlovu",
      role: "Restaurant Owner",
      quote:
        "The commercial grade tiles we installed in our busy restaurant look as good as new after two years. Very impressed with the durability.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      initial: "J",
      name: "Jessica Smith",
      role: "Architect",
      quote:
        "Precision and consistency are key for my firm's projects. NCC Tiles guarantees both, alongside phenomenal customer support whenever we need custom sizes.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      initial: "A",
      name: "Ahmed Patel",
      role: "Homeowner",
      quote:
        "From the showroom visit to the final delivery, absolutely professional. The pricing is very competitive for this grade of ceramic tile.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their NCC Tiles experience over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-100" />
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${testimonial.bgColor} ${testimonial.textColor}`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
