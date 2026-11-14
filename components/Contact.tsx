
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@technova.example?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Let's Build Something{" "}
            <span className="text-blue-600">Great Together</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Have a project in mind? Tell us about it. We'd love to
            understand your requirements and explore how we can help.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Contact Information */}
          <div className="lg:col-span-2 bg-slate-950 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">

            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Reach out to us through any of the following channels.
                We're happy to discuss your next project.
              </p>

              <div className="mt-12 space-y-8">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl">
                    ✉️
                  </div>

                  <div>
                    <h4 className="font-semibold">Email Address</h4>
                    <p className="text-gray-400 text-sm mt-2">
                      info@technova.example
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl">
                    📞
                  </div>

                  <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-400 text-sm mt-2">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-gray-400 text-sm mt-2">
                      Bengaluru, India
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-14 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Let's connect and turn your ideas into reality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">

            <h3 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <p className="text-gray-500 mt-3 mb-8">
              Fill in the details below and tell us how we can help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your enquiry about?"
                  required
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-600/20 transition-all duration-300"
              >
                Send Message
                <span>→</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
