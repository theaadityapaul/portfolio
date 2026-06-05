import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const SectionContact = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative bg-bg pt-24 md:pt-40 pb-8 overflow-hidden z-10">
      {/* Background Video (Flipped Vertically) */}
      <div className="absolute inset-0 z-0 scale-y-[-1]">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-black/80" /> {/* Heavier overlay for text readability */}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* GSAP Marquee */}
        <div className="w-full overflow-hidden flex whitespace-nowrap mb-16 md:mb-24 opacity-80 mix-blend-screen">
          <div ref={marqueeRef} className="flex gap-4 text-[10vw] font-display italic text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            {[...Array(10)].map((_, i) => (
              <span key={i}>ENGINEERING THE FUTURE • </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4 mb-32">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Open for opportunities</p>
          <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-10">Let's build together.</h2>
          <a href="mailto:aadibpaul@gmail.com" className="relative group inline-flex rounded-full text-base px-10 py-5 bg-text-primary text-bg hover:text-text-primary transition-all">
            <span className="absolute inset-0 bg-bg opacity-0 group-hover:opacity-100 transition-opacity z-0 rounded-full" />
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 animate-gradient-shift blur-sm transition-opacity duration-500" />
            <span className="absolute inset-0 rounded-full border border-transparent group-hover:accent-gradient z-0" style={{ maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '1px' }} />
            <span className="relative z-10 font-medium">aadibpaul@gmail.com</span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="https://linkedin.com/in/aadityapaul929" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/theaadityapaul" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
            <a href="tel:+919882385408" className="hover:text-text-primary transition-colors">+91 9882385408</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </section>
  );
};