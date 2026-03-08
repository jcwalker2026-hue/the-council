"use client";

export default function OracleGardenCard() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'linear-gradient(160deg, #010d07 0%, #011a0e 40%, #012a14 100%)' }}>
      {/* Misty ground layer */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(0,255,120,0.08) 0%, transparent 70%)'
      }} />

      {/* Temple columns */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-4 px-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* Capital */}
            <div className="w-7 h-1.5 rounded-sm mb-0" style={{
              background: `rgba(0,255,120,${0.12 + i * 0.04})`,
              boxShadow: `0 0 8px rgba(0,255,120,0.3)`
            }} />
            {/* Column shaft */}
            <div className="w-4" style={{
              height: `${50 + i * 8}px`,
              background: `linear-gradient(to right, rgba(0,200,80,0.05), rgba(0,255,120,${0.1 + i * 0.03}), rgba(0,200,80,0.05))`,
              boxShadow: `0 0 12px rgba(0,255,120,0.2)`,
            }} />
          </div>
        ))}
      </div>

      {/* Pediment / temple top */}
      <div className="absolute" style={{
        bottom: '78px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '160px',
        height: '20px',
        background: 'linear-gradient(to right, transparent, rgba(0,255,120,0.08), transparent)',
        borderTop: '1px solid rgba(0,255,120,0.2)',
        boxShadow: '0 0 15px rgba(0,255,120,0.15)',
      }} />

      {/* Bioluminescent orbs floating */}
      {[
        { x: '15%', y: '55%', size: 6, delay: '0s' },
        { x: '80%', y: '40%', size: 4, delay: '0.8s' },
        { x: '50%', y: '35%', size: 8, delay: '1.5s' },
        { x: '25%', y: '65%', size: 5, delay: '2.1s' },
        { x: '70%', y: '60%', size: 4, delay: '0.4s' },
        { x: '40%', y: '25%', size: 6, delay: '1.2s' },
        { x: '90%', y: '70%', size: 3, delay: '1.8s' },
        { x: '10%', y: '30%', size: 5, delay: '0.6s' },
      ].map((orb, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: orb.x,
          top: orb.y,
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, rgba(0,255,150,0.9), rgba(0,200,80,0.3))`,
          boxShadow: `0 0 ${orb.size * 3}px rgba(0,255,120,0.7), 0 0 ${orb.size * 6}px rgba(0,255,120,0.3)`,
          animation: `float-slow ${2.5 + i * 0.4}s ease-in-out infinite`,
          animationDelay: orb.delay,
        }} />
      ))}

      {/* Particle trails */}
      {[
        { x: '20%', y: '45%' },
        { x: '60%', y: '50%' },
        { x: '85%', y: '35%' },
      ].map((p, i) => (
        <div key={i} className="absolute" style={{
          left: p.x,
          top: p.y,
          width: '1px',
          height: '30px',
          background: 'linear-gradient(to bottom, rgba(0,255,120,0.5), transparent)',
          animation: `float-slow ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.7}s`,
        }} />
      ))}

      {/* Ground mist */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: '30px',
        background: 'linear-gradient(to top, rgba(0,255,100,0.06), transparent)',
      }} />

      {/* Glowing vines / organic lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ filter: 'drop-shadow(0 0 4px #00ff78)' }}>
        <path d="M 0 80 Q 30 60 20 40 Q 10 20 30 10" stroke="#00ff78" strokeWidth="0.8" fill="none" />
        <path d="M 150 90 Q 140 70 155 50 Q 165 30 150 15" stroke="#00ff78" strokeWidth="0.6" fill="none" />
      </svg>
    </div>
  );
}
