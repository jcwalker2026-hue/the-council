"use client";

export default function VoidMirrorCard() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 50% 30%, #0d0010 0%, #050008 50%, #000000 100%)'
    }}>
      {/* Deep obsidian sheen */}
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(105deg, transparent 0%, transparent 49%, rgba(120,80,200,0.02) 50%, transparent 51%)',
      }} />

      {/* Mirror reflection / light streak */}
      <div className="absolute" style={{
        top: 0, left: '35%',
        width: '30%', height: '100%',
        background: 'linear-gradient(to bottom, rgba(180,150,255,0.04), rgba(180,150,255,0.01), transparent)',
        transform: 'skewX(-5deg)',
      }} />

      {/* The Face — abstract, minimalist oval */}
      <div className="absolute" style={{
        top: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70px',
        height: '90px',
      }}>
        {/* Face outline */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50% 50% 48% 48%',
          border: '1px solid rgba(180,150,255,0.25)',
          boxShadow: '0 0 20px rgba(150,100,255,0.15), inset 0 0 20px rgba(100,50,200,0.08)',
          background: 'radial-gradient(ellipse at 45% 35%, rgba(60,20,100,0.3), rgba(10,0,20,0.8))',
        }} />

        {/* Eyes */}
        {[-1, 1].map((side, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '35%',
            left: `calc(50% + ${side * 14}px)`,
            transform: 'translateX(-50%)',
            width: '10px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(180,150,255,0.9)',
            boxShadow: `0 0 8px rgba(180,150,255,0.8), 0 0 20px rgba(150,100,255,0.5)`,
            animation: `pulse-glow 3s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}

        {/* Mouth — thin line */}
        <div style={{
          position: 'absolute',
          top: '62%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '22px',
          height: '1px',
          background: 'rgba(180,150,255,0.35)',
          boxShadow: '0 0 6px rgba(150,100,255,0.5)',
        }} />
      </div>

      {/* Luxury frame — thin gold-violet lines */}
      <div className="absolute" style={{
        top: '10%', left: '12%', right: '12%', bottom: '10%',
        border: '1px solid rgba(150,100,255,0.12)',
        borderRadius: '2px',
      }}>
        {/* Corner ornaments */}
        {['tl', 'tr', 'bl', 'br'].map((corner) => (
          <div key={corner} style={{
            position: 'absolute',
            width: '8px', height: '8px',
            ...(corner.includes('t') ? { top: -1 } : { bottom: -1 }),
            ...(corner.includes('l') ? { left: -1 } : { right: -1 }),
            borderTop: corner.includes('t') ? '1px solid rgba(180,150,255,0.5)' : 'none',
            borderBottom: corner.includes('b') ? '1px solid rgba(180,150,255,0.5)' : 'none',
            borderLeft: corner.includes('l') ? '1px solid rgba(180,150,255,0.5)' : 'none',
            borderRight: corner.includes('r') ? '1px solid rgba(180,150,255,0.5)' : 'none',
          }} />
        ))}
      </div>

      {/* Floating dust motes */}
      {[
        { x: '20%', y: '20%', size: 1 },
        { x: '75%', y: '35%', size: 1.5 },
        { x: '40%', y: '75%', size: 1 },
        { x: '85%', y: '60%', size: 1 },
        { x: '15%', y: '65%', size: 1.5 },
        { x: '60%', y: '85%', size: 1 },
      ].map((mote, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: mote.x, top: mote.y,
          width: mote.size,
          height: mote.size,
          borderRadius: '50%',
          background: 'rgba(200,180,255,0.6)',
          boxShadow: '0 0 4px rgba(180,150,255,0.8)',
          animation: `float-slow ${4 + i * 0.6}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }} />
      ))}

      {/* Bottom text — "SILENCE IS TRUTH" */}
      <div className="absolute bottom-4 left-0 right-0 text-center" style={{
        fontSize: '6px',
        letterSpacing: '0.3em',
        color: 'rgba(180,150,255,0.3)',
        fontFamily: "'Cinzel', serif",
        fontWeight: 600,
      }}>
        SILENCE IS TRUTH
      </div>
    </div>
  );
}
