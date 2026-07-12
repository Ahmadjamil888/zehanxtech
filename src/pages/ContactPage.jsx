import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LuArrowLeft, LuArrowUpRight, LuMail, LuPhone, LuInstagram, LuTwitter } from 'react-icons/lu';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }
    if (!emailRegex.test(form.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }
    // Simulate submission
    setStatus({ type: 'success', msg: "Message sent! We'll get back to you within 24 hours." });
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-[SansitaReg]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-[Sansita] text-[1.9vh]">
          <LuArrowLeft size={18} /> Back to Home
        </Link>
        <img src="/z-logo-light.png" alt="Zehanx" className="h-8 w-auto object-contain" />
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Header */}
        <p className="text-cyan-400 font-[Sansita] text-[2vh] uppercase tracking-widest mb-4">Get in Touch</p>
        <h1 className="text-[6vh] sm:text-[10vh] leading-none font-semibold mb-6">Contact Us</h1>
        <p className="text-zinc-400 text-[2.2vh] max-w-xl leading-[3.6vh] mb-16">
          Ready to build something? Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-[Sansita] text-[1.8vh] text-zinc-300 font-semibold">
                  Name <span className="text-[#8b5cf6]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-[#0b0f19] border border-zinc-800 text-white px-4 py-3 text-[1.9vh] focus:outline-none focus:border-cyan-400 rounded-lg transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-[Sansita] text-[1.8vh] text-zinc-300 font-semibold">
                  Email <span className="text-[#8b5cf6]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bg-[#0b0f19] border border-zinc-800 text-white px-4 py-3 text-[1.9vh] focus:outline-none focus:border-cyan-400 rounded-lg transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[Sansita] text-[1.8vh] text-zinc-300 font-semibold">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company or organization"
                className="bg-[#0b0f19] border border-zinc-800 text-white px-4 py-3 text-[1.9vh] focus:outline-none focus:border-cyan-400 rounded-lg transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[Sansita] text-[1.8vh] text-zinc-300 font-semibold">
                Message <span className="text-[#8b5cf6]">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your project..."
                className="bg-[#0b0f19] border border-zinc-800 text-white px-4 py-3 text-[1.9vh] focus:outline-none focus:border-cyan-400 rounded-lg transition-colors resize-none"
              />
            </div>

            {status && (
              <p className={`text-[1.8vh] font-[Sansita] font-semibold ${status.type === 'success' ? 'text-cyan-400' : 'text-red-400'}`}>
                {status.msg}
              </p>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#8b5cf6] text-white px-8 py-4 font-[Sansita] text-[2vh] font-semibold hover:bg-violet-700 transition-colors cursor-pointer rounded-lg"
            >
              Send Message <LuArrowUpRight size={20} />
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="border border-zinc-800 rounded-xl p-8 bg-[#0b0f19]">
              <h2 className="text-[2.8vh] font-semibold mb-6">Direct Contact</h2>
              <div className="flex flex-col gap-5">
                <a href="mailto:zehanxtech@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-[#8b5cf6]/20 flex items-center justify-center transition-colors">
                    <LuMail size={18} />
                  </div>
                  <div>
                    <p className="font-[Sansita] text-[1.6vh] text-zinc-500 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-[1.9vh] text-white">zehanxtech@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/923067060074" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-[#8b5cf6]/20 flex items-center justify-center transition-colors">
                    <LuPhone size={18} />
                  </div>
                  <div>
                    <p className="font-[Sansita] text-[1.6vh] text-zinc-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-[1.9vh] text-white">+92 306 7060074</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="border border-zinc-800 rounded-xl p-8 bg-[#0b0f19]">
              <h2 className="text-[2.8vh] font-semibold mb-6">Follow Zehanx</h2>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/zehanxtech_official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-[#8b5cf6]/20 flex items-center justify-center transition-colors">
                    <LuInstagram size={18} />
                  </div>
                  <span className="text-[1.9vh]">@zehanxtech_official</span>
                </a>
                <a href="https://x.com/zehanxtech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-[#8b5cf6]/20 flex items-center justify-center transition-colors">
                    <LuTwitter size={18} />
                  </div>
                  <span className="text-[1.9vh]">@zehanxtech</span>
                </a>
              </div>
            </div>

            <a
              href="https://cal.com/zehanx-technologies-official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 font-[Sansita] text-[2vh] font-semibold hover:bg-cyan-400 hover:text-black transition-all rounded-lg"
            >
              Book a Meeting <LuArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
