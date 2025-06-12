import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import DailyChallenge from "../components/DailyChallenge";
import Footer from "../components/Footer";

// PUBLIC_INTERFACE
export default function LandingPage() {
  // Theme logic - persisted to localStorage
  const [darkMode, setDarkMode] = useState(() => {
    let val = localStorage.getItem("mm_arcade_darkmode");
    if (val === null) return true;
    return val === "true";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("mm_arcade_darkmode", darkMode ? "true" : "false");
  }, [darkMode]);

  function handleThemeToggle() {
    setDarkMode((d) => !d);
  }

  return (
    <div
      className={`minimayhem-landing ${darkMode ? "dark-theme" : "light-theme"}`}
      data-theme={darkMode ? "dark" : "light"}
      style={{
        fontFamily:
          "'Press Start 2P', 'VT323', 'Inter', monospace, sans-serif",
        backgroundColor: darkMode ? "#0D0D0D" : "#edf2fa",
        color: darkMode ? "#f4f4f4" : "#252525",
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
        boxSizing: "border-box",
      }}
    >
      <Header darkMode={darkMode} onThemeToggle={handleThemeToggle} />
      <main style={{ marginTop: 90, flex: 1 }}>
        <Hero />
        <FeatureCards />
        <DailyChallenge />
      </main>
      <Footer darkMode={darkMode} onThemeToggle={handleThemeToggle} />
    </div>
  );
}
