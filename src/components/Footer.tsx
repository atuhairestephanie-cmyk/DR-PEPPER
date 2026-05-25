import React from 'react';
import { Mail, ShieldCheck, Landmark, Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120104] text-white border-t border-[#45030D] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <div className="bg-[#FFFDF9] text-[#711324] w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow">
                P
              </div>
              <div>
                <span className="block text-md font-extrabold font-heading tracking-tight leading-none">
                  Dr Pepper
                </span>
                <span className="text-[10px] text-[#D1A153] font-mono tracking-widest block font-bold uppercase mt-0.5">
                  Fan Portal
                </span>
              </div>
            </button>
            <p className="text-xs text-stone-400 leading-relaxed">
              Serving the absolute fans of the 23 secret, fruit, wood, and spice essences since Charles Alderton first formulated original recipes in Waco, Texas in 1885.
            </p>
          </div>

          {/* Quick Hops Column */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D1A153] mb-4">
              Portal Segments
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-medium">
              <li>
                <a href="#products-section" className="hover:text-white transition-colors">
                  The 23 Flavors Hub
                </a>
              </li>
              <li>
                <a href="#pepperhood-section" className="hover:text-white transition-colors">
                  College Football Tuition
                </a>
              </li>
              <li>
                <a href="#pepperhood-section" className="hover:text-white transition-colors">
                  Gaming Partnerships & Rewards
                </a>
              </li>
              <li>
                <a href="#shop-section" className="hover:text-white transition-colors">
                  Apparel & Vintage Store
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimers Column */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D1A153] mb-4">
              Corporate Allies
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-medium">
              <li>
                <span className="block text-stone-400">Keurig Dr Pepper Inc.</span>
              </li>
              <li>
                <a href="https://www.keurigdrpepper.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <Globe size={11} />
                  Corporate Sustainability
                </a>
              </li>
              <li>
                <span className="block text-stone-400">Waco Museum Legacy</span>
              </li>
              <li>
                <span className="block text-stone-400">Dr Pepper Museum (Waco, TX)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Simulation help */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D1A153]">
               Join Our News Flow
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to unlock early access warnings to limited season drops, merchandise coupons, and double XP tokens.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Mock newsletter setup successful!"); }} className="flex gap-2">
              <input
                type="email"
                placeholder="fan@pepperhood.com"
                required
                className="bg-black/40 border border-white/10 text-xs text-white p-2.5 rounded-lg flex-1 outline-none focus:border-[#D1A153]"
              />
              <button
                type="submit"
                className="bg-[#D1A153] hover:bg-[#c09244] text-black text-xs font-bold px-3 rounded-lg transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Lower Legal row */}
        <div className="pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Dr Pepper Portal Hub. Developed digitally.</span>
            <span className="inline-flex items-center gap-1 text-emerald-500">
              <ShieldCheck size={12} />
              Sustainability Partner Verified
            </span>
          </div>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Simulated Sandbox Privacy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <button onClick={handleScrollToTop} className="hover:underline text-white">Back to Top ↑</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
