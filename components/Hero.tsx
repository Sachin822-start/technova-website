
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              WELCOME TO TECHNOVA SOLUTIONS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Building Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Solutions
              </span>
              for a Smarter Future
            </h1>

            <p className="mt-7 text-lg text-gray-300 leading-8 max-w-xl">
              We help businesses grow with modern web development, cloud
              solutions, and reliable IT consulting. Transform your ideas
              into powerful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
                <span>→</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-gray-600 text-white font-semibold hover:bg-white/10 hover:border-blue-400 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-5 mt-14 max-w-lg border-t border-gray-700 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-sm text-gray-400 mt-1">Support</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-sm text-gray-400 mt-1">Commitment</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Modern</h3>
                <p className="text-sm text-gray-400 mt-1">Technology</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-gray-400">TechNova Dashboard</p>
                  <h3 className="text-xl font-bold mt-1">
                    Digital Innovation
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>
              </div>

              {/* Dashboard Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-slate-800/80 border border-white/10 p-5">
                  <div className="text-2xl mb-3">🌐</div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Modern digital experiences
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-800/80 border border-white/10 p-5">
                  <div className="text-2xl mb-3">☁️</div>
                  <h4 className="font-semibold">Cloud Solutions</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Scalable cloud infrastructure
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-800/80 border border-white/10 p-5">
                  <div className="text-2xl mb-3">🛡️</div>
                  <h4 className="font-semibold">IT Consulting</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Reliable technology guidance
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-800/80 border border-white/10 p-5">
                  <div className="text-2xl mb-3">🚀</div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Ideas into solutions
                  </p>
                </div>
              </div>

              {/* Bottom Status */}
              <div className="mt-6 rounded-xl bg-blue-600/15 border border-blue-400/20 p-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <p className="text-sm text-blue-100">
                  Empowering businesses through technology
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
