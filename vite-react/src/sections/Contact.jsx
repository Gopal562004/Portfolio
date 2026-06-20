import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Message Transmitted.');
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-32 px-5 md:px-10 bg-background overflow-hidden border-b-2 border-white/20">
      
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-10 text-[20rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none"
      >
        04
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter flex items-center gap-6 mb-16">
          <span className="w-16 h-2 bg-accent" />
          Terminal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col gap-10 font-mono">
            <div className="brutalist-card p-8 shadow-sharp bg-surface">
              <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-white/20 pb-2">Status</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                System is online and accepting new connections. Open to freelance, contract, and full-time roles.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border-b-2 border-dashed border-white/10 pb-2">
                  <span className="text-accent uppercase tracking-widest text-xs">Ping</span>
                  <span className="text-white text-sm">gopalgawas2004@gmail.com</span>
                </div>
                <div className="flex justify-between border-b-2 border-dashed border-white/10 pb-2">
                  <span className="text-accent uppercase tracking-widest text-xs">Loc</span>
                  <span className="text-white text-sm">Mumbai, India [GMT+5:30]</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 brutalist-card p-4 text-center border border-white/20">
                <p className="text-2xl font-bold text-white mb-1">24H</p>
                <p className="text-[10px] text-secondary uppercase tracking-widest">Response TTL</p>
              </div>
              <div className="flex-1 brutalist-card p-4 text-center border border-white/20">
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-[10px] text-secondary uppercase tracking-widest">Uptime</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white font-mono text-sm outline-none focus:border-accent transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-secondary font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none uppercase tracking-wider">
                  Identifier [Name]
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white font-mono text-sm outline-none focus:border-accent transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-secondary font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none uppercase tracking-wider">
                  Address [Email]
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white font-mono text-sm outline-none focus:border-accent transition-colors resize-none peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-secondary font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none uppercase tracking-wider">
                  Payload [Message]
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="brutalist-button w-full mt-4"
              >
                {loading ? 'Transmitting...' : 'Execute_Send()'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;