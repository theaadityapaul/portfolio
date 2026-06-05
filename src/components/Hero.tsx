import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

const ROLES = ["Fullstack Engineer", "3D Web Developer", "Cloud Architect", "Innovator"];
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: -1 });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      )
      .fromTo(".blur-in", 
        { opacity: 0, filter: "blur(10px)", y: 20 }, 
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.9"
      );
    }, textContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
          <div className="w-9 h-9 rounded-full accent-gradient p-[1px] group cursor-pointer hover:scale-110 transition-transform">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center text-text-primary font-display italic text-[13px]">
              AP
            </div>
          </div>
          <div className="hidden sm:block w-px h-5 bg-stroke mx-3" />
          <div className="flex items-center gap-1">
            {/* Smooth scroll anchors and Resume link */}
            <a href="#home" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-text-primary bg-stroke/50">Home</a>
            <a href="#work" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50">Work</a>
            <a href="/Aaditya_geu_may.pdf" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50">Resume</a>
          </div>
          <div className="w-px h-5 bg-stroke mx-3" />
          <a href="#contact" className="relative group text-xs sm:text-sm rounded-full">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
            <div className="relative bg-surface px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md flex items-center gap-2 text-text-primary">
              Say hi <span className="text-[10px]">↗</span>
            </div>
          </a>
        </div>
      </nav>

      <div ref={textContainerRef} className="relative z-10 flex flex-col items-center text-center px-4" id="home">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">SOFTWARE ENGINEER</p>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 text-balance">
          Aaditya Paul
        </h1>
        <div className="blur-in text-lg md:text-2xl text-text-primary mb-6 flex items-center gap-2">
          A <span key={roleIndex} className="font-display italic text-accent animate-role-fade-in inline-block">{ROLES[roleIndex]}</span> lives in Dehradun.
        </div>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12 text-balance">
          Engineering scalable web applications, real-time 3D environments, and intelligent backend systems.
        </p>
        <div className="blur-in flex items-center gap-4">
          <a href="#work" className="relative overflow-hidden group rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:text-text-primary transition-all hover:scale-105">
            <span className="absolute inset-0 bg-bg opacity-0 group-hover:opacity-100 transition-opacity z-0" />
            <span className="absolute inset-0 rounded-full border border-transparent group-hover:accent-gradient z-0" style={{ maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '1px' }} />
            <span className="relative z-10">See Works</span>
          </a>
          <a href="mailto:aadibpaul@gmail.com" className="relative group rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all hover:scale-105 overflow-hidden">
             <span className="absolute inset-0 rounded-full border border-transparent group-hover:accent-gradient opacity-0 group-hover:opacity-100 z-0 transition-opacity" style={{ padding: '2px', margin: '-2px', maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            <span className="relative z-10">Reach out <span className="ml-1">↗</span></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 flex flex-col items-center gap-4">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[50%] bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};