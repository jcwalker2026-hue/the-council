"use client";

const nodes = [
  { cx: 30, cy: 20, r: 4, delay: '0s' },
  { cx: 75, cy: 15, r: 3, delay: '0.5s' },
  { cx: 120, cy: 35, r: 5, delay: '1.0s' },
  { cx: 55, cy: 55, r: 3, delay: '0.3s' },
  { cx: 100, cy: 65, r: 4, delay: '0.8s' },
  { cx: 20, cy: 80, r: 2, delay: '1.3s' },
  { cx: 140, cy: 80, r: 3, delay: '0.6s' },
  { cx: 70, cy: 90, r: 4, delay: '1.1s' },
  { cx: 45, cy: 110, r: 2, delay: '0.2s' },
  { cx: 115, cy: 105, r: 3, delay: '0.9s' },
  { cx: 85, cy: 130, r: 3, delay: '1.4s' },
  { cx: 30, cy: 140, r: 2, delay: '0.7s' },
  { cx: 135, cy: 145, r: 2, delay: '0.4s' },
  { cx: 60, cy: 155, r: 4, delay: '1.2s' },
  { cx: 110, cy: 165, r: 2, delay: '0.1s' },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 3], [2, 4],
  [3, 4], [3, 5], [4, 6], [4, 7], [5, 8],
  [7, 9], [7, 11], [8, 11], [9, 10], [10, 13],
  [11, 13], [12, 14], [13, 14], [6, 12],
];

export default function NeuralConstellationCard() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 40% 30%, #080820 0%, #020810 60%, #000005 100%)'
    }}>
      {/* Nebula glow */}
      <div className="absolute" style={{
        top: '10%', left: '20%',
        width: '120px', height: '80px',
        background: 'radial-gradient(ellipse, rgba(80,60,180,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
      }} />
      <div className="absolute" style={{
        bottom: '20%', right: '10%',
        width: '80px', height: '60px',
        background: 'radial-gradient(ellipse, rgba(60,100,200,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(15px)',
      }} />

      {/* SVG constellation */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 180" preserveAspectRatio="xMidYMid meet">
        {/* Edges / synapses */}
        {edges.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].cx} y1={nodes[from].cy}
            x2={nodes[to].cx} y2={nodes[to].cy}
            stroke={`rgba(${100 + i * 5}, ${130 + i * 4}, 255, 0.25)`}
            strokeWidth="0.5"
            style={{
              filter: 'drop-shadow(0 0 2px rgba(120,150,255,0.4))'
            }}
          />
        ))}

        {/* Nodes / stars */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Outer glow */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r * 3}
              fill={`rgba(100,150,255,0.05)`}
            />
            {/* Core */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r}
              fill={`rgba(${160 + i * 5},${180},255,0.9)`}
              style={{
                filter: `drop-shadow(0 0 ${node.r * 2}px rgba(120,160,255,0.8))`,
                animation: `pulse-glow ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: node.delay,
              }}
            />
            {/* Spike cross for larger nodes */}
            {node.r >= 4 && (
              <>
                <line x1={node.cx - node.r * 2} y1={node.cy} x2={node.cx + node.r * 2} y2={node.cy}
                  stroke="rgba(180,200,255,0.4)" strokeWidth="0.3" />
                <line x1={node.cx} y1={node.cy - node.r * 2} x2={node.cx} y2={node.cy + node.r * 2}
                  stroke="rgba(180,200,255,0.4)" strokeWidth="0.3" />
              </>
            )}
          </g>
        ))}

        {/* Distant tiny stars */}
        {Array.from({ length: 30 }, (_, i) => ({
          x: (i * 37 + 11) % 155,
          y: (i * 53 + 7) % 175,
          r: 0.4 + (i % 3) * 0.3,
        })).map((s, i) => (
          <circle key={`bg-${i}`}
            cx={s.x} cy={s.y} r={s.r}
            fill="rgba(200,210,255,0.5)"
          />
        ))}
      </svg>
    </div>
  );
}
