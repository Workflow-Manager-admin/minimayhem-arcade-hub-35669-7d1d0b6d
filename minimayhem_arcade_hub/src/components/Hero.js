import React from "react";

// PUBLIC_INTERFACE
export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 0 28px 0",
        textAlign: "center",
        background:
          "radial-gradient(ellipse 80% 70% at 60% 0%, #3a0ca3cb 28%, #141112 100%)",
        borderBottom: "2px solid #4CC9F0",
        minHeight: 330,
        marginBottom: 20,
        position: "relative"
      }}
    >
      {/* Animated Arcade Neon Title */}
      <h1
        style={{
          color: "#F72585",
          fontFamily: "'Press Start 2P', 'VT323', monospace",
          fontSize: "3rem",
          letterSpacing: "2px",
          textShadow: `0 0 13px #F72585, 0 0 30px #4cc9f099`,
          margin: "0 auto",
          maxWidth: 700,
          animation: "flicker 2.8s infinite alternate"
        }}
      >
        MINI <span style={{ color: "#4CC9F0" }}>MAYHEM</span> ARCADE
      </h1>

      <div
        style={{
          color: "#fff",
          fontFamily: "'VT323', monospace",
          fontSize: "1.24rem",
          marginTop: 16,
          marginBottom: 31,
          textShadow: "0 0 8px #4cc9f0b5",
        }}
      >
        Jump in and play the wildest mini-games on the web!
      </div>
      {/* Retro animated arcade machine (SVG or placeholder) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 220,
            height: 190,
            margin: "0 auto",
            background:
              "linear-gradient(135deg, #1c0522 60%, #3A0CA3 100%)",
            borderRadius: 17,
            border: "4px solid #F72585",
            boxShadow:
              "0 8px 36px #3A0CA3aa, 0 1px 8px #F72585, 0 0 40px #4CC9F0",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          {/* SVG arcade machine - placeholder style */}
          <svg
            viewBox="0 0 230 180"
            width="225"
            height="182"
            style={{ position: "absolute", top: 0, left: 0 }}
            aria-hidden="true"
          >
            <rect
              x="24"
              y="28"
              width="180"
              height="130"
              rx="28"
              fill="#1a1b2e"
              stroke="#4CC9F0"
              strokeWidth="7"
              filter="url(#f1)"
            />
            <rect
              x="50"
              y="50"
              width="127"
              height="65"
              rx="11"
              fill="#222"
              stroke="#F72585"
              strokeWidth="4"
            />
            <circle
              cx="140"
              cy="120"
              r="9"
              fill="#F72585"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="170"
              cy="120"
              r="7"
              fill="#FFB703"
              stroke="#fff"
              strokeWidth="2"
            />
            <rect
              x="95"
              y="122"
              width="40"
              height="17"
              rx="5"
              fill="#c2c2c2"
              stroke="#4CC9F0"
              strokeWidth="2"
            />
            <defs>
              <filter id="f1" x="0" y="0" width="240" height="180">
                <feGaussianBlur stdDeviation="1.4" />
              </filter>
            </defs>
          </svg>
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "68%",
              background: "#3A0CA3bb",
              color: "#FFB703",
              padding: "2px 16px",
              borderRadius: 10,
              fontSize: 16,
              fontFamily: "'VT323', monospace",
              boxShadow: "0 0 12px #4CC9F0",
              transform: "rotate(-7deg)",
              border: "2px solid #F72585",
              animation: "floating 3s ease-in-out infinite",
            }}
          >
            🔥 Insert Coin!
          </div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 24 }}>
        <a
          href="#games"
          style={{
            padding: "16px 54px",
            color: "#fff",
            fontSize: 21,
            fontWeight: 700,
            textDecoration: "none",
            background:
              "linear-gradient(90deg, #F72585 40%, #4CC9F0 100%)",
            borderRadius: 12,
            boxShadow: "0 0 22px #F725856c, 0 3px 9px #4CC9F091",
            fontFamily: "'VT323', monospace",
            letterSpacing: 2,
            border: "2px solid #FFF",
            transition: "filter 0.2s, transform 0.2s",
            filter: "drop-shadow(0 0 12px #4CC9F0)",
            animation: "pulse 1.4s infinite alternate",
          }}
        >
          Play Now
        </a>
      </div>
      {/* Neon flicker CSS */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 0.92; text-shadow: 0 0 18px #fff, 0 0 8px #F72585, 0 0 38px #4CC9F0; }
          8% { opacity: 0.98; }
          15% { opacity: 0.7; }
          18% { opacity: 1;}
          22% { opacity: 0.8;}
          25% { opacity: 1; text-shadow: 0 0 13px #F72585, 0 0 30px #4cc9f0cc; }
          100% { opacity: 1;}
        }
        @keyframes floating {
          0% { transform: rotate(-7deg) translateY(0px); }
          50% { transform: rotate(-7deg) translateY(-10px);}
          100% { transform: rotate(-7deg) translateY(0px);}
        }
        @keyframes pulse {
          0% { filter: drop-shadow(0 0 5px #4CC9F0) brightness(1);}
          40% { filter: drop-shadow(0 0 24px #4CC9F0) brightness(1.2);}
          80% { filter: drop-shadow(0 0 6px #F72585) brightness(1);}
          100% { filter: drop-shadow(0 0 3px #3A0CA3) brightness(0.98);}
        }
      `}</style>
    </section>
  );
}
