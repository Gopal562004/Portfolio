// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_3ar7plk", // your service ID
//         "template_gscn2iq", // your template ID
//         form.current,
//         "HocJqcr1_tVGpjDeQ" // replace this with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log("SUCCESS!", result.text);
//           setDone(true);
//           setLoading(false);
//           form.current.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           setLoading(false);
//         }
//       );
//   };
//   return (
//     <section id="contact" className="c-space my-20">
//       <p className="head-text">Contact Me</p>
//       <div className="relative min-h-screen flex items-center justify-center flex-col lg:flex-row text-white">
//         <div className=" min-h-screen flex items-center justify-center px-4">
//           <div className="bg-[#1A1A1A] p-8 rounded-xl max-w-lg w-full shadow-lg">
//             <h2 className="text-3xl font-bold text-white mb-4">Let's talk</h2>
//             <p className="text-gray-400 mb-6">
//               Whether you’re looking to build a new website, improve your
//               existing platform, or bring a unique project to life, I’m here to
//               help.
//             </p>

//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-300 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="user_name"
//                   placeholder="John Doe"
//                   required
//                   className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="user_email"
//                   placeholder="johndoe@gmail.com"
//                   required
//                   className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-300 mb-1">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Hi, I wanna give you a job..."
//                   required
//                   className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition disabled:opacity-60"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>

//               {done && (
//                 <p className="text-green-400 text-sm pt-2">
//                   Message sent successfully ✅
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//         <div className="hidden lg:block h-[600px] rounded-lg bg-black-200 border border-black-300">
//           <div className="flex items-center justify-center h-full p-4">
//             <img
//               src="/images/3d-rendering-envelope-3d-pastel-icon-set_159562-832-Photoroom.png"
//               alt="3D envelope"
//               draggable={false}
//               className="max-h-[500px] w-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Basic validation
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    const newErrors = {};
    if (!name.trim()) newErrors.user_name = "Name is required";
    if (!email.trim()) newErrors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.user_email = "Email is invalid";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_3ar7plk",
        "template_gscn2iq",
        form.current,
        "HocJqcr1_tVGpjDeQ"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setDone(true);
          setLoading(false);
          form.current.reset();

          // Reset success message after 5 seconds
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's build something
          amazing together.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Send a Message
            </h3>
            <p className="text-gray-400">
              Whether you're looking to build a new website, improve your
              existing platform, or bring a unique project to life, I'm here to
              help.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.user_name ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                onChange={() =>
                  errors.user_name &&
                  setErrors((prev) => ({ ...prev, user_name: "" }))
                }
              />
              {errors.user_name && (
                <p className="text-red-400 text-sm mt-1">{errors.user_name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="johndoe@example.com"
                required
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.user_email ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                onChange={() =>
                  errors.user_email &&
                  setErrors((prev) => ({ ...prev, user_email: "" }))
                }
              />
              {errors.user_email && (
                <p className="text-red-400 text-sm mt-1">{errors.user_email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Hi, I'd like to discuss a potential project..."
                required
                className={`w-full px-4 py-3 bg-gray-800/50 border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 transition-colors`}
                onChange={() =>
                  errors.message &&
                  setErrors((prev) => ({ ...prev, message: "" }))
                }
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending Message...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Success Message */}
            {done && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-center">
                  <span className="font-medium">
                    ✓ Message sent successfully!
                  </span>{" "}
                  I'll get back to you soon.
                </p>
              </div>
            )}
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4">Prefer other methods?</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <p className="text-gray-400 text-sm">
                    gopalgawas2004@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Location</p>
                  <p className="text-gray-400 text-sm">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-400">
              I typically respond within 24 hours. Looking forward to hearing
              from you!
            </p>
          </div>

          {/* Contact Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl font-bold text-white mb-1">24h</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Response Rate</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 w-full max-w-sm">
            <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">
                    Available for Opportunities
                  </p>
                  <p className="text-gray-500 text-xs">
                    Open to freelance, contract, and full-time roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
