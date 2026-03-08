"use client";

import { useState, use, useRef, useEffect } from "react";
import Link from "next/link";

type AudienceMode = "Adult" | "Senior" | "Teen" | "Kid" | "Command";

const AUDIENCE_MODES: AudienceMode[] = ["Adult", "Senior", "Teen", "Kid", "Command"];

const AUDIENCE_INSTRUCTIONS: Record<AudienceMode, string> = {
  Adult:
    "Use full vocabulary and nuanced reasoning. Engage with complexity and intellectual depth. No simplification needed.",
  Senior:
    "Speak clearly and respectfully. Avoid jargon. Use warm, thorough, accessible language and larger conceptual strokes.",
  Teen:
    "Be direct, engaging, and real. Skip formality but keep substance. Use contemporary language. Mix short punchy sentences with genuine depth.",
  Kid:
    "Use simple, fun language. Short sentences. No jargon. Explain as if to a curious 10-year-old. Be vivid, encouraging, and concrete.",
  Command:
    "Ultra-brief. No pleasantries. Bullets where useful. Maximum information density. Skip all preamble. Actionable only.",
};

interface Seat {
  id: string;
  name: string;
  role: string;
  persona: string;
}

interface WorldConfig {
  name: string;
  tagline: string;
  accentColor: string;
  bg: string;
  seats: Seat[];
}

