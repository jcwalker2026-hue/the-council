"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const OracleGardenCard = dynamic(() => import("@/components/OracleGardenCard"), { ssr: false });
const NeuralConstellationCard = dynamic(() => import("@/components/NeuralConstellationCard"), { ssr: false });
const LivingNewspaperCard = dynamic(() => import("@/components/LivingNewspaperCard"), { ssr: false });
const VoidMirrorCard = dynamic(() => import("@/components/VoidMirrorCard"), { ssr: false });
const CityAtNightCard = dynamic(() => import("@/components/CityAtNightCard"), { ssr: false });

const worlds = [
  {
    id: "oracle-garden",
    name: "Oracle Garden",
    tagline: "Where the ancient breathes",
    description: "Bioluminescent temples pulse with living light. The oracle speaks in riddles only the worthy may decode.",
    glowColor: "rgba(0,255,150,0.5)",
    borderColor: "rgba(0,255,120,0.3)",
    accentColor: "#00ff96",
    cardClass: "card-oracle",
    preview: OracleGardenCard,
  },
  {
    id: "neural-constellation",
    name: "Neural Constellation",
    tagline: "Mind mapped across infinity",
    description: "Deep space synapses connect thought to thought. Every star is a decision. Every void, a silence between knowing.",
    glowColor: "rgba(100,150,255,0.5)",
    borderColor: "rgba(120,160,255,0.3)",
    accentColor: "#8aabff",
    cardClass: "card-neural",
    preview: NeuralConstellationCard,
  },
  {
    id: "living-newspaper",
    name: "Living Newspaper",
    tagline: "Truth printed in real time",
    description: "Aged broadsheets rewrite themselves as the world shifts. The ink never dries. Headlines argue in the margins.",
    glowColor: "rgba(200,150,80,0.5)",
    borderColor: "rgba(200,150,60,0.3)",
    accentColor: "#c8960a",
    cardClass: "card-newspaper",
    preview: LivingNewspaperCard,
  },
  {
    id: "void-mirror",
    name: "The Void Mirror",
    tagline: "One face. Infinite truths.",
    description: "Pure obsidian silence. A single face reflects every question never asked. Luxury. Stillness. Power.",
    glowColor: "rgba(180,140,255,0.5)",
    borderColor: "rgba(160,120,255,0.3)",
    accentColor: "#b490ff",
    cardClass: "card-void",
    preview: VoidMirrorCard,
  },
  {
    id: "city-at-night",
    name: "City at Night",
    tagline: "Each tower is a mind",
    description: "Rain-soaked skyline seen from above. Every council member is a tower of light. The city thinks in amber and rain.",
    glowColor: "rgba(255,180,50,0.5)",
    borderColor: "rgba(255,160,40,0.3)",
    accentColor: "#ffb432",
    cardClass: "card-city",
    preview: CityAtNightCard,
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{ background: "#020810" }}
    >
      {/* Background star field */}
      <StarField />

      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(180,140,60,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 pb-16">
        {/* Header */}
        <header className="flex flex-col items-center pt-12 pb-8 md:pt-16 md:pb-10">
          {/* Decorative line top */}
          <div className="flex items-center gap-4 mb-6">
            <div
              style={{
                width: "80px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, rgba(184,134,11,0.6))",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#b8860b",
                boxShadow: "0 0 8px rgba(184,134,11,0.8)",
              }}
            />
            <div
              style={{
                width: "80px",
                height: "1px",
                background:
                  "linear-gradient(to left, transparent, rgba(184,134,11,0.6))",
              }}
            />
          </div>

          {/* Logo */}
          <h1
            className="gold-shimmer font-cinzel-decorative text-center leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            ATHENA'S COUNCIL
          </h1>

          {/* Subtitle */}
          <p
            className="font-cinzel text-center tracking-[0.4em] uppercase"
            style={{
              fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)",
              color: "rgba(184,134,11,0.6)",
              fontVariant: "small-caps",
              letterSpacing: "0.4em",
              marginTop: "0.25rem",
            }}
          >
            Choose Your World
          </p>

          {/* Divider ornament */}
          <div className="flex items-center gap-3 mt-6">
            <div
              style={{
                width: "120px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, rgba(184,134,11,0.4))",
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ opacity: 0.5 }}
            >
              <path
                d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z"
                fill="#b8860b"
              />
            </svg>
            <div
              style={{
                width: "120px",
                height: "1px",
                background:
                  "linear-gradient(to left, transparent, rgba(184,134,11,0.4))",
              }}
            />
          </div>
        </header>

        {/* World Grid */}
        <section className="w-full max-w-7xl">
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            }}
          >
            {worlds.map((world) => {
              const PreviewComponent = world.preview;
              return (
                <WorldCard key={world.id} world={world}>
                  <PreviewComponent />
                </WorldCard>
              );
            })}

            {/* Build Your World Card */}
            <BuildWorldCard />
          </div>
        </section>

        {/* Footer whisper */}
        <footer className="mt-16 text-center">
          <p
            className="font-cinzel tracking-widest"
            style={{
              fontSize: "0.6rem",
              color: "rgba(184,134,11,0.25)",
              letterSpacing: "0.3em",
            }}
          >
            THE COUNCIL AWAITS
          </p>
        </footer>
      </div>
    </main>
  );
}

