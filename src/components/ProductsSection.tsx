import React, { useState } from 'react';
import { products, flavorList } from '../data';
import { Product, FlavorComponent } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, ChevronRight, Check, RefreshCw, Flame, Award, HeartHandshake } from 'lucide-react';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'classic' | 'diet-zero' | 'drops'>('all');
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);
  const [activeTab, setActiveTab] = useState<'info' | 'nutrition'>('info');

  // Custom mixer state
  const [selectedMixFlavors, setSelectedMixFlavors] = useState<FlavorComponent[]>([]);
  const [customDrinkName, setCustomDrinkName] = useState('');
  const [brewResult, setBrewResult] = useState<{
    name: string;
    profile: string;
    rating: number;
    description: string;
  } | null>(null);

  const filteredProducts = products.filter(p => selectedCategory === 'all' || p.category === selectedCategory);

  const handleToggleMixFlavor = (flavor: FlavorComponent) => {
    if (selectedMixFlavors.some(f => f.id === flavor.id)) {
      setSelectedMixFlavors(selectedMixFlavors.filter(f => f.id !== flavor.id));
    } else {
      if (selectedMixFlavors.length >= 5) {
        // Limit to 5
        return;
      }
      setSelectedMixFlavors([...selectedMixFlavors, flavor]);
    }
  };

  const handleBrewCustomDrink = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMixFlavors.length === 0) return;

    const baseName = customDrinkName.trim() || 'Pepper Craft';
    const totalIntensityStars = selectedMixFlavors.reduce((acc, f) => {
      const weight = f.intensity === 'High' ? 10 : f.intensity === 'Medium' ? 7 : 4;
      return acc + weight;
    }, 0);

    const matchScore = Math.min(100, Math.max(60, 70 + (selectedMixFlavors.length * 5) + (totalIntensityStars % 11)));

    // Generate dynamic fun description based on selected notes
    const activeEmojis = selectedMixFlavors.map(f => f.emoji).join(' ');
    const firstNote = selectedMixFlavors[0]?.name || 'Sweet';
    const lastNote = selectedMixFlavors[selectedMixFlavors.length - 1]?.name || 'Spark';

    const flavorDescriptions = [
      `A heavy blast of ${firstNote} hitting initially, backed by smooth ${lastNote} undertones.`,
      `Bold carbonated fusion emphasizing the richness of ${selectedMixFlavors.map(f => f.name).join(' & ')}.`,
      `A perfectly balanced formulation that dances elegantly on the tongue with sweet notes.`,
    ];
    const chosenDesc = flavorDescriptions[totalIntensityStars % flavorDescriptions.length];

    setBrewResult({
      name: `Dr Pepper: ${baseName}`,
      profile: `${activeEmojis} ${matchScore}% Flavor Harmony Score`,
      rating: +(4.5 + (totalIntensityStars % 6) / 10).toFixed(1),
      description: `${chosenDesc} This brew replicates the precision of the authentic 1885 Waco formulation with an adventurous modern spin.`
    });
  };

  const handleResetMixer = () => {
    setSelectedMixFlavors([]);
    setCustomDrinkName('');
    setBrewResult(null);
  };

  return (
    <section id="products-section" className="py-20 bg-[#FFFDF9] text-[#1F0206] px-4 md:px-8 border-b border-[#F7F3E9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C8102E] font-mono tracking-widest text-xs uppercase font-bold px-3 py-1 bg-[#FDF2F4] rounded-full inline-block">
            The 23 Flavors Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#711324] mt-3 tracking-tight font-heading">
            Sip the Extraordinary
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            From the beloved Texas legacy original to state-of-the-art seasonal drops, discover the complex recipes that keep millions Craving Pepper.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Range' },
            { id: 'classic', label: 'Dr Pepper Classic' },
            { id: 'diet-zero', label: 'Diet & Zero Sugar' },
            { id: 'drops', label: 'Drops & Innovations' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#711324] text-white shadow-md'
                  : 'bg-[#F7F3E9] text-gray-700 hover:bg-[#EFEAE2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Can Showcase Visualizer */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F0206] to-[#45030D] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[500px]">
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:16px_16px]"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <span className="text-[#D1A153] font-mono text-xs border border-[#D1A153]/30 px-2 py-1 rounded">
                  {activeProduct.bannerText}
                </span>
                <span className="bg-[#white]/10 hover:bg-white/20 p-2 rounded-full cursor-help relative group text-xs flex items-center gap-1">
                  <Flame size={14} className="text-[#FF7F50]" />
                  {activeProduct.calories} kcal
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-extrabold tracking-tight font-heading">{activeProduct.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{activeProduct.tagline}</p>
              </div>
            </div>

            {/* Custom crafted graphic simulation of a high-end Dr Pepper metallic can */}
            <div className="my-10 flex justify-center items-center relative py-4">
              <motion.div
                key={activeProduct.id}
                initial={{ rotate: -15, scale: 0.8, y: 30, opacity: 0 }}
                animate={{ rotate: -5, scale: 1.0, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`w-40 h-80 ${activeProduct.canColor} rounded-[2rem] shadow-[-10px_20px_40px_rgba(0,0,0,0.6)] border-t-[8px] border-b-[8px] border-gray-300 relative flex flex-col justify-between py-6 px-4 select-none`}
              >
                {/* Can metallic reflection shine */}
                <div className="absolute top-0 bottom-0 left-4 w-5 bg-white/20 blur-[2px] rounded-full pointer-events-none z-10"></div>
                <div className="absolute top-0 bottom-0 right-10 w-2 bg-white/5 blur-[1px] pointer-events-none z-10"></div>

                {/* Classic 10-2-4 Clock Indicator */}
                <div className="text-center opacity-60 font-mono text-[10px] tracking-widest text-[#E6B800] z-20">
                  10 • 2 • 4
                </div>

                {/* Oval Badge Graphic */}
                <div className="my-auto text-center z-20">
                  <div className="bg-[#FFFDF9] rounded-2xl py-3 px-1 border border-amber-800 shadow-md transform -rotate-12">
                    <span className="block text-[#711324] font-extrabold text-xl tracking-tight leading-none leading-tight font-heading">
                      Dr
                    </span>
                    <span className="block text-[#711324] font-extrabold text-2xl tracking-tighter leading-none font-heading -mt-1">
                      Pepper
                    </span>
                    <div className="bg-[#711324] text-[#FFFDF9] text-[8px] uppercase tracking-widest rounded px-1.5 py-0.5 mt-1 inline-block font-mono">
                      {activeProduct.category === 'diet-zero' ? 'Zero Sugar' : 'Classic Blend'}
                    </div>
                  </div>
                </div>

                <div className="text-center text-white/50 text-[10.5px] uppercase tracking-wide font-semibold z-20">
                  23 Secret Flavors
                </div>
              </motion.div>

              {/* Dynamic decorative backdrop bubbles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <span className="absolute bottom-10 left-12 w-3 h-3 bg-white/20 rounded-full animate-bounce"></span>
                <span className="absolute top-20 right-14 w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
                <span className="absolute bottom-24 right-10 w-4 h-4 bg-white/10 rounded-full"></span>
              </div>
            </div>

            {/* Bottom stats summary */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs border-t border-white/10 pt-4 relative z-10">
              <div>
                <span className="text-gray-400 block">Sugar</span>
                <span className="font-bold text-white text-sm">{activeProduct.sugar}</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-gray-400 block">Sodium</span>
                <span className="font-bold text-white text-sm">{activeProduct.nutrition.sodium}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Carbs</span>
                <span className="font-bold text-white text-sm">{activeProduct.nutrition.carbs}</span>
              </div>
            </div>
          </div>

          {/* Product and Secret Flavor details */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-8 border border-[#F7F3E9] shadow-sm">
            <div>
              {/* Internal tabs selector */}
              <div className="flex gap-4 border-b border-gray-100 pb-3 mb-6">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`pb-2 text-sm font-bold transition-all relative ${
                    activeTab === 'info' ? 'text-[#711324]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Flavor & Description
                  {activeTab === 'info' && (
                    <motion.div layoutId="productUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#711324]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`pb-2 text-sm font-bold transition-all relative ${
                    activeTab === 'nutrition' ? 'text-[#711324]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Full Nutritional Facts
                  {activeTab === 'nutrition' && (
                    <motion.div layoutId="productUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#711324]" />
                  )}
                </button>
              </div>

              {activeTab === 'info' ? (
                <div>
                  <h4 className="text-xl font-bold text-[#711324] mb-3">Craft Profile</h4>
                  <p className="text-gray-700 leading-relaxed text-sm mb-6">
                    {activeProduct.description}
                  </p>

                  <h4 className="text-sm font-mono uppercase tracking-wider text-gray-500 font-bold mb-3">
                    Highlighted Taste Layers
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProduct.flavorsHighlighted.map((flavor, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#F7F3E9] text-[#711324] text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-[#EBE6DC]"
                      >
                        <Sparkles size={11} className="text-[#D1A153]" />
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-[#FFFDF9] border border-gray-100 rounded-2xl p-6 text-sm mb-8">
                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <span className="text-lg font-bold font-heading text-[#711324]">Nutrition Facts</span>
                    <span className="text-gray-500 block text-xs">Serving size: 1 Can (12 fl oz / 355mL)</span>
                  </div>
                  <div className="space-y-2 font-medium">
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span>Calories</span>
                      <span className="font-extrabold text-base">{activeProduct.calories}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span>Total Fat</span>
                      <span>0g (0% DV)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span>Sodium</span>
                      <span>{activeProduct.nutrition.sodium} (2% DV)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span>Total Carbohydrate</span>
                      <span>{activeProduct.nutrition.carbs} (15% DV)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100 pl-4 text-gray-600">
                      <span>Total Sugars</span>
                      <span>{activeProduct.sugar}</span>
                    </div>
                    <div className="flex justify-between py-1 pr-1 font-extrabold text-gray-800">
                      <span>Protein</span>
                      <span>{activeProduct.nutrition.protein}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-4 leading-normal">
                    *Percent Daily Values (DV) are based on a 2,000 calorie diet. Not a significant source of saturated fat, trans fat, cholesterol, dietary fiber, vitamin D, calcium, iron, and potassium.
                  </p>
                </div>
              )}
            </div>

            {/* Quick selectors row */}
            <div>
              <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">
                Switch Products ({filteredProducts.length})
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {filteredProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveProduct(p);
                      // Reset to info tab to keep consistency
                      setActiveTab('info');
                    }}
                    className={`text-left p-3 rounded-2xl border transition-all ${
                      activeProduct.id === p.id
                        ? 'border-[#711324] bg-[#711324]/5 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#711324] truncate">{p.name}</span>
                    <span className="text-[10px] text-gray-500 block">{p.calories} Cals</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic & Interactive Section: The 23 secret flavors mixer */}
        <div className="bg-[#711324]/5 border border-[#711324]/10 rounded-3xl p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-white text-xs font-mono bg-[#711324] px-3 py-1 rounded-full inline-block uppercase tracking-wider font-bold shadow-md">
                Interactive Lab
              </span>
              <h3 className="text-3xl font-extrabold text-[#711324] mt-2 font-heading">
                The Secret 23 Flavors Custom Mixer
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-lg mx-auto">
                Historians agree there are 23 unique essences in Dr Pepper. Drag, tap, and pick your favorite components below, name your can, and brew an original batch!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Flavour Pick Grid */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                    Pick Up To 5 Flavors ({selectedMixFlavors.length}/5 Selected)
                  </span>
                  {selectedMixFlavors.length > 0 && (
                    <button
                      onClick={handleResetMixer}
                      className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <RefreshCw size={10} /> Clear
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[340px] pr-2 scrollbar-thin">
                  {flavorList.map((flavor) => {
                    const isSelected = selectedMixFlavors.some(f => f.id === flavor.id);
                    return (
                      <button
                        key={flavor.id}
                        onClick={() => handleToggleMixFlavor(flavor)}
                        disabled={!isSelected && selectedMixFlavors.length >= 5}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r ' + flavor.color + ' text-white border-transparent shadow shadow-inner scale-95'
                            : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-gray-300'
                        } ${!isSelected && selectedMixFlavors.length >= 5 ? 'opacity-40 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-lg">{flavor.emoji}</span>
                          {isSelected && <Check size={12} className="text-white" />}
                        </div>
                        <span className="block text-xs font-bold mt-1 truncate">{flavor.name}</span>
                        <span className={`text-[9px] block ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                          {flavor.intensity}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mixing results pane */}
              <div className="bg-white rounded-2xl p-6 border border-[#F7F3E9] shadow-sm h-full flex flex-col justify-between">
                <form onSubmit={handleBrewCustomDrink} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-bold mb-2">
                      Designate Drink Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Waco Cherry Blaze"
                      value={customDrinkName}
                      onChange={(e) => setCustomDrinkName(e.target.value)}
                      maxLength={25}
                      className="w-full text-sm p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#711324] bg-gray-50 text-gray-800"
                    />
                  </div>

                  {/* Summary of what they've chosen */}
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-bold mb-2">
                      Your Selected Recipe Matrix
                    </span>
                    {selectedMixFlavors.length === 0 ? (
                      <div className="h-20 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 text-xs text-gray-400 px-4 text-center">
                        Select a few flavors on the left to start cooking...
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5 p-3 bg-gray-50 rounded-xl min-h-[60px]">
                        {selectedMixFlavors.map((flavor) => (
                          <span
                            key={flavor.id}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                          >
                            <span>{flavor.emoji}</span>
                            <span>{flavor.name}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={selectedMixFlavors.length === 0}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md transition-all ${
                      selectedMixFlavors.length > 0
                        ? 'bg-[#711324] text-white hover:bg-[#8e1b30] cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <Sparkles size={16} />
                    Assemble Formulations
                  </button>
                </form>

                {/* Show result if brewed */}
                <AnimatePresence>
                  {brewResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="mt-6 p-4 bg-[#711324]/5 border border-[#711324]/10 rounded-xl space-y-2 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-[#711324] text-base font-heading truncate">
                          {brewResult.name}
                        </span>
                        <div className="flex items-center gap-1 font-mono text-[10px] bg-[#D1A153] text-black px-2 py-0.5 rounded font-extrabold">
                          <Award size={10} />
                          <span>RATED {brewResult.rating}/5</span>
                        </div>
                      </div>
                      <span className="block text-xs font-semibold text-gray-700 font-mono">
                        {brewResult.profile}
                      </span>
                      <p className="text-xs text-gray-600 leading-normal">
                        {brewResult.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
