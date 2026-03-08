"use client";

import Link from "next/link";
import { use } from "react";

const worldMeta: Record<
  string,
  { name: string; tagline: string; accentColor: string; description: string }
> = {
  "oracle-garden": {
    name: "Oracle Garden",
    tagline: "Where the ancient breathes",
    accentColor: "#00ff96",
    description:
      "You have entered the Oracle Garden. Bioluminescent light pulses through ancient columns. The oracle stirs.",
  },
  "neural-constellation": {
    name: "Neural Constellation",
    tagline: "Mind mapped across infinity",
    accentColor: "#8aabff",
    description:
      "You have entered the Neural Constellation. Synaptic pathways open before you. Thought becomes constellation.",
  },
  "living-newspaper": {
    name: "Living Newspaper",
    tagline: "Truth printed in real time",
    accentColor: "#c8960a",
    description:
      "You have entered the Living Newspaper. Headlines rewrite themselves as you read. The ink is still wet.",
  },
  "void-mirror": {
    name: "The Void Mirror",
    tagline: "One face. Infinite truths.",
    accentColor: "#b490ff",
    description:
      "You have entered the Void Mirror. Silence surrounds you. A single reflection waits in the obsidian.",
  },
  "city-at-night": {
    name: "City at Night",
    tagline: "Each tower is a mind",
    accentColor: "#ffb432",
    description:
      "You have entered the City at Night. Rain falls on a thousand lit windows. The city thinks in amber.",
  },
};

export default function WorldPage({
  params,
}: {
  params: Promise<{ worldname: string }>;
}) {
  const { worldname } = use(params);
  const world = worldMeta[worldname];

  if (!world) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "#020810" }}
      >
        <p
          style={{
            color: "rgba(184,134,11,0.6)",
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.2em",
          }}
        >
          WORLD NOT FOUND
        </p>
        <Link
          href="/"
          className="mt-6"
          style={{
            color: "rgba(184,134,11,0.4)",
            fontFamily: "'Cinzel', serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
          }}
        >
          ← RETURN TO COUNCIL
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "#020810" }}
    >
      {/* Ambient glow matching world color */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${world.accentColor}0d 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 text-center max-w-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12"
          style={{
            color: "rgba(184,134,11,0.4)",
            fontFamily: "'Cinzel', serif",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(184,134,11,0.8)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(184,134,11,0.4)")
          }
        >
          ← ATHENA'S COUNCIL
        </Link>

        <div
          className="mb-3"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            color: `${world.accentColor}80`,
          }}
        >
          NOW ENTERING
        </div>

        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            color: world.accentColor,
            textShadow: `0 0 40px ${world.accentColor}60, 0 0 80px ${world.accentColor}20`,
            letterSpacing: "0.06em",
            lineHeight: 1.1,
            marginBottom: "0.5rem",
          }}
        >
          {world.name}
        </h1>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: `${world.accentColor}60`,
            fontStyle: "italic",
            marginBottom: "2rem",
          }}
        >
          {world.tagline}
        </p>

        <div
          style={{
            width: "60px",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${world.accentColor}60, transparent)`,
            margin: "0 auto 2rem",
          }}
        />

        <p
          style={{
            color: "rgba(232,213,163,0.5)",
            fontFamily: "serif",
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "3rem",
          }}
        >
          {world.description}
        </p>

        <div
          className="inline-flex items-center gap-3 px-8 py-3 rounded-sm"
          style={{
            border: `1px solid ${world.accentColor}40`,
            fontFamily: "'Cinzel', serif",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            color: `${world.accentColor}80`,
            cursor: "default",
          }}
        >
          WORLD LOADING...
        </div>
      </div>
    </div>
  );
}
