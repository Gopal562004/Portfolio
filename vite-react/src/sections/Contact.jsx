import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_3ar7plk", // your service ID
        "template_gscn2iq", // your template ID
        form.current,
        "HocJqcr1_tVGpjDeQ" // replace this with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setDone(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };
  return (
    <section id="contact" className="c-space my-20">
      <p className="head-text">Contact Me</p>
      <div className="relative min-h-screen flex items-center justify-center flex-col lg:flex-row text-white">
        <div className=" min-h-screen flex items-center justify-center px-4">
          <div className="bg-[#1A1A1A] p-8 rounded-xl max-w-lg w-full shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Let's talk</h2>
            <p className="text-gray-400 mb-6">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="johndoe@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Hi, I wanna give you a job..."
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {done && (
                <p className="text-green-400 text-sm pt-2">
                  Message sent successfully ✅
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="hidden lg:block h-[600px] rounded-lg bg-black-200 border border-black-300">
          <div className="flex items-center justify-center h-full p-4">
            <img
              src="/images/3d-rendering-envelope-3d-pastel-icon-set_159562-832-Photoroom.png"
              alt="3D envelope"
              draggable={false}
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact