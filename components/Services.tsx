
const services = [
  {
    number: "01",
    icon: "🌐",
    title: "Web Development",
    description:
      "Build modern, responsive, and high-performance websites that deliver excellent digital experiences.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Deploy scalable and secure cloud infrastructure to improve business performance and reliability.",
    tags: ["AWS", "Azure", "DevOps"],
  },
  {
    number: "03",
    icon: "🛡️",
    title: "IT Consulting",
    description:
      "Get expert technology guidance to optimize IT operations and support your digital transformation.",
    tags: ["Infrastructure", "Networking", "Security"],
  },
  {
    number: "04",
    icon: "⚙️",
    title: "DevOps & Automation",
    description:
      "Streamline software delivery through automated deployment, monitoring, and infrastructure management.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    number: "05",
    icon: "📱",
    title: "Application Development",
    description:
      "Create user-friendly applications designed around your business requirements and customer needs.",
    tags: ["Frontend", "Backend", "APIs"],
  },
  {
    number: "06",
    icon: "📊",
    title: "Technical Support",
    description:
      "Keep your technology running smoothly with troubleshooting, maintenance, and technical assistance.",
    tags: ["Maintenance", "Support", "Monitoring"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Professional{" "}
            <span className="text-blue-600">Services</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            We combine technology, creativity, and expertise to deliver
            digital solutions that help businesses move forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300"
            >
              {/* Number and Icon */}
              <div className="flex items-center justify-between mb-7">
                <span className="text-sm font-bold tracking-widest text-gray-400">
                  {service.number}
                </span>

                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {service.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-7">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-2 rounded-full bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Discuss Your Project
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
