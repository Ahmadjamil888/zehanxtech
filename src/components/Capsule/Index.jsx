import Button from "../Button";
import {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Power4} from 'gsap/gsap-core';
import { LuArrowUpRight } from "react-icons/lu";
gsap.registerPlugin(ScrollTrigger);

const ALL_ARTICLES = [
  {
    id: 1,
    tag: "AI & Machine Learning",
    title: "AI Solutions: An Operations Discussion With Ahmad Ibrahim, Zehanx COO",
    image: cap1,
  },
  {
    id: 2,
    tag: "Enterprise Software",
    title: "How to Use Custom Enterprise Software to Align Employee & Organizational Goals",
    image: cap2,
  },
];

function Capsule() {
    const container = useRef(null);
    const [likes, setLikes] = useState([0, 0]);
    const [liked, setLiked] = useState([false, false]);

    const handleLike = (index, e) => {
        e.preventDefault();
        e.stopPropagation();
        setLiked(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
        setLikes(prev => {
            const updated = [...prev];
            updated[index] = liked[index] ? updated[index] - 1 : updated[index] + 1;
            return updated;
        });
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".capsules",
            start: "top 60%",
            end: "bottom bottom",
            scrub: .5,
            }
        });
        tl.to(".capsule:nth-child(2)", {
            y: 0,
            marginTop:32,
            ease: Power4
        })
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: Power4
        })
    }, container);


  return (
    <>
      <div data-color="white" ref={container} className="capsules section w-full sm:h-[115vh] 
          sm:overflow-hidden mb-20 sm:mb-32 mt-20 sm:mt-60 px-4 sm:px-8 gap-6 sm:gap-40"
      >
          <div className="left sm:w-1/3 h-full flex flex-col sm:justify-between py-10 items-start">
              <h1 className="w-2/3 font-[Sansita] text-[2.8vh] leading-[4vh] font-medium">
                  Stay up-to-date on the
                  latest innovations and thought
                  leadership from Zehanx.
              </h1>
              <div className="heading">
                  <h1 className="font-[SansitaReg] text-[5vh] leading-[6.5vh] sm:text-[8vh] py-5 sm:leading-[9vh]">Explore <br/> Our Insights</h1>
                  <Link
                    to="/insights"
                    className="flex items-center gap-2 bg-[#06b6d4] px-4 py-[1.6vh] font-[Sansita] text-[1.8vh] font-semibold text-black hover:bg-cyan-300 transition-colors w-fit"
                  >
                    VIEW ALL ARTICLES
                    <LuArrowUpRight size={20} />
                  </Link>
              </div>
          </div>
          <div className="right font-[SansitaReg] mt-10 sm:w-2/3 space-y-10 h-full sm:flex items-start justify-start sm:gap-20">
              {/* 1st capsule — clickable */}
              <Link
                to="/insights/1"
                className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-10
                rounded-full border-[1px] border-zinc-800 hover:border-zinc-600 transition-colors group"
              >
                  <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
                      <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src={cap1} alt="AI Solutions article" />
                  </div>
                  <div className="text text-center text-[6vw] sm:text-[3.2vh] font-semibold mt-10 leading-[4.8vh]">
                      <h3>AI Solutions: An <br/>
                          Operations Discussion <br/> With Ahmad Ibrahim, <br/> 
                          Zehanx COO
                      </h3>
                  </div>
                  <button 
                      onClick={(e) => handleLike(0, e)}
                      className={`flex items-center gap-2 px-5 rounded-full py-3 mb-10 mt-10 font-semibold transition-all duration-200 cursor-pointer
                          ${liked[0] 
                              ? 'bg-[#8b5cf6] text-white scale-105' 
                              : 'bg-transparent text-[#8b5cf6] border border-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white'
                          }`}
                  >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={liked[0] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      {liked[0] ? 'Liked' : 'Like'} {likes[0] > 0 && `· ${likes[0]}`}
                  </button>
              </Link>

              {/* 2nd capsule — clickable */}
              <Link
                to="/insights/2"
                className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-40
                rounded-full border-[1px] border-zinc-800 hover:border-zinc-600 transition-colors group"
              >
                  <button 
                      onClick={(e) => handleLike(1, e)}
                      className={`flex items-center gap-2 px-5 rounded-full py-3 mb-6 mt-10 font-semibold transition-all duration-200 cursor-pointer
                          ${liked[1] 
                              ? 'bg-[#8b5cf6] text-white scale-105' 
                              : 'bg-transparent text-[#8b5cf6] border border-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white'
                          }`}
                  >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={liked[1] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      {liked[1] ? 'Liked' : 'Like'} {likes[1] > 0 && `· ${likes[1]}`}
                  </button>
                  
                  <div className="text text-center text-[3.2vh] flex flex-col gap-6 mb-6 font-semibold leading-[4.8vh]">
                      <h3>How to Use Custom <br/>
                          Enterprise Software <br/>to Align Employee & <br/>Organizational Goals
                      </h3>
                      <h4 className="font-[Sansita] text-[1.9vh] font-medium leading-[2.8vh] text-zinc-400">How to use tailored enterprise tools to empower employees while achieving your organization&apos;s goals 
                      </h4>
                  </div>
                  <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
                      <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src={cap2} alt="Enterprise Software article" />
                  </div>
              </Link>
          </div>
      </div>
    </>
  )
}

export default Capsule
