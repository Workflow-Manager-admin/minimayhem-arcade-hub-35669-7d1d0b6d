import React from "react";

// PUBLIC_INTERFACE
export default function Header({ darkMode, onThemeToggle }) {
  return (
    <header
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #3A0CA3 0%, #0D0D0D 100%)"
          : "#f5f7fa",
        borderBottom: darkMode
          ? "2px solid #4CC9F0"
          : "2px solid #F72585",
        boxShadow: darkMode
          ? "0 0 14px #4CC9F0"
          : "0 1px 10px #f7258592",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        minHeight: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav
        className="container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontFamily: "'Press Start 2P', 'VT323', monospace" }}>
          <span
            style={{
              fontSize: 32,
              color: "#F72585",
              marginRight: 10,
              textShadow: "0 0 17px #F72585, 0 0 2px #fff",
            }}
          >
            🕹️
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#4CC9F0",
              letterSpacing: "2px",
              textShadow: "0 0 11px #4CC9F0, 0 0 1px #fff",
              fontWeight: 700,
            }}
          >
            MiniMayhem Arcade
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontFamily: "'VT323', monospace",
          }}
        >
          <a
            href="#games"
            className="header-link"
            style={{
              color: "#FFB703",
              fontSize: 19,
              textDecoration: "none",
              marginRight: 5,
              transition: "color 0.2s",
              textShadow: "0 0 4px #F72585",
            }}
          >
            Games
          </a>
          <a
            href="#challenge"
            className="header-link"
            style={{
              color: "#4CC9F0",
              fontSize: 19,
              textDecoration: "none",
              marginRight: 5,
              textShadow: "0 0 3px #3A0CA3",
            }}
          >
            Daily Challenge
          </a>
          <a
            href="#funzone"
            className="header-link"
            style={{
              color: "#F72585",
              fontSize: 19,
              textDecoration: "none",
              textShadow: "0 0 5px #FFB703",
            }}
          >
            FunZone
          </a>
          {/* Dark mode toggle switch */}
          <button
            aria-label="Toggle dark mode"
            onClick={onThemeToggle}
            style={{
              marginLeft: 10,
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 22,
              color: darkMode ? "#4CC9F0" : "#F72585",
              transition: "color 0.2s",
            }}
            title={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>
      </nav>
    </header>
  );
}
