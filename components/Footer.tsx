
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Branding */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">T</span>
              </div>

              <span className="text-2xl font-extrabold text-white">
                Tech<span className="text-blue-500">Nova</span>
              </span>
            </a>

            <p className="text-sm text-gray-400 leading-7">
              Empowering businesses through innovative technology,
              modern web development, cloud solutions, and reliable
              IT consulting.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                f
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                GH
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  IT Consulting
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  DevOps & Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-sm">

              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">✉</span>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:info@technova.example"
                    className="hover:text-blue-400 transition-colors"
                  >
                    info@technova.example
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">☎</span>
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">⌖</span>
                <div>
                  <p className="text-gray-500 mb-1">Location</p>
                  <p>Bengaluru, India</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/15 to-indigo-600/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-bold text-white">
              Ready to transform your business?
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Let's discuss your next digital project.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Start a Project
            <span>→</span>
          </a>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500 text-center">
            &copy; 2026 TechNova Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Privacy
            </a>

            <a href="#home" className="hover:text-blue-400 transition-colors">
              Terms
            </a>

            <a href="#home" className="hover:text-blue-400 transition-colors">
              Sitemap
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
