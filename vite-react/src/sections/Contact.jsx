import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CircuitSnake from '../components/CircuitSnake.jsx';

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
  const ringScale1 = useTransform(scrollYProgress, [0, 1], [0.5, 2.5]);
  const ringScale2 = useTransform(scrollYProgress, [0, 1], [0.8, 3.5]);
  const ringScale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-32 px-5 md:px-10 bg-background overflow-hidden border-b-2 border-white/20">
      
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-10 text-[20rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none z-0"
      >
        04
      </motion.div>

      {/* Radar Ping Background Story */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 flex items-center justify-center">
        <motion.div style={{ scale: ringScale1 }} className="absolute w-[400px] h-[400px] rounded-full border-[16px] border-accent opacity-[0.03]" />
        <motion.div style={{ scale: ringScale2 }} className="absolute w-[600px] h-[600px] rounded-full border-[4px] border-white opacity-[0.03]" />
        <motion.div style={{ scale: ringScale3 }} className="absolute w-[800px] h-[800px] rounded-full border-[2px] border-accent opacity-[0.03]" />
      </div>

      {/* Contact Circuit Snake */}
      <CircuitSnake 
        scrollYProgress={scrollYProgress} 
        path="M 50 0 L 50 20 L 80 20 L 80 60 L 50 60 L 50 100" 
        color="#e11d48" 
        width={3} 
      />

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