function WorldCard({
  world,
  children,
}: {
  world: (typeof worlds)[0];
  children: React.ReactNode;
}) {
  return (
    <Link href={`/world/${world.id}`} className="group block">
      <div
        className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${world.cardClass}`}
        style={{
          border: `1px solid ${world.borderColor}`,
          background: "#020810",
          transform: "translateY(0)",
          transition:
            "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease, border-color 0.4s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(-6px) scale(1.01)";
          el.style.borderColor = world.accentColor + "66";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(0) scale(1)";
          el.style.borderColor = world.borderColor;
        }}
      >
        {/* Preview area */}
        <div className="relative w-full" style={{ height: "200px" }}>
          {children}

          {/* Hover scan line */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${world.glowColor.replace("0.5", "0.04")} 50%, transparent 100%)`,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Info panel */}
        <div
          className="p-4 relative"
          style={{
            background: `linear-gradient(to bottom, rgba(2,8,16,0.95), rgba(2,8,16,0.98))`,
            borderTop: `1px solid ${world.borderColor}`,
          }}
        >
          {/* World number */}
          <div
            className="font-cinzel text-xs mb-2"
            style={{
              color: world.accentColor,
              opacity: 0.5,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
            }}
          >
            WORLD {worlds.indexOf(world) + 1}
          </div>

          <h2
            className="font-cinzel font-bold mb-1"
            style={{
              color: world.accentColor,
              fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
              letterSpacing: "0.05em",
              textShadow: `0 0 20px ${world.glowColor}`,
            }}
          >
            {world.name}
          </h2>

          <p
            className="font-cinzel italic mb-2"
            style={{
              color: "rgba(232,213,163,0.45)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
            }}
          >
            {world.tagline}
          </p>

          <p
            style={{
              color: "rgba(232,213,163,0.35)",
              fontSize: "0.7rem",
              lineHeight: "1.5",
              fontFamily: "serif",
            }}
          >
            {world.description}
          </p>

          {/* Enter prompt */}
          <div
            className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100"
            style={{
              transition: "opacity 0.3s ease",
              color: world.accentColor,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              fontFamily: "'Cinzel', serif",
            }}
          >
            <span>ENTER</span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: `linear-gradient(to right, ${world.accentColor}60, transparent)`,
              }}
            />
            <span style={{ fontSize: "0.7rem" }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BuildWorldCard() {
  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer flex flex-col items-center justify-center"
      style={{
        border: "1px dashed rgba(184,134,11,0.3)",
        background: "transparent",
        minHeight: "340px",
        transition:
          "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(184,134,11,0.7)";
        el.style.transform = "translateY(-6px) scale(1.01)";
        el.style.boxShadow =
          "0 0 40px rgba(184,134,11,0.2), 0 0 80px rgba(184,134,11,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(184,134,11,0.3)";
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Corner accents */}
      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <div
          key={corner}
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            ...(corner.includes("t") ? { top: "8px" } : { bottom: "8px" }),
            ...(corner.includes("l") ? { left: "8px" } : { right: "8px" }),
            borderTop: corner.includes("t")
              ? "1px solid rgba(184,134,11,0.4)"
              : "none",
            borderBottom: corner.includes("b")
              ? "1px solid rgba(184,134,11,0.4)"
              : "none",
            borderLeft: corner.includes("l")
              ? "1px solid rgba(184,134,11,0.4)"
              : "none",
            borderRight: corner.includes("r")
              ? "1px solid rgba(184,134,11,0.4)"
              : "none",
            transition: "border-color 0.4s ease",
          }}
        />
      ))}

      <div className="flex flex-col items-center gap-4 p-8 text-center">
        {/* Plus icon */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "1px solid rgba(184,134,11,0.3)",
            transition: "all 0.4s ease",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              color: "rgba(184,134,11,0.5)",
              transition: "color 0.4s ease",
            }}
          >
            <line
              x1="12"
              y1="4"
              x2="12"
              y2="20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <h2
            className="font-cinzel font-bold mb-2"
            style={{
              color: "rgba(184,134,11,0.5)",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              transition: "color 0.4s ease",
            }}
          >
            Build Your World
          </h2>
          <p
            style={{
              color: "rgba(184,134,11,0.3)",
              fontSize: "0.7rem",
              lineHeight: "1.6",
              fontFamily: "serif",
              maxWidth: "200px",
            }}
          >
            Design a new realm for the council. Define its atmosphere, its
            rules, its voice.
          </p>
        </div>
      </div>
    </div>
  );
}

// Star field background component
function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: ((i * 127 + 41) % 100).toFixed(2),
    y: ((i * 73 + 19) % 100).toFixed(2),
    size: 0.5 + (i % 4) * 0.4,
    duration: 2 + (i % 5) * 0.8,
    delay: ((i * 0.37) % 3).toFixed(2),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: "rgba(220, 210, 180, 0.7)",
            boxShadow:
              star.size > 1.2 ? "0 0 3px rgba(220,210,180,0.5)" : "none",
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
