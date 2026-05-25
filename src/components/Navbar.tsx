import React from 'react';
import { ShoppingBag, Award, HeartHandshake, Compass } from 'lucide-react';

export default function Navbar() {
  const handleScrollToSegment = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#711324] border-b border-[#5C0612]/30 text-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Cursive Style Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="bg-[#FFFDF9] text-[#711324] w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg shadow border border-amber-900/10 transform transition-transform group-hover:rotate-15">
            P
          </div>
          <div>
            <span className="block text-sm font-black font-heading leading-none tracking-tight">
              Dr Pepper
            </span>
            <span className="text-[10px] text-[#D1A153] font-mono tracking-widest font-extrabold uppercase leading-none block mt-0.5">
              Fan Portal
            </span>
          </div>
        </button>

        {/* Anchor jump links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider">
          <button
            onClick={() => handleScrollToSegment('products-section')}
            className="hover:text-[#D1A153] transition-colors cursor-pointer"
          >
            23 Flavors Hub
          </button>
          
          <button
            onClick={() => handleScrollToSegment('pepperhood-section')}
            className="hover:text-[#D1A153] transition-colors cursor-pointer"
          >
            Pepperhood & Gaming
          </button>

          <button
            onClick={() => handleScrollToSegment('shop-section')}
            className="hover:text-[#D1A153] transition-colors cursor-pointer"
          >
            Merch Store
          </button>

          <button
            onClick={() => handleScrollToSegment('heritage-section')}
            className="hover:text-[#D1A153] transition-colors cursor-pointer"
          >
            Our Heritage
          </button>
        </div>

        {/* Quick action badges */}
        <div className="flex items-center gap-3">
          {/* Quick info tag showing authentic EST date */}
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-white/60 bg-[#5C0612] border border-white/10 px-2.5 py-1 rounded-lg">
            <Compass size={11} className="text-[#D1A153]" />
            EST. 1885 Waco
          </span>
          
          <button
            onClick={() => handleScrollToSegment('shop-section')}
            className="bg-[#D1A153] hover:bg-[#c09244] text-[#120104] font-mono text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow cursor-pointer uppercase tracking-wider"
          >
            <ShoppingBag size={11} />
            <span>Store Bag</span>
          </button>
        </div>

      </div>
    </nav>
  );
}
