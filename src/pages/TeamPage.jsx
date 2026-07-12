import { Link } from 'react-router-dom';
import { TEAM } from '../data/team';
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu';

function TeamPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-[SansitaReg]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-[Sansita] text-[1.9vh]">
          <LuArrowLeft size={18} /> Back to Home
        </Link>
        <img src="/z-logo-light.png" alt="Zehanx" className="h-8 w-auto object-contain" />
      </nav>

      {/* Header */}
      <div className="px-8 py-20 max-w-7xl mx-auto">
        <p className="text-cyan-400 font-[Sansita] text-[2vh] uppercase tracking-widest mb-4">Our People</p>
        <h1 className="text-[6vh] sm:text-[10vh] leading-none font-semibold mb-6">Meet the Entire Team</h1>
        <p className="text-zinc-400 text-[2.2vh] max-w-2xl leading-[3.6vh]">
          The people behind Zehanx — engineers, designers, and strategists who build the systems that power our clients&apos; most important work.
        </p>
      </div>

      {/* Team Grid */}
      <div className="px-8 pb-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((member) => (
          <div
            key={member.key}
            className="border border-zinc-800 rounded-xl p-8 bg-[#0b0f19] hover:border-zinc-600 transition-colors group"
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center mb-6">
              <span className="text-[#8b5cf6] font-[Sansita] font-bold text-[2.4vh]">
                {member.title.charAt(0)}
              </span>
            </div>
            <h2 className="text-[2.6vh] font-semibold text-white mb-1">{member.title}</h2>
            <p className="text-cyan-400 font-[Sansita] text-[1.8vh] font-semibold mb-4">{member.role}</p>
            <p className="text-zinc-400 text-[1.8vh] leading-[3vh]">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-zinc-800 px-8 py-16 text-center">
        <h2 className="text-[3.5vh] font-semibold mb-4">Want to work with us?</h2>
        <p className="text-zinc-400 text-[2vh] mb-8">We&apos;re always looking for exceptional engineers and designers.</p>
        <a
          href="https://cal.com/zehanx-technologies-official"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8b5cf6] text-white px-8 py-4 font-[Sansita] text-[2vh] font-semibold hover:bg-violet-700 transition-colors"
        >
          Book a Call <LuArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
}

export default TeamPage;
