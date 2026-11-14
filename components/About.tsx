
const strengths = [
  {
    icon: "🎯",
    title: "Client-Focused Approach",
    description: "We understand your business goals and build solutions around your needs.",
  },
  {
    icon: "💡",
    title: "Modern Technology",
    description: "We use modern tools and technologies to build reliable digital solutions.",
  },
  {
    icon: "🤝",
    title: "Reliable Partnership",
    description: "We believe in transparent communication and long-term client relationships.",
  },
  {
    icon: "🚀",
    title: "Continuous Innovation",
    description: "We continuously explore better ways to solve technology challenges.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Company Introduction */}
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
              About TechNova
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Technology That
              <span className="block text-blue-600">
                Moves Business Forward
              </span>
            </h2>

            <p className="mt-7 text-gray-600 text-lg leading-8">
              At TechNova Solutions, we believe technology should make
              business simpler, smarter, and more efficient. We help
              organizations turn their ideas into practical digital solutions.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              From modern web applications to cloud infrastructure and IT
              consulting, our focus is on delivering dependable solutions
              that support business growth.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Learn More About Us
              <span>→</span>
            </a>
          </div>

          {/* Right: Company Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Company Statistics */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-blue-600">24/7</h3>
            <p className="text-gray-500 mt-2">Support Availability</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-blue-600">100%</h3>
            <p className="text-gray-500 mt-2">Commitment</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-blue-600">6+</h3>
            <p className="text-gray-500 mt-2">Service Areas</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-blue-600">1</h3>
            <p className="text-gray-500 mt-2">Mission: Your Growth</p>
          </div>
        </div>

      </div>
    </section>
  );
}
