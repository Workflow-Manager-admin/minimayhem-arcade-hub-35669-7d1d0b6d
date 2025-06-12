import React from "react";

// PUBLIC_INTERFACE
export default function Footer({ darkMode, onThemeToggle }) {
  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(90deg,#3A0CA3 0%, #0D0D0D 100%)"
          : "#f5f7fa",
        borderTop: darkMode
          ? "2px solid #4CC9F0"
          : "2px solid #F72585",
        color: darkMode ? "#fff" : "#2e1879",
        fontFamily: "'VT323', monospace",
        padding: "33px 0 22px 0",
        textAlign: "center",
        marginTop: 40,
        fontSize: 18,
      }}
    >
      <div style={{ marginBottom: 12, marginTop: 2 }}>
        <a
          href="#games"
          style={{
            color: "#4CC9F0",
            margin: "0 18px",
            fontSize: 18,
            textDecoration: "none",
            textShadow: "0 0 5px #3A0CA3",
            letterSpacing: 1.5,
          }}
        >
          Games
        </a>
        <a
          href="#challenge"
          style={{
            color: "#F72585",
            margin: "0 18px",
            fontSize: 18,
            textDecoration: "none",
            textShadow: "0 0 3px #FFB703",
            letterSpacing: 1.5,
          }}
        >
          Challenge
        </a>
        <a
          href="#"
          style={{
            color: "#FFB703",
            margin: "0 18px",
            fontSize: 18,
            textDecoration: "none",
            textShadow: "0 0 4px #F72585",
          }}
        >
          Home
        </a>
        <button
          aria-label="Toggle dark mode"
          onClick={onThemeToggle}
          style={{
            marginLeft: 18,
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: 22,
            color: darkMode ? "#4CC9F0" : "#F72585",
            verticalAlign: "middle"
          }}
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: "#888" }}>
          &copy; {new Date().getFullYear()} MiniMayhem Arcade Hub
        </span>
        <span
          style={{
            marginLeft: 14,
            fontSize: 13,
            color: "#bb86fc",
            letterSpacing: 1.2,
          }}
        >
          Built with ❤️ for retro gamers.
        </span>
      </div>
    </footer>
  );
}
