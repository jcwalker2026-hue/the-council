"use client";

const towers = [
  { x: 5, width: 18, height: 85, windows: 6, color: 'rgba(255,180,50,0.7)' },
  { x: 26, width: 14, height: 65, windows: 4, color: 'rgba(255,160,40,0.6)' },
  { x: 43, width: 22, height: 110, windows: 8, color: 'rgba(255,200,60,0.8)' },
  { x: 68, width: 16, height: 75, windows: 5, color: 'rgba(255,150,30,0.6)' },
  { x: 87, width: 20, height: 95, windows: 7, color: 'rgba(255,180,50,0.7)' },
];

export default function CityAtNightCard() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{
      background: 'linear-gradient(180deg, #010610 0%, #020c1a 40%, #010812 100%)'
    }}>
      {/* Rain streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${(i * 13 + 3) % 100}%`,
            top: '-10%',
            width: '1px',
            height: `${15 + (i % 3) * 8}px`,
            background: 'linear-gradient(to bottom, transparent, rgba(150,200,255,0.6), transparent)',
            animation: `rain-fall ${0.6 + (i % 5) * 0.2}s linear infinite`,
            animationDelay: `${(i * 0.08) % 0.8}s`,
            transform: 'rotate(10deg)',
          }} />
        ))}
      </div>

      {/* City reflection glow on wet ground */}
      <div className="absolute bottom-0 left-0 right-0" style={{
        height: '30px',
        background: 'linear-gradient(to top, rgba(255,160,30,0.06), transparent)',
      }} />

      {/* Towers — each council member */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 160 180" preserveAspectRatio="xMidYMax meet">
        {towers.map((tower, ti) => {
          const baseY = 180;
          const topY = baseY - tower.height;
          return (
            <g key={ti}>
              {/* Tower body */}
              <rect
                x={tower.x} y={topY}
                width={tower.width} height={tower.height}
                fill={`rgba(5,10,25,0.95)`}
                stroke={tower.color}
                strokeWidth="0.5"
              />
              {/* Gradient overlay */}
              <rect
                x={tower.x} y={topY}
                width={tower.width} height={tower.height}
                fill="url(#towerGrad)"
                opacity="0.3"
              />
              {/* Windows */}
              {Array.from({ length: tower.windows }, (_, wi) => {
                const cols = 2;
                const rows = Math.ceil(tower.windows / cols);
                const col = wi % cols;
                const row = Math.floor(wi / cols);
                const wx = tower.x + 3 + col * (tower.width / 2 - 2);
                const wy = topY + 8 + row * 12;
                const lit = Math.random() > 0.3;
                return (
                  <rect
                    key={wi}
                    x={wx} y={wy}
                    width={4} height={6}
                    fill={lit ? tower.color : 'rgba(20,30,50,0.8)'}
                    opacity={lit ? 0.9 : 0.4}
                    style={lit ? { filter: `drop-shadow(0 0 2px ${tower.color})` } : {}}
                  />
                );
              })}
              {/* Antenna / spire for some towers */}
              {ti % 2 === 0 && (
                <>
                  <line
                    x1={tower.x + tower.width / 2} y1={topY}
                    x2={tower.x + tower.width / 2} y2={topY - 12}
                    stroke={tower.color} strokeWidth="0.8"
                    style={{ filter: `drop-shadow(0 0 3px ${tower.color})` }}
                  />
                  <circle
                    cx={tower.x + tower.width / 2} cy={topY - 13}
                    r="1.5"
                    fill={tower.color}
                    style={{ filter: `drop-shadow(0 0 4px ${tower.color})`, animation: 'pulse-glow 2s ease-in-out infinite' }}
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Gradient defs */}
        <defs>
          <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,180,50,0.15)" />
            <stop offset="50%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(255,180,50,0.08)" />
          </linearGradient>
        </defs>
      </svg>

      {/* God-view highlight — looking down */}
      <div className="absolute" style={{
        top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60px', height: '40px',
        background: 'radial-gradient(ellipse, rgba(255,200,80,0.06), transparent)',
        filter: 'blur(10px)',
      }} />

      {/* Moon */}
      <div className="absolute" style={{
        top: '8%', right: '10%',
        width: '14px', height: '14px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 35%, #ffe8a0, #c8a040)',
        boxShadow: '0 0 12px rgba(255,220,100,0.4), 0 0 30px rgba(255,200,50,0.15)',
      }} />
    </div>
  );
}
