import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu';

const TAGS = ['All', ...Array.from(new Set(ARTICLES.map(a => a.tag)))];

function InsightsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [likes, setLikes] = useState(
    ARTICLES.reduce((acc, a) => ({ ...acc, [a.id]: { liked: false, count: 0 } }), {})
  );

  const filtered = activeTag === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === activeTag);

  const handleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: {
        liked: !prev[id].liked,
        count: prev[id].liked ? prev[id].count - 1 : prev[id].count + 1,
      }
    }));
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

      {/* Header */}
      <div className="px-8 py-20 max-w-7xl mx-auto">
        <p className="text-cyan-400 font-[Sansita] text-[2vh] uppercase tracking-widest mb-4">Insights</p>
        <h1 className="text-[6vh] sm:text-[10vh] leading-none font-semibold mb-6">Explore Our Articles</h1>
        <p className="text-zinc-400 text-[2.2vh] max-w-2xl leading-[3.6vh]">
          Thought leadership on AI, enterprise software, government technology, and product strategy from the Zehanx team.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="px-8 pb-10 max-w-7xl mx-auto flex gap-3 flex-wrap">
        {TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full font-[Sansita] text-[1.7vh] font-semibold transition-all cursor-pointer
              ${activeTag === tag
                ? 'bg-[#8b5cf6] text-white'
                : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="px-8 pb-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(article => (
          <Link
            key={article.id}
            to={`/insights/${article.id}`}
            className="flex flex-col bg-[#0b0f19] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 group hover:-translate-y-1"
          >
            {/* Image */}
            <div className="w-full h-[24vh] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              <span className="text-cyan-400 font-[Sansita] text-[1.6vh] font-semibold uppercase tracking-wider">
                {article.tag}
              </span>
              <h3 className="text-white text-[2vh] font-semibold leading-[3vh] group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-zinc-400 text-[1.7vh] leading-[2.8vh] flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-800">
                <span className="text-zinc-500 font-[Sansita] text-[1.5vh]">
                  {article.date} · {article.readTime}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleLike(article.id, e)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[1.5vh] font-[Sansita] font-semibold transition-all duration-200 cursor-pointer
                      ${likes[article.id].liked
                        ? 'bg-[#8b5cf6] text-white'
                        : 'border border-zinc-700 text-zinc-400 hover:border-[#8b5cf6] hover:text-[#8b5cf6]'
                      }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={likes[article.id].liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {likes[article.id].count > 0 ? likes[article.id].count : ''}
                  </button>
                  <span className="text-cyan-400 group-hover:text-white transition-colors">
                    <LuArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InsightsPage;
