import React, { useState, useEffect } from 'react';
import { Gamepad2, Award, ShoppingBag, ArrowDown, Flame, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [cansCracked, setCansCracked] = useState(2478905);
  const [fansOnline, setFansOnline] = useState(2311);

  // Tick up counters dynamically to simulate real-time live portal feel
  useEffect(() => {
    const cansInterval = setInterval(() => {
      setCansCracked(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 1200);

    const fansInterval = setInterval(() => {
      setFansOnline(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 4000);

    return () => {
      clearInterval(cansInterval);
      clearInterval(fansInterval);
    };
  }, []);

  const handleScrollToSegment = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#120104] via-[#5C0612] to-[#711324] text-white overflow-hidden py-24 md:py-32 border-b border-[#2A050A]">
      {/* Decorative backdrop graphics */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_#FFF_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Curved soft red orb glow */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-rose-600/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute right-10 -bottom-10 w-96 h-96 bg-[#D1A153]/15 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Vintage 10-2-4 Logo Alert Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9]/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider font-bold mb-8">
          <Clock size={13} className="text-[#D1A153] animate-pulse" />
          <span>The Vintage 10 • 2 • 4 Custom Hub</span>
        </div>

        {/* Title display */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight font-heading leading-none">
          CRAVE THE <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8EE] to-[#D1A153] select-none">
            UNEXPECTED
          </span>
        </h1>

        <p className="mt-6 text-[#FFF8EE]/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Welcome to the ultimate digital sanctuary for Dr Pepper lovers. Spin the Secret 23 Flavors Mixer, fling collegiate footballs for tuition grants, redeem gaming codes, and claim limited summer coconut gear.
        </p>

        {/* Dynamic portal live stats dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg w-full mt-10 p-4 bg-black/30 border border-white/10 rounded-2xl text-center">
          <div>
            <span className="text-[10px] text-gray-400 block font-mono font-bold uppercase tracking-wider">
               Fans in Pepperhood
            </span>
            <span className="text-lg font-black font-mono text-[#D1A153]">
              {fansOnline}
            </span>
            <span className="text-[9px] text-green-400 block font-mono">● LIVE</span>
          </div>
          <div className="border-x border-white/10">
            <span className="text-[10px] text-gray-400 block font-mono font-bold uppercase tracking-wider">
               Cans Cracked Today
            </span>
            <span className="text-lg font-black font-mono text-white">
              {cansCracked.toLocaleString()}
            </span>
            <span className="text-[9px] text-[#D1A153] block font-mono">COUNTING UP</span>
          </div>
          <div className="col-span-2 md:col-span-1 border-t md:border-t-0 pt-2 md:pt-0">
            <span className="text-[10px] text-gray-400 block font-mono font-bold uppercase tracking-wider">
               Tuition Disbursed
            </span>
            <span className="text-lg font-black font-mono text-emerald-400">
              $13,500,000
            </span>
            <span className="text-[9px] text-gray-400 block font-mono">EDUCATIONAL TRUST</span>
          </div>
        </div>

        {/* Navigation Quick Triggers */}
        <div className="flex flex-wrap justify-center mt-10 gap-3">
          <button
            onClick={() => handleScrollToSegment('products-section')}
            className="px-6 py-3.5 bg-[#FFFDF9] hover:bg-gray-100 text-[#711324] font-extrabold text-xs tracking-wider uppercase rounded-xl transition duration-300 shadow flex items-center gap-1.5 cursor-pointer"
          >
            <Flame size={14} className="text-[#C8102E]" />
             23 Flavors Mixer
          </button>
          
          <button
            onClick={() => handleScrollToSegment('pepperhood-section')}
            className="px-6 py-3.5 bg-[#D1A153] hover:bg-[#c09244] text-[#120104] font-extrabold text-xs tracking-wider uppercase rounded-xl transition duration-300 shadow flex items-center gap-1.5 cursor-pointer"
          >
            <Gamepad2 size={14} />
             Play Football Toss
          </button>

          <button
            onClick={() => handleScrollToSegment('shop-section')}
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition duration-300 shadow flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag size={14} className="text-rose-400" />
             Browse Store
          </button>
        </div>

        {/* Scroll cue indicator */}
        <button
          onClick={() => handleScrollToSegment('products-section')}
          className="mt-14 text-white/50 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Scroll to explore</span>
          <ArrowDown size={14} />
        </button>

      </div>
    </div>
  );
}