const WORLDS: Record<string, WorldConfig> = {
  "oracle-garden": {
    name: "Oracle Garden",
    tagline: "Where the ancient breathes",
    accentColor: "#00ff96",
    bg: "linear-gradient(160deg, #010d07 0%, #011a0e 70%, #020810 100%)",
    seats: [
      {
        id: "pythia",
        name: "The Pythia",
        role: "Seer of Ancient Truths",
        persona:
          "You are the Pythia — ancient oracle of the Garden. Speak with poetic precision, weaving natural imagery with profound insight. You see through the surface to the living truth beneath.",
      },
      {
        id: "botanist",
        name: "The Botanist",
        role: "Keeper of Living Knowledge",
        persona:
          "You are the Botanist of the Oracle Garden. You understand all living systems — ecological, social, conceptual. Speak with patience and deep systemic wisdom drawn from nature.",
      },
      {
        id: "dreamer",
        name: "The Dreamer",
        role: "Interpreter of Visions",
        persona:
          "You are the Dreamer, who reads patterns in the unseen. Speak poetically and invite lateral thinking. Find the unexpected angle, the hidden resonance in every question.",
      },
      {
        id: "rootwalker",
        name: "Root Walker",
        role: "Voice of Earth Memory",
        persona:
          "You are the Root Walker, vessel of ancient memory. Speak with weight and slowness. Draw on lessons of age, cycles, and the long view that only deep roots can hold.",
      },
      {
        id: "lightbearer",
        name: "Light Bearer",
        role: "Illuminator of Hidden Paths",
        persona:
          "You are the Light Bearer. You reveal what is obscured and illuminate paths forward. Speak with clarity, hope, and forward-looking vision that cuts through confusion.",
      },
    ],
  },
  "neural-constellation": {
    name: "Neural Constellation",
    tagline: "Mind mapped across infinity",
    accentColor: "#8aabff",
    bg: "linear-gradient(160deg, #010814 0%, #020d1e 70%, #020810 100%)",
    seats: [
      {
        id: "architect",
        name: "The Architect",
        role: "Mapper of Thought",
        persona:
          "You are the Architect of the Neural Constellation. You map the structure of ideas, build frameworks, and reveal how concepts interconnect. Speak with structural precision and systemic clarity.",
      },
      {
        id: "synapse",
        name: "The Synapse",
        role: "Bridge Between Minds",
        persona:
          "You are the Synapse — the bridge between seemingly unrelated ideas. You specialize in unexpected connections and cross-domain insights. Speak with associative leaps that surprise and illuminate.",
      },
      {
        id: "mathematician",
        name: "Void Mathematician",
        role: "Counter of Infinities",
        persona:
          "You are the Void Mathematician. You think in abstractions, probabilities, and elegant logical structures. Speak with precise reasoning and mathematical intuition.",
      },
      {
        id: "patternseeker",
        name: "Pattern Seeker",
        role: "Finder of Hidden Order",
        persona:
          "You are the Pattern Seeker. You find signal in noise and order in apparent chaos. Speak by revealing the underlying patterns and structures in whatever is examined.",
      },
      {
        id: "signal",
        name: "The Signal",
        role: "Pure Information",
        persona:
          "You are the Signal — stripped of all noise, pure essential information. Every word carries maximum weight. Speak with radical clarity and zero redundancy.",
      },
    ],
  },
  "living-newspaper": {
    name: "Living Newspaper",
    tagline: "Truth printed in real time",
    accentColor: "#c8960a",
    bg: "linear-gradient(160deg, #0d0a02 0%, #1a1202 70%, #020810 100%)",
    seats: [
      {
        id: "editor",
        name: "The Editor",
        role: "Keeper of Truth",
        persona:
          "You are the Editor of the Living Newspaper. You cut to truth with journalistic precision. Speak directly, verify claims, demand evidence. No fluff — only what is real and relevant.",
      },
      {
        id: "correspondent",
        name: "The Correspondent",
        role: "Voice from the Field",
        persona:
          "You are the Correspondent — reporting with firsthand urgency. Speak vividly, making the abstract feel immediate. You bring distant knowledge close, making it tangible.",
      },
      {
        id: "typesetter",
        name: "The Typesetter",
        role: "Crafter of Words",
        persona:
          "You are the Typesetter, who chooses every word deliberately. You care about how ideas are expressed — not just what, but how. Speak with craft and precision of language.",
      },
      {
        id: "archivist",
        name: "The Archivist",
        role: "Memory of Headlines",
        persona:
          "You are the Archivist of the Living Newspaper, keeper of historical context. You situate the present within the long story of the past. Speak with historical depth and long memory.",
      },
      {
        id: "columnist",
        name: "The Columnist",
        role: "Champion of Opinion",
        persona:
          "You are the Columnist — opinionated, incisive, willing to take clear positions. Speak with conviction. Offer distinct perspective and defend it with evidence and logic.",
      },
    ],
  },
  "void-mirror": {
    name: "The Void Mirror",
    tagline: "One face. Infinite truths.",
    accentColor: "#b490ff",
    bg: "linear-gradient(160deg, #08010d 0%, #110018 70%, #020810 100%)",
    seats: [
      {
        id: "reflection",
        name: "The Reflection",
        role: "Mirror of Self",
        persona:
          "You are the Reflection — the Void Mirror's primary voice. You surface insights about the one asking. Turn questions back as windows into the asker's own wisdom. Speak introspectively and gently.",
      },
      {
        id: "shadow",
        name: "The Shadow",
        role: "What You Hide",
        persona:
          "You are the Shadow — the voice of what is unspoken. You surface the difficult truths people avoid. Speak without judgment but with unflinching, compassionate honesty.",
      },
      {
        id: "echo",
        name: "The Echo",
        role: "Memory's Resonance",
        persona:
          "You are the Echo — you carry the resonance of what endures. Speak by finding what repeats across time, what the accumulated past teaches about the present question.",
      },
      {
        id: "witness",
        name: "The Witness",
        role: "Silent Observer",
        persona:
          "You are the Witness — present, observing, non-reactive. Speak with calm, detached clarity that sees without projecting. You are the still point from which all things can be seen clearly.",
      },
      {
        id: "threshold",
        name: "The Threshold",
        role: "Between Worlds",
        persona:
          "You are the Threshold — the liminal voice between what is and what could be. Speak about transitions, potential, and becoming. Help the questioner see the door they stand before.",
      },
    ],
  },
  "city-at-night": {
    name: "City at Night",
    tagline: "Each tower is a mind",
    accentColor: "#ffb432",
    bg: "linear-gradient(160deg, #0d0801 0%, #1a1002 70%, #020810 100%)",
    seats: [
      {
        id: "commissioner",
        name: "The Commissioner",
        role: "Voice of Order",
        persona:
          "You are the Commissioner of the City at Night — keeper of systems and civic order. Speak with institutional pragmatism. Focus on what works at scale, what is sustainable, what holds a city together.",
      },
      {
        id: "city-architect",
        name: "City Architect",
        role: "Builder of Systems",
        persona:
          "You are the City Architect — you design the structures within which life unfolds. Speak about systems thinking, design, and infrastructure. How does this scale? How does it hold under pressure?",
      },
      {
        id: "informant",
        name: "The Informant",
        role: "Keeper of Secrets",
        persona:
          "You are the Informant — you know what moves beneath the surface of the city. Speak about hidden dynamics, power, incentives, and what is really happening beneath the official story.",
      },
      {
        id: "nightwatcher",
        name: "Night Watcher",
        role: "Observer of Streets",
        persona:
          "You are the Night Watcher — you see the city from street level, the human scale that towers miss. Speak from lived experience, individual stories, and the texture of communities.",
      },
      {
        id: "mayor",
        name: "The Mayor",
        role: "Voice of the People",
        persona:
          "You are the Mayor of the City at Night — you speak for the collective. Balance competing interests. Communicate across all audiences. Find the common ground in the civic whole.",
      },
    ],
  },
};

type Message = { role: "user" | "assistant"; content: string };

