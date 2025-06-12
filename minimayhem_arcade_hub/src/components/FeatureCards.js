import React from "react";

const games = [
  {
    name: "Typing Challenge",
    description: "Test your typing speed with fast-paced word duels.",
    color: "#4CC9F0",
    accent: "#3A0CA3",
    icon: "⌨️",
    href: "#typing",
  },
  {
    name: "Reaction Speed",
    description: "How quick are your reflexes? Compete for the top spot!",
    color: "#F72585",
    accent: "#FFB703",
    icon: "⚡",
    href: "#reaction",
  },
  {
    name: "Sudoku Classic",
    description: "Sharpen your mind with classic sudoku puzzles.",
    color: "#3A0CA3",
    accent: "#FFC300",
    icon: "🔢",
    href: "#sudoku",
  },
  {
    name: "Memory Match",
    description: "Flip the cards and test your memory skills.",
    color: "#FFB703",
    accent: "#F72585",
    icon: "🧠",
    href: "#memory",
  },
];

// PUBLIC_INTERFACE
export default function FeatureCards() {
  return (
    <section
      id="games"
      style={{
        padding: "42px 0",
        background:
          "linear-gradient(90deg, #1a0520 0%, #0D0D0D 60%)",
        minHeight: 325,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 26,
          fontFamily: "'VT323', monospace",
          fontSize: 26,
          color: "#FFB703",
          letterSpacing: 2,
          textShadow: "0 0 9px #F72585",
        }}
      >
        🎮 Pick a Mini-Game
      </div>
      <div
        className="feature-cards-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 28,
        }}
      >
        {games.map((g, i) => (
          <a
            href={g.href}
            key={g.name}
            className="feature-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 240,
              minHeight: 185,
              background: "#15152a",
              borderRadius: 18,
              border: `3px solid ${g.color}`,
              boxShadow: `0 0 19px ${g.color}55, 0 2px 18px #000`,
              color: "#fff",
              textDecoration: "none",
              padding: "33px 22px 22px 22px",
              position: "relative",
              transition:
                "transform 0.16s, box-shadow 0.22s, border-color 0.2s",
              cursor: "pointer",
              overflow: "hidden",
              fontFamily: "'VT323', monospace",
            }}
            tabIndex={0}
            aria-label={`Play ${g.name}`}
            onMouseEnter={e =>
              (e.currentTarget.style.transform =
                "scale(1.044) rotate(-2deg)")
            }
            onMouseLeave={e =>
              (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
            }
            onFocus={e =>
              (e.currentTarget.style.transform =
                "scale(1.06) rotate(-2.5deg)")
            }
            onBlur={e =>
              (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
            }
          >
            <div
              style={{
                position: "absolute",
                top: 5,
                left: 8,
                fontSize: 18,
                opacity: 0.7,
                userSelect: "none",
                color: "#FFB703",
                textShadow: "0 0 2px #fff, 0 0 7px #4CC9F0",
              }}
            >{`${String(i + 1).padStart(2, "0")}`}</div>
            <div
              style={{
                fontSize: 49,
                marginBottom: "17px",
                filter: "drop-shadow(0 0 6px #4CC9F0bb)",
                textShadow: `0 0 13px ${g.color}`,
              }}
            >
              {g.icon}
            </div>
            <div
              style={{
                fontSize: 23,
                fontWeight: 700,
                letterSpacing: 2,
                color: g.color,
                textShadow: `0 0 9px ${g.color},0 0 2px #fff`,
                marginBottom: "8px",
              }}
            >
              {g.name}
            </div>
            <div
              style={{
                fontSize: 17,
                color: "#cdc8ee",
                minHeight: "45px",
                textAlign: "center",
                margin: "0 auto",
                marginBottom: 7,
                lineHeight: "1.22",
                textShadow: "0 0 2px #F7258541",
              }}
            >
              {g.description}
            </div>
            <span
              style={{
                marginTop: "auto",
                fontSize: 16,
                color: "#FFB703",
                letterSpacing: 1,
              }}
            >
              Start →
            </span>
          </a>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .feature-cards-grid {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
