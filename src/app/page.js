'use client';

import Landing from "./components/landing";
import Jobs from './components/jobs';
import Companys from "./components/companys";
import Reviews from "./components/reviews";
import Featured from "./components/featured";
import Categorie from "./components/categorie";
import Footer from "./components/footer";
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
export default function Home() {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.pageYOffset]);
  return (
    <div id='top'>
      {showToTop && (
          <ScrollLink to="top" smooth={true} duration={500} className="scrollLink">
            <svg xmlns="http://www.w3.org/2000/svg" height="" viewBox="0 -960 960 960" width="" fill=""><path d="m480-555.69-184 184L267.69-400 480-612.31 692.31-400 664-371.69l-184-184Z"/></svg>
          </ScrollLink>
      )}
      <Landing/>
      <Jobs/>
      <Companys/>
      <Reviews/>
      <Categorie/>
      <Featured/>
      <Footer/>
    </div>
  );
}
