import React, { useState } from 'react';
import { timelineEvents } from '../data';
import { TimelineEvent } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Award, Leaf, Zap, Droplets, Compass } from 'lucide-react';

export default function HeritageSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(timelineEvents[0]);
  const [weeklyCans, setWeeklyCans] = useState(12);

  // Sustainability mathematics calculations
  // Average aluminum can is ~14.9g. Recycling saves 95% of energy required to make virgin wood & bauxite aluminum.
  const aluminumDiverted = weeklyCans * 14.9 * 52; // grams per year
  const energySavedHours = (weeklyCans * 3 * 52).toFixed(0); // 1 recycled can saves energy to run 1 TV for 3 hours
  const waterConservedGal = (weeklyCans * 0.4 * 52).toFixed(1); // 0.4 gal water saved per recycled can
  const carbonSavedKg = (weeklyCans * 0.14 * 52).toFixed(1); // 0.14 kg carbon offsets per recycled can

  return (
    <section id="heritage-section" className="py-20 bg-[#FFFDF9] text-[#1F0206] px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Intro */}
        <div className="text-center">
          <span className="text-[#C8102E] font-mono tracking-widest text-xs uppercase font-bold px-3 py-1 bg-[#FDF2F4] rounded-full inline-block">
            Our Legacy & Earth
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#711324] mt-3 tracking-tight font-heading">
            Established Waco, TX 1885
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Before soda was a national custom, Dr Pepper was crafted to perfection. Discover our rich historical timelines and modern corporate sustainability milestones.
          </p>
        </div>

        {/* 1. History Timeline Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="border-l-4 border-[#711324] pl-4">
              <span className="text-[#711324] font-mono text-xs uppercase tracking-widest font-extrabold block">
                The History Path
              </span>
              <h3 className="text-3xl font-extrabold text-[#711324] font-heading mt-1">
                A Century of Pure Craft
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dr Pepper resides as the oldest major soft drink in the United States, invented by the visionary pharmacist Charles Alderton who blended 23 syrup formulas together because he loved the smell of fruit syrup jars at his Waco drug store.
            </p>
            <div className="bg-[#F7F3E9] p-4 rounded-xl text-xs text-amber-800 border border-[#EBE6DC] leading-relaxed">
              💡 <strong>Traditional lore:</strong> Wade Morrison, drug store owner, named it "Dr. Pepper" after the father of a girl he loved back in Virginia to win his favor!
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#F7F3E9] rounded-3xl p-6 md:p-8 border border-[#EBE6DC] shadow-sm">
            {/* Timeline eras selector */}
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-gray-200 pb-5 mb-6 relative">
              {timelineEvents.map((ev) => (
                <button
                  key={ev.year}
                  onClick={() => setSelectedEvent(ev)}
                  className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
                    selectedEvent.year === ev.year
                      ? 'bg-[#711324] text-white shadow-md'
                      : 'text-gray-500 hover:text-black bg-white/50 hover:bg-white'
                  }`}
                >
                  {ev.year}
                </button>
              ))}
            </div>

            {/* Display Era details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 min-h-[140px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#711324] text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                    {selectedEvent.year === '1885' ? '🧪' : selectedEvent.year === '1904' ? '🎪' : selectedEvent.year === '1920s' ? '⏰' : selectedEvent.year === '2008' ? '🏢' : '🌍'}
                  </div>
                  <div>
                    <span className="text-gray-400 font-mono text-[11px] uppercase tracking-widest block">Active Milestone</span>
                    <h4 className="font-extrabold text-[#711324] text-lg font-heading">{selectedEvent.title}</h4>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed pt-2">
                  {selectedEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* 2. Keurig Dr Pepper Sustainability Dashboard */}
        <div className="bg-[#711324]/5 border border-[#711324]/10 rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left side static corporate commitments */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  KDP Planet Action
                </span>
                <h3 className="text-3xl font-extrabold text-[#711324] mt-3 font-heading tracking-tight">
                  Sustainable Sips
                </h3>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  As part of the Keurig Dr Pepper corporate lineage, we dedicate massive structural funds to support a fully circular packaging economy. Recyclability, climate limits, and water custody form our triad commitment for 2025 and 2030.
                </p>
              </div>

              {/* Grid targets static indicators */}
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-0.5 flex items-center justify-center text-white text-[9px] font-bold">✓</div>
                  <div>
                    <span className="text-[#711324] font-bold text-xs block">100% Recyclable Packaging</span>
                    <span className="text-gray-500 text-[10px]">Target set for immediate closure by 2025 across all containers.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-0.5 flex items-center justify-center text-white text-[9px] font-bold">✓</div>
                  <div>
                    <span className="text-[#711324] font-bold text-xs block">20% Carbon Minimization</span>
                    <span className="text-gray-500 text-[10px]">Absolute absolute tracking along manufacturing, bottling and logistic routes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated calculator interactives */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#F7F3E9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-extrabold">
                     Interactive Carbon Offset Tracker
                  </span>
                  <span className="bg-[#711324]/5 text-[#711324] text-xs font-bold px-2.5 py-1 rounded-full">
                    Recycling Simulation
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  Every aluminum can recycled skips standard smelting energy drafts. Slide the trigger below to measure your household's annual environmental contribution just by returning empty Dr Pepper cans!
                </p>

                {/* Recycle Slider */}
                <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600 font-bold">Cans Recycled Weekly:</span>
                    <span className="text-base font-extrabold text-[#711324] font-mono bg-white px-3 py-1 rounded-lg border shadow-sm">
                      {weeklyCans} Cans / Week
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="3"
                    max="48"
                    value={weeklyCans}
                    onChange={(e) => setWeeklyCans(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 accent-emerald-600 rounded-lg appearance-none cursor-pointer"
                  />
                  
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>3 cans (Min)</span>
                    <span>12 packs (Mid)</span>
                    <span>48 cans (Power Fan)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic stats layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#FFFDF9] border rounded-xl p-4">
                
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Leaf size={14} />
                    <span className="text-[10px] font-mono uppercase text-gray-400">Pure Alum</span>
                  </div>
                  <span className="block font-black text-slate-800 text-sm font-mono">
                    {(aluminumDiverted / 1000).toFixed(2)} kg
                  </span>
                  <span className="text-[9px] text-gray-400 block leading-none">Diverted landfill</span>
                </div>

                <div className="space-y-1 border-l pl-3 border-gray-100">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Zap size={14} />
                    <span className="text-[10px] font-mono uppercase text-gray-400">Energy Saved</span>
                  </div>
                  <span className="block font-black text-slate-800 text-sm font-mono">
                    {energySavedHours} Hrs
                  </span>
                  <span className="text-[9px] text-gray-400 block leading-none">Standard LED Glow</span>
                </div>

                <div className="space-y-1 border-l pl-3 border-gray-100">
                  <div className="flex items-center gap-1 text-cyan-600">
                    <Droplets size={14} />
                    <span className="text-[10px] font-mono uppercase text-gray-400">H2O Conserved</span>
                  </div>
                  <span className="block font-black text-slate-800 text-sm font-mono">
                    {waterConservedGal} Gal
                  </span>
                  <span className="text-[9px] text-gray-400 block leading-none">Bottled freshwater</span>
                </div>

                <div className="space-y-1 border-l pl-3 border-gray-100 font-bold">
                  <div className="flex items-center gap-1 text-emerald-700">
                    <Compass size={14} />
                    <span className="text-[10px] font-mono uppercase text-gray-400">CO2 Saved</span>
                  </div>
                  <span className="block font-black text-[#711324] text-sm font-mono">
                    {carbonSavedKg} kg
                  </span>
                  <span className="text-[9px] text-gray-400 block leading-none">Atmosphere offset</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
