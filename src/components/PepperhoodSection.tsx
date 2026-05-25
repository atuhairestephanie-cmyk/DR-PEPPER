import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Send, Gamepad2, Gift, CheckCircle, ChevronRight, Play, RefreshCw, Star, Coins } from 'lucide-react';

export default function PepperhoodSection() {
  // College football state
  const [applicantName, setApplicantName] = useState('');
  const [applicantSchool, setApplicantSchool] = useState('');
  const [applicantStory, setApplicantStory] = useState('');
  const [applicantGpa, setApplicantGpa] = useState('3.8');
  const [submittedApplication, setSubmittedApplication] = useState(false);

  // Football Toss game state
  const [tossScore, setTossScore] = useState(0);
  const [tossesLeft, setTossesLeft] = useState(5);
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(70);
  const [gameState, setGameState] = useState<'idle' | 'aiming' | 'tossing' | 'won' | 'lost'>('idle');
  const [ballPath, setBallPath] = useState<{ x: number, y: number }[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Gaming State
  const [redeemCode, setRedeemCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successReward, setSuccessReward] = useState<{
    game: string;
    item: string;
    rarity: string;
    serial: string;
  } | null>(null);

  // Real bottle cap redemption simulation
  const handleRedeem = (e: React.FormEvent) => {
    e.preventDefault();
    const code = redeemCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'GAMING23') {
      setSuccessReward({
        game: 'Fortnite x Dr Pepper',
        item: 'Spicy Crimson Assault Armor Skin',
        rarity: 'Legendary 🌟',
        serial: 'DP-FTN-6772-990B'
      });
      setErrorMsg('');
    } else if (code === 'DRPEPPERXP') {
      setSuccessReward({
        game: 'Call of Duty: Black Ops',
        item: '2 Hours Dual Weapon & Rank Double XP',
        rarity: 'Epic 🔥',
        serial: 'DP-COD-4411-881X'
      });
      setErrorMsg('');
    } else if (code === 'COCONUTDROP') {
      setSuccessReward({
        game: 'Roblox Infinite Pepper',
        item: 'Toasted Creamy Coconut Jetpack Accessory',
        rarity: 'Mythical 🥥',
        serial: 'DP-RBX-9002-315A'
      });
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid bottle cap promotional code. Try entering "GAMING23", "DRPEPPERXP", or "COCONUTDROP" to test!');
      setSuccessReward(null);
    }
  };

  // Football Mini Game Logic
  const handleSimulateToss = () => {
    if (tossesLeft <= 0) {
      setGameState('lost');
      return;
    }

    setGameState('tossing');
    setIsSuccess(null);

    // Dynamic trajectory calculation based on angle (target ~50-60) and power (target ~75-85)
    // Successful toss bounds
    const isGoodAngle = angle >= 48 && angle <= 58;
    const isGoodPower = power >= 74 && power <= 84;
    const targetHit = isGoodAngle && isGoodPower;

    // Simulate animated trajectory path points for React display
    const points = [];
    const steps = 10;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      // parabolic arc
      const x = t * 100;
      const y = Math.sin(t * Math.PI) * (power / 2) * (angle / 45);
      points.push({ x, y });
    }
    setBallPath(points);

    setTimeout(() => {
      setTossesLeft((prev) => prev - 1);
      if (targetHit) {
        setTossScore((prev) => prev + 1);
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
      setGameState('aiming');
    }, 1200);
  };

  const handleResetGame = () => {
    setTossScore(0);
    setTossesLeft(5);
    setGameState('idle');
    setBallPath([]);
    setIsSuccess(null);
  };

  const handleApplyTuition = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantSchool || !applicantStory) return;
    setSubmittedApplication(true);
  };

  return (
    <section id="pepperhood-section" className="py-20 bg-[#F7F3E9] text-[#1F0206] px-4 md:px-8 border-b border-[#EBE6DC]">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Intro */}
        <div className="text-center">
          <span className="text-white bg-[#C8102E] font-mono tracking-widest text-xs uppercase font-bold px-3 py-1 rounded-full inline-block shadow">
            The Fan & Gaming Zone
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#711324] mt-3 tracking-tight font-heading">
            Join The Pepperhood
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Where absolute flavor fandom meets grand-scale community support. Win college funding or supercharge your game with high-tier digital rewards.
          </p>
        </div>

        {/* 1. College Football Tuition Program Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Half-time Football Toss Sub-Game element */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#5C0612] via-[#711324] to-[#45030D] text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Trophy size={200} />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#D1A153] font-mono text-xs font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
                    🏟️ Halftime Tuition Challenge
                  </span>
                  <span className="text-white/60 text-xs font-mono">
                    Can tosses remaining: <strong className="text-white font-bold">{tossesLeft}</strong>
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading">The Intercollegiate Halftime Toss</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Adjust your pitch gauge to accurately fling the collegiate football straight into the gargantuan upright Dr Pepper can! Rack up 3 completions to claim the digital title.
                </p>
              </div>

              {/* Game Window Graphic Simulation */}
              <div className="bg-[#120104] border border-white/10 rounded-2xl p-4 my-6 min-h-[180px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Stadium atmosphere */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-4 text-[10px] font-mono text-gray-500">
                  <span>🏟️ Pepperhood Bowl</span>
                  <span>Gridiron Target: Angle 50° / Power 80%</span>
                </div>

                {/* Stadium Goal Can in center/right */}
                <div className="flex justify-between items-end h-32 relative mt-4">
                  {/* Toss starting point (left) */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <span className="text-2xl z-10">🏈</span>
                    {gameState === 'tossing' && (
                      <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#D1A153]/30 opacity-75"></span>
                    )}
                  </div>

                  {/* Flight curve visualizer path overlay */}
                  {gameState === 'tossing' && ballPath.length > 0 && (
                    <div className="absolute inset-x-0 bottom-4 h-full pointer-events-none">
                      <svg className="w-full h-full stroke-orange-500" style={{ strokeWidth: 2, fill: 'none' }}>
                        <path d={`M 20 80 Q 120 -20, 240 70`} />
                      </svg>
                    </div>
                  )}

                  {/* Large Dr Pepper Can Goal on the right */}
                  <div className="relative flex flex-col items-center">
                    {/* Glowing landing zone */}
                    <div className="absolute -top-6 w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse flex items-center justify-center">
                      <div className="w-6 h-6 bg-emerald-500/40 rounded-full"></div>
                    </div>
                    {/* Can Target Cylinder */}
                    <div className="w-10 h-16 bg-gradient-to-b from-[#C8102E] to-[#711324] rounded-lg border border-gray-100 flex flex-col justify-center items-center font-bold text-[8px] text-white shadow-lg">
                      <span className="text-[7px]">GOAL</span>
                      <span className="tracking-tighter">DR P</span>
                    </div>
                  </div>
                </div>

                {/* Score Status Row */}
                <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">Score Board:</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{tossScore} / 3 Hits</span>
                  </div>
                  <div>
                    {isSuccess === true && <span className="text-emerald-400 font-bold text-xs">🎯 SPLASH! Sunk It!</span>}
                    {isSuccess === false && <span className="text-rose-400 text-xs">❌ Missed! Check calibration.</span>}
                  </div>
                </div>
              </div>

              {/* Game Control Panel */}
              {gameState === 'idle' ? (
                <button
                  onClick={() => setGameState('aiming')}
                  className="w-full py-2.5 bg-[#D1A153] hover:bg-[#b0843e] text-black font-extrabold text-sm rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow"
                >
                  <Play size={14} /> Start Play Throw
                </button>
              ) : tossesLeft <= 0 || tossScore >= 3 ? (
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <p className="text-sm font-bold">
                    {tossScore >= 3 ? '🎉 Master Pitcher Unlocked!' : '🏟️ Match Finished.'}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    {tossScore >= 3 
                      ? 'You successfully tossed 3 footballs into the Dr Pepper can. Elite!' 
                      : 'Great effort but you ran out of match balls.'}
                  </p>
                  <button
                    onClick={handleResetGame}
                    className="mt-3 text-xs text-[#D1A153] border border-[#D1A153]/30 px-3 py-1 rounded-full hover:bg-white/5 font-semibold"
                  >
                    Reset Challenge Grid
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Pitch sliders */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                        <span>Angle Pitch:</span>
                        <span className="font-bold text-[#D1A153]">{angle}°</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="70"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                        disabled={gameState === 'tossing'}
                        className="w-full accent-[#D1A153] bg-white/20 h-1.5 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                        <span>Velocity Force:</span>
                        <span className="font-bold text-[#D1A153]">{power}%</span>
                      </div>
                      <input
                        type="range"
                        min="60"
                        max="95"
                        value={power}
                        disabled={gameState === 'tossing'}
                        onChange={(e) => setPower(Number(e.target.value))}
                        className="w-full accent-[#D1A153] bg-white/20 h-1.5 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateToss}
                    disabled={gameState === 'tossing'}
                    className="w-full py-2.5 bg-gradient-to-r from-[#C8102E] to-red-600 hover:opacity-95 text-white font-extrabold text-sm rounded-xl transition duration-300 flex items-center justify-center gap-2 relative"
                  >
                    {gameState === 'tossing' ? (
                      <span className="flex items-center gap-1.5 animate-pulse">
                        <RefreshCw className="animate-spin" size={13} />
                        Flinging football...
                      </span>
                    ) : (
                      <span>Throw Football! 🏈</span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* College Tuition Details and applicant portal info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-4 border-[#711324] pl-4">
              <span className="text-[#711324] font-mono text-xs uppercase tracking-widest font-extrabold block">
                Educational Legacy
              </span>
              <h3 className="text-3xl font-extrabold text-[#711324] font-heading mt-1">
                College Football Tuition Program
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              Since 2008, the Dr Pepper Tuition Give-Away has changed lives, distributing over <strong className="text-[#C8102E] font-extrabold">$13 Million</strong> in scholarships to diligent college students who demonstrate extreme drive, personality, and love of flavor.
            </p>

            {/* Interactive Apply Showcase */}
            <div className="bg-white rounded-2xl p-6 border border-[#EBE6DC] shadow-sm">
              {!submittedApplication ? (
                <form onSubmit={handleApplyTuition} className="space-y-4">
                  <h4 className="font-bold text-[#711324] text-sm flex items-center gap-2">
                    <Star size={16} className="text-[#D1A153] fill-current" />
                    Simulated Scholarship Application
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-gray-500 font-bold mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Taylor Smith"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full p-2.5 text-xs text-slate-800 rounded-lg border border-gray-200 outline-none focus:border-[#711324]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-500 font-bold mb-1">Target School</label>
                      <input
                        type="text"
                        placeholder="e.g. Texas A&M"
                        required
                        value={applicantSchool}
                        onChange={(e) => setApplicantSchool(e.target.value)}
                        className="w-full p-2.5 text-xs text-slate-800 rounded-lg border border-gray-200 outline-none focus:border-[#711324]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-gray-500 font-bold mb-1">
                      What is your absolute dream career & how will $100k help?
                    </label>
                    <textarea
                      placeholder="My dream is to pioneer medical tech to help high school athletes..."
                      rows={2}
                      required
                      value={applicantStory}
                      onChange={(e) => setApplicantStory(e.target.value)}
                      className="w-full p-2.5 text-xs text-slate-800 rounded-lg border border-gray-200 outline-none focus:border-[#711324]"
                    />
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-1/2">
                      <label className="block text-[11px] text-gray-500 font-bold mb-1">Estimated GPA</label>
                      <select
                        value={applicantGpa}
                        onChange={(e) => setApplicantGpa(e.target.value)}
                        className="w-full p-2.5 text-xs text-slate-800 rounded-lg border border-gray-200 bg-white"
                      >
                        <option value="4.0">4.0 (Straight A's)</option>
                        <option value="3.8">3.7 - 3.9 (Highly Motivated)</option>
                        <option value="3.4">3.3 - 3.6 (Dedicated)</option>
                        <option value="3.0">Under 3.2 (Creative Mind)</option>
                      </select>
                    </div>
                    <div className="w-1/2 pt-5">
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#711324] hover:bg-[#8e1b30] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow cursor-pointer text-center"
                      >
                        Submit Application <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-center py-4"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#711324] text-base">Application Receipt Registered!</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Thank you, <strong className="text-gray-900">{applicantName}</strong>! Your dream to attend <strong className="text-gray-900">{applicantSchool}</strong> and pursue your goals has been queued for our upcoming mock cohort.
                    </p>
                  </div>
                  <div className="bg-[#FFFDF9] border border-gray-200 rounded-xl p-4 inline-block text-left w-full max-w-xs mx-auto font-mono text-[11px]">
                    <span className="text-gray-400 block border-b border-gray-100 pb-1 mb-2 uppercase tracking-widest text-[9px] font-bold">
                      ENTRY VOUCHER #7113-2026
                    </span>
                    <div className="space-y-1 text-gray-700">
                      <div><span className="text-gray-400">Applicant:</span> {applicantName}</div>
                      <div><span className="text-gray-400">GPA Standard:</span> {applicantGpa}</div>
                      <div><span className="text-gray-400">Status ID:</span> Pending Match Verify</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmittedApplication(false);
                      setApplicantName('');
                      setApplicantStory('');
                    }}
                    className="text-xs text-[#711324] font-bold hover:underline"
                  >
                    Apply with Another Story
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* 2. Gaming Partnerships & Rewards Codes Panel */}
        <div className="bg-gradient-to-r from-[#170205] to-[#2B0207] p-8 md:p-12 rounded-3xl text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[#D1A153]">
                <Gamepad2 size={24} className="animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Official Esports & Console Allies
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                Level-Up with Dr Pepper Gaming
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connect your accounts across major ecosystems! Collect standard bottle caps or 12-pack promotional codes to secure customized cosmetics, neon glow avatar skins, double experience drops, and more.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                  <Coins size={20} className="text-[#D1A153]" />
                  <div>
                    <span className="block font-bold text-xs">Double XP Drop</span>
                    <span className="text-[10px] text-gray-400">COD, Halo & more</span>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                  <Star size={20} className="text-emerald-400" />
                  <div>
                    <span className="block font-bold text-xs">Crimson Wrap</span>
                    <span className="text-[10px] text-gray-400">Limited Xbox Skin</span>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3 col-span-2 md:col-span-1">
                  <Gift size={20} className="text-rose-400" />
                  <div>
                    <span className="block font-bold text-xs">Pepper Loot Chest</span>
                    <span className="text-[10px] text-gray-400">Unlock unique colors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Redeem Code Panel */}
            <div className="lg:col-span-5 bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#D1A153] mb-2 flex items-center gap-1">
                <Gift size={14} /> Promote Code Redemption
              </h4>
              <p className="text-xs text-gray-400 mb-4 leading-normal">
                Check underneath your Dr Pepper bottle cap and enter your code below. Want to try it instantly? Enter <code className="text-[#D1A153] font-bold bg-white/10 px-1 py-0.5 rounded font-mono">GAMING23</code>, <code className="text-[#D1A153] font-bold bg-white/10 px-1 py-0.5 rounded font-mono">DRPEPPERXP</code>, or <code className="text-[#D1A153] font-bold bg-white/10 px-1 py-0.5 rounded font-mono">COCONUTDROP</code>.
              </p>

              <form onSubmit={handleRedeem} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ENTER BOTTLE CAP CODE"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    className="flex-1 p-3 text-xs bg-black text-white outline-none rounded-xl border border-white/10 focus:border-[#D1A153] text-center font-mono placeholder:text-gray-600 font-extrabold uppercase tracking-widest"
                  />
                  <button
                    type="submit"
                    className="bg-[#D1A153] hover:bg-[#b0843e] text-black font-extrabold text-xs px-5 rounded-xl transition duration-300"
                  >
                    Redeem
                  </button>
                </div>

                {errorMsg && <p className="text-rose-400 text-xs font-semibold leading-normal">{errorMsg}</p>}

                {/* Unlocked reward showcase */}
                <AnimatePresence>
                  {successReward && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono tracking-widest leading-none">
                          🎉 UNLOCKED DRPEPPER DROP!
                        </span>
                        <span className="text-[9px] bg-emerald-500 text-black font-extrabold px-1.5 py-0.5 rounded font-mono">
                          AUTHENTIC
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-white/50">{successReward.game}</span>
                        <span className="block font-bold text-sm text-white font-heading">{successReward.item}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-300 border-t border-white/5 pt-2 mt-2">
                        <span>Rarity: <strong className="text-[#D1A153]">{successReward.rarity}</strong></span>
                        <span>Redeem Serial: <strong className="text-white bg-black px-1.5 py-0.5 rounded">{successReward.serial}</strong></span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
