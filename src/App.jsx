import './App.css'
import { Routes, Route } from 'react-router-dom'

// Landing page sections
import Capsule from './components/Capsule/Index'
import Craft from './components/Craft/Index'
import { useEffect, useRef } from 'react';
import Home from './components/Home/Index'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Para from './components/Paragraph/Index'
import Para2 from './components/Paragraph2/Index'
import Real from './components/Real/Index'
import Team from './components/Team/Index'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer/Index';

// Separate pages
import TeamPage from './pages/TeamPage'
import InsightsPage from './pages/InsightsPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'

function LandingPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      return () => { scroll.destroy(); };
    }
  }, []);

  useEffect(() => {
    const list = document.querySelectorAll('.section')
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function() {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      })
    })
  });

  return (
    <div className='section main w-full'>
      <Home />
      <Craft />
      <Real />
      <Team />
      <Para />
      <Para2 />
      <Capsule />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:id" element={<ArticlePage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App
