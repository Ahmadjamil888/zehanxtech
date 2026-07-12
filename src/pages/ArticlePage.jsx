import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu';

function ArticlePage() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === Number(id));
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  if (!article) return <Navigate to="/insights" replace />;

  const related = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  // Render markdown-style bold (**text**) and paragraphs
  const renderContent = (text) => {
    return text.split('\n\n').map((block, i) => {
      // numbered list items
      if (/^\d+\./.test(block.trim())) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 mb-6 text-zinc-300 text-[2vh] leading-[3.2vh]">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/^\d+\.\s/, '') }} />
            ))}
          </ol>
        );
      }
      // bullet list
      if (block.trim().startsWith('-')) {
        const items = block.split('\n').filter(l => l.trim().startsWith('-'));
        return (
          <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-zinc-300 text-[2vh] leading-[3.2vh]">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^-\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            ))}
          </ul>
        );
      }
      // heading (starts with **)
      if (block.trim().startsWith('**') && block.trim().endsWith('**')) {
        return (
          <h2 key={i} className="text-white font-[Sansita] text-[2.6vh] font-semibold mt-10 mb-4">
            {block.replace(/\*\*/g, '')}
          </h2>
        );
      }
      // regular paragraph
      return (
        <p key={i} className="text-zinc-300 text-[2vh] leading-[3.4vh] mb-6"
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-[SansitaReg]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
        <Link to="/insights" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-[Sansita] text-[1.9vh]">
          <LuArrowLeft size={18} /> All Articles
        </Link>
        <img src="/z-logo-light.png" alt="Zehanx" className="h-8 w-auto object-contain" />
      </nav>

      {/* Hero image */}
      <div className="w-full h-[40vh] sm:h-[55vh] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-8 py-14">
        {/* Tag + meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-cyan-400 font-[Sansita] text-[1.7vh] font-semibold uppercase tracking-widest">
            {article.tag}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-500 font-[Sansita] text-[1.7vh]">{article.date}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-500 font-[Sansita] text-[1.7vh]">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-[3.5vh] sm:text-[5vh] font-semibold leading-[5vh] sm:leading-[6.5vh] mb-8">
          {article.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-zinc-800">
          <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center flex-shrink-0">
            <span className="text-[#8b5cf6] font-[Sansita] font-bold text-[2vh]">
              {article.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-white font-[Sansita] font-semibold text-[2vh]">{article.author}</p>
            <p className="text-zinc-500 text-[1.7vh]">{article.authorRole}</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom">
          {renderContent(article.content)}
        </div>

        {/* Like + Share row */}
        <div className="flex items-center justify-between mt-14 pt-8 border-t border-zinc-800">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-[Sansita] text-[1.8vh] font-semibold transition-all duration-200 cursor-pointer
              ${liked
                ? 'bg-[#8b5cf6] text-white scale-105'
                : 'border border-zinc-700 text-zinc-400 hover:border-[#8b5cf6] hover:text-[#8b5cf6]'
              }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {liked ? 'Liked' : 'Like this article'} {likeCount > 0 && `· ${likeCount}`}
          </button>

          <Link
            to="/insights"
            className="flex items-center gap-2 text-zinc-400 hover:text-white font-[Sansita] text-[1.8vh] transition-colors"
          >
            More Articles <LuArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="border-t border-zinc-800 px-8 py-16 max-w-7xl mx-auto">
          <h2 className="text-[3vh] font-semibold mb-8">More from Zehanx</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map(rel => (
              <Link
                key={rel.id}
                to={`/insights/${rel.id}`}
                className="flex flex-col bg-[#0b0f19] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="h-[18vh] overflow-hidden">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-cyan-400 font-[Sansita] text-[1.5vh] font-semibold uppercase tracking-wider">{rel.tag}</span>
                  <h3 className="text-white text-[1.9vh] font-semibold leading-[2.8vh] mt-2 group-hover:text-cyan-400 transition-colors">{rel.title}</h3>
                  <p className="text-zinc-500 font-[Sansita] text-[1.5vh] mt-3">{rel.date} · {rel.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