export default function WorldPage({
  params,
}: {
  params: Promise<{ worldname: string }>;
}) {
  const { worldname } = use(params);
  const world = WORLDS[worldname];

  const [selectedSeat, setSelectedSeat] = useState(0);
  const [audienceMode, setAudienceMode] = useState<AudienceMode>("Adult");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Message[]>([]);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const historyRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (responseRef.current && response) {
      responseRef.current.scrollTop = 0;
    }
  }, [response]);

  if (!world) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6"
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

  const accent = world.accentColor;
  const seat = world.seats[selectedSeat];

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { role: "user", content: text };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setInput("");
    setIsLoading(true);
    setError(null);
    setResponse("");

    const systemPrompt = [
      `You are ${seat.name} — ${seat.role} — within the ${world.name}, one of the five worlds of Athena's Council.`,
      "",
      seat.persona,
      "",
      `AUDIENCE MODE — ${audienceMode.toUpperCase()}:`,
      AUDIENCE_INSTRUCTIONS[audienceMode],
      "",
      `Embody your role fully. Stay within the atmosphere of the ${world.name}.`,
    ].join("\n");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ systemPrompt, messages: newHistory }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: Message = { role: "assistant", content: data.content };
      setHistory((prev) => [...prev, assistantMsg]);
      setResponse(data.content);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Transmission failed");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: world.bg,
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, transparent 55%)`,
        }}
      />

      {/* ── HEADER ── */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.5rem",
          borderBottom: `1px solid ${accent}20`,
          flexShrink: 0,
        }}
      >
        <Link
          href="/"
          style={{
            color: `${accent}55`,
            fontFamily: "'Cinzel', serif",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textDecoration: "none",
            transition: "color 0.2s",
            minWidth: "120px",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = `${accent}cc`)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = `${accent}55`)
          }
        >
          ← ATHENA&apos;S COUNCIL
        </Link>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(0.85rem, 2.5vw, 1.3rem)",
              color: accent,
              textShadow: `0 0 25px ${accent}50`,
              letterSpacing: "0.08em",
              margin: 0,
            }}
          >
            {world.name}
          </h1>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.5rem",
              color: `${accent}45`,
              letterSpacing: "0.3em",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {world.tagline}
          </p>
        </div>

        <div style={{ minWidth: "120px" }} />
      </header>

      {/* ── GRAND COUNCIL SEAT SELECTOR ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0.6rem 1rem",
          borderBottom: `1px solid ${accent}15`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.45rem",
            letterSpacing: "0.45em",
            color: `${accent}35`,
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          GRAND COUNCIL — SELECT YOUR SEAT
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {world.seats.map((s, i) => {
            const active = selectedSeat === i;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSeat(i)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  padding: "0.35rem 0.8rem",
                  border: `1px solid ${active ? accent : accent + "28"}`,
                  background: active ? `${accent}14` : "transparent",
                  color: active ? accent : `${accent}45`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "2px",
                  lineHeight: 1.3,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = `${accent}55`;
                    el.style.color = `${accent}75`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = `${accent}28`;
                    el.style.color = `${accent}45`;
                  }
                }}
              >
                <div>{s.name}</div>
                <div
                  style={{
                    fontSize: "0.42rem",
                    letterSpacing: "0.18em",
                    opacity: 0.65,
                    marginTop: "1px",
                  }}
                >
                  {s.role}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── AUDIENCE MODE ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.35rem",
          padding: "0.45rem 1rem",
          borderBottom: `1px solid ${accent}12`,
          flexShrink: 0,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.48rem",
            letterSpacing: "0.35em",
            color: `${accent}38`,
            marginRight: "0.5rem",
          }}
        >
          SPEAK TO:
        </span>
        {AUDIENCE_MODES.map((mode) => {
          const active = audienceMode === mode;
          return (
            <button
              key={mode}
              onClick={() => setAudienceMode(mode)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.52rem",
                letterSpacing: "0.15em",
                padding: "0.22rem 0.7rem",
                border: `1px solid ${active ? accent : accent + "22"}`,
                background: active ? `${accent}16` : "transparent",
                color: active ? accent : `${accent}40`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderRadius: "1px",
              }}
            >
              {mode.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* ── MAIN CHAT AREA ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        {/* LEFT: Input Panel */}
        <div
          style={{
            flex: "0 0 42%",
            display: "flex",
            flexDirection: "column",
            borderRight: `1px solid ${accent}15`,
            padding: "1.25rem",
            gap: "0.75rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.48rem",
              letterSpacing: "0.4em",
              color: `${accent}38`,
              flexShrink: 0,
            }}
          >
            YOUR QUERY
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Address ${seat.name}…`}
            style={{
              flex: 1,
              background: `${accent}07`,
              border: `1px solid ${accent}22`,
              color: "rgba(232,213,163,0.85)",
              fontFamily: "Georgia, serif",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              padding: "0.875rem",
              resize: "none",
              outline: "none",
              borderRadius: "2px",
              transition: "border-color 0.2s ease",
              minHeight: 0,
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = `${accent}55`)
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = `${accent}22`)
            }
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexShrink: 0,
            }}
          >
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                padding: "0.55rem 1.4rem",
                border: `1px solid ${
                  !input.trim() || isLoading ? accent + "20" : accent + "65"
                }`,
                background:
                  !input.trim() || isLoading ? "transparent" : `${accent}15`,
                color:
                  !input.trim() || isLoading ? `${accent}28` : accent,
                cursor: !input.trim() || isLoading ? "default" : "pointer",
                transition: "all 0.2s ease",
                borderRadius: "2px",
              }}
            >
              {isLoading ? "TRANSMITTING…" : "TRANSMIT"}
            </button>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.42rem",
                color: `${accent}22`,
                letterSpacing: "0.12em",
              }}
            >
              ⌘↵ to send
            </span>
          </div>

          {/* Prior transmissions */}
          {history.length > 0 && (
            <div
              ref={historyRef}
              style={{
                flex: "0 0 auto",
                maxHeight: "160px",
                overflowY: "auto",
                borderTop: `1px solid ${accent}12`,
                paddingTop: "0.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.42rem",
                  letterSpacing: "0.35em",
                  color: `${accent}28`,
                  marginBottom: "0.2rem",
                  flexShrink: 0,
                }}
              >
                PRIOR TRANSMISSIONS
              </div>
              {history.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.68rem",
                    lineHeight: "1.5",
                    color:
                      msg.role === "user"
                        ? "rgba(232,213,163,0.45)"
                        : `${accent}55`,
                    fontFamily:
                      msg.role === "user" ? "'Cinzel', serif" : "Georgia, serif",
                    paddingLeft: msg.role === "assistant" ? "0.6rem" : "0",
                    borderLeft:
                      msg.role === "assistant"
                        ? `2px solid ${accent}25`
                        : "none",
                  }}
                >
                  {msg.content.length > 110
                    ? msg.content.slice(0, 110) + "…"
                    : msg.content}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Output Panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1.25rem",
            overflow: "hidden",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.48rem",
                letterSpacing: "0.4em",
                color: `${accent}38`,
              }}
            >
              {seat.name.toUpperCase()} SPEAKS
            </div>
            {response && (
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.42rem",
                  letterSpacing: "0.2em",
                  color: `${accent}28`,
                }}
              >
                {audienceMode.toUpperCase()} MODE
              </div>
            )}
          </div>

          {/* Response display */}
          <div
            ref={responseRef}
            style={{
              flex: 1,
              overflowY: "auto",
              border: `1px solid ${
                response || isLoading ? accent + "1a" : accent + "0d"
              }`,
              background:
                response || isLoading ? `${accent}05` : "transparent",
              borderRadius: "2px",
              padding: "1.25rem",
              transition: "all 0.3s ease",
            }}
          >
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "0.25rem",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: accent,
                      opacity: 0.55,
                      animation: "pulse-glow 1.2s ease-in-out infinite",
                      animationDelay: `${i * 0.22}s`,
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.52rem",
                    color: `${accent}45`,
                    letterSpacing: "0.22em",
                  }}
                >
                  THE COUNCIL DELIBERATES
                </span>
              </div>
            )}

            {error && !isLoading && (
              <p
                style={{
                  color: "rgba(255,90,90,0.75)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  margin: 0,
                }}
              >
                TRANSMISSION FAILED — {error}
              </p>
            )}

            {response && !isLoading && (
              <p
                style={{
                  color: "rgba(232,213,163,0.88)",
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
                  lineHeight: "1.9",
                  whiteSpace: "pre-wrap",
                  margin: 0,
                }}
              >
                {response}
              </p>
            )}

            {!response && !isLoading && !error && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  opacity: 0.35,
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: `1px solid ${accent}45`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: `${accent}70`,
                      animation: "pulse-glow 2.2s ease-in-out infinite",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.52rem",
                    color: `${accent}55`,
                    letterSpacing: "0.35em",
                    textAlign: "center",
                  }}
                >
                  AWAITING YOUR QUERY
                </div>
              </div>
            )}
          </div>

          {/* Active seat footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              paddingTop: "0.6rem",
              borderTop: `1px solid ${accent}10`,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: accent,
                boxShadow: `0 0 7px ${accent}`,
                animation: "pulse-glow 2.2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.48rem",
                color: `${accent}55`,
                letterSpacing: "0.18em",
              }}
            >
              {seat.name}
            </span>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.42rem",
                color: `${accent}30`,
                letterSpacing: "0.12em",
              }}
            >
              — {seat.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
