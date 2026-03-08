"use client";

export default function LivingNewspaperCard() {
  const ticker = "BREAKING: COUNCIL CONVENES AT DAWN ◆ ORACLE SPEAKS IN RIDDLES ◆ WORLD 3 ELECTION RESULTS DISPUTED ◆ ATHENA GRANTS AUDIENCE ◆ MARKET OF IDEAS: TRUTH UP 4.2% ◆ ";

  return (
    <div className="relative w-full h-full overflow-hidden font-fell"
      style={{ background: 'linear-gradient(170deg, #f5e6c8 0%, #ede0b8 50%, #d4c49a 100%)' }}>

      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg, transparent, transparent 18px,
          rgba(100,80,40,0.08) 18px, rgba(100,80,40,0.08) 19px
        )`
      }} />

      {/* Age spots */}
      {[
        { top: '10%', left: '5%', w: 12, h: 8 },
        { top: '70%', right: '8%', w: 8, h: 6 },
        { top: '40%', left: '85%', w: 6, h: 10 },
        { top: '85%', left: '20%', w: 10, h: 6 },
      ].map((spot, i) => (
        <div key={i} className="absolute rounded-full opacity-20" style={{
          ...spot,
          width: spot.w,
          height: spot.h,
          background: 'rgba(80,50,10,0.6)',
          filter: 'blur(2px)',
        }} />
      ))}

      {/* Masthead */}
      <div className="absolute top-0 left-0 right-0 px-3 pt-2 border-b-2 border-stone-600" style={{ borderColor: 'rgba(80,50,20,0.5)' }}>
        <div className="text-center text-xs font-bold tracking-widest text-stone-700 opacity-60" style={{ fontSize: '6px', letterSpacing: '0.2em' }}>
          EST. MMXXIV ◆ THE COUNCIL HERALD ◆ VOL. MCMXLII
        </div>
        <div className="text-center font-bold text-stone-800" style={{
          fontSize: '18px',
          fontFamily: "'IM Fell English SC', serif",
          letterSpacing: '0.05em',
          textShadow: '1px 1px 0 rgba(100,70,20,0.3)',
        }}>
          THE ATHENA TIMES
        </div>
        <div className="text-center text-xs text-stone-600 pb-1" style={{ fontSize: '6px' }}>
          "ALL THE NEWS FIT TO DIVINE"
        </div>
      </div>

      {/* Column dividers and text blocks */}
      <div className="absolute left-0 right-0 px-2 flex gap-1" style={{ top: '54px', bottom: '22px' }}>
        {/* Col 1 */}
        <div className="flex-1 border-r border-stone-400 pr-1" style={{ borderColor: 'rgba(80,50,20,0.3)' }}>
          <div className="text-stone-800 font-bold mb-0.5" style={{ fontSize: '6.5px', lineHeight: 1.2 }}>
            ORACLE SPEAKS
          </div>
          {['Lorem ipsum veritas', 'est in consilium', 'deorum vocat nos', 'ad veritatis lux', 'aeternae gloriae', 'tempus adest nunc'].map((line, i) => (
            <div key={i} className="text-stone-700" style={{ fontSize: '5px', lineHeight: 1.4 }}>{line}</div>
          ))}
          <div className="my-1 border-t border-stone-400" style={{ borderColor: 'rgba(80,50,20,0.3)' }} />
          <div className="text-stone-800 font-bold mb-0.5" style={{ fontSize: '6px' }}>MARKETS</div>
          {['Truth: ▲ 4.2%', 'Wisdom: ▼ 1.1%', 'Courage: ▲ 2.8%'].map((line, i) => (
            <div key={i} className="text-stone-700" style={{ fontSize: '5px', lineHeight: 1.4 }}>{line}</div>
          ))}
        </div>

        {/* Col 2 - main headline */}
        <div className="flex-[1.5] border-r border-stone-400 px-1" style={{ borderColor: 'rgba(80,50,20,0.3)' }}>
          <div className="text-stone-900 font-bold text-center mb-1" style={{ fontSize: '9px', lineHeight: 1.1, fontFamily: "'IM Fell English SC', serif" }}>
            COUNCIL CONVENES;<br />WORLDS HANG IN BALANCE
          </div>
          {/* "Photo" placeholder */}
          <div className="w-full mb-1 flex items-center justify-center border border-stone-400" style={{ height: '35px', background: 'rgba(80,60,30,0.1)', fontSize: '5px', color: 'rgba(80,60,30,0.5)', borderColor: 'rgba(80,50,20,0.3)' }}>
            [ILLUSTRATION]
          </div>
          {['In the great hall of', 'eternal deliberation,', 'the five councilors', 'gathered as stars fell', 'upon the horizon vast', 'and time stood still.'].map((line, i) => (
            <div key={i} className="text-stone-700" style={{ fontSize: '5px', lineHeight: 1.4 }}>{line}</div>
          ))}
        </div>

        {/* Col 3 */}
        <div className="flex-1 pl-1">
          <div className="text-stone-800 font-bold mb-0.5" style={{ fontSize: '6px' }}>DISPATCHES</div>
          {['Word from the', 'eastern gates:', 'all is well in', 'the garden world.', 'Void remains', 'silent. Stars', 'aligned at dusk.'].map((line, i) => (
            <div key={i} className="text-stone-700" style={{ fontSize: '5px', lineHeight: 1.4 }}>{line}</div>
          ))}
          <div className="my-1 border-t border-stone-400" style={{ borderColor: 'rgba(80,50,20,0.3)' }} />
          <div className="text-stone-800 font-bold mb-0.5" style={{ fontSize: '6px' }}>CLASSIFIEDS</div>
          {['LOST: One owl.', 'FOUND: Wisdom.', 'FOR RENT: Void.'].map((line, i) => (
            <div key={i} className="text-stone-700" style={{ fontSize: '5px', lineHeight: 1.4 }}>{line}</div>
          ))}
        </div>
      </div>

      {/* Red ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{
        height: '20px',
        background: '#cc1111',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          color: 'white',
          fontSize: '7px',
          fontFamily: "'Cinzel', serif",
          fontWeight: 600,
          letterSpacing: '0.08em',
          animation: 'ticker-scroll 18s linear infinite',
        }}>
          {ticker}{ticker}
        </div>
      </div>
    </div>
  );
}
