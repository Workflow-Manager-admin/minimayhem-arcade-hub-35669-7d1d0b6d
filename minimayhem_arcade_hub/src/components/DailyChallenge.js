import React, { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export default function DailyChallenge() {
  const [quote, setQuote] = useState(null);
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  // Fetch a quote from ZenQuotes.io
  useEffect(() => {
    fetch("https://zenquotes.io/api/today")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data[0]?.q && data[0]?.a) {
          setQuote(data[0]);
        } else {
          setQuote({
            q: "Enjoy the games, and play with joy!",
            a: "MiniMayhem Arcade",
          });
        }
      })
      .catch(() =>
        setQuote({ q: "Gaming is the ultimate escape.", a: "Unknown" })
      );
  }, []);

  // Fetch a joke from JokeAPI
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?format=txt&type=single")
      .then((res) => res.text())
      .then((txt) => setJoke(txt))
      .catch(() =>
        setJoke(
          "Why did the arcade player cross the road? To get to the next level!"
        )
      );
  }, []);

  return (
    <section
      id="challenge"
      style={{
        background:
          "linear-gradient(90deg,#0D0D0D 60%, #3A0CA3 100%)",
        padding: "38px 0 24px 0",
        margin: "24px 0",
      }}
    >
      <div
        style={{
          maxWidth: 930,
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "'VT323', monospace",
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 26,
            marginBottom: 9,
            color: "#4CC9F0",
            textShadow: "0 0 6px #F72585"
          }}
        >
          🏆 Daily Challenge &nbsp;
          <span style={{ fontSize: 18, color: "#FFB703" }}>Inspire & Laugh</span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 35,
            marginTop: 16,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              background: "rgba(58,12,163,0.28)",
              border: "2.5px solid #4CC9F0",
              borderRadius: 16,
              padding: "24px 24px 18px 24px",
              maxWidth: 365,
              boxShadow: "0 0 12px #4CC9F043",
              zIndex: 1,
              flex: "0 1 320px"
            }}
          >
            <div
              style={{
                fontSize: 19,
                color: "#F72585",
                marginBottom: 5,
                textShadow: "0 0 7px #F72585",
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              Zen Quote of the Day
            </div>
            {quote ? (
              <div>
                <div
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "#fff",
                    marginBottom: 7
                  }}
                >
                  "{quote.q}"
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#4CC9F0",
                    marginTop: 2,
                  }}
                >
                  — {quote.a}
                </div>
              </div>
            ) : (
              <div>Loading quote...</div>
            )}
          </div>

          <div
            style={{
              background: "rgba(255,183,3,0.16)",
              border: "2.5px solid #F72585",
              borderRadius: 16,
              padding: "24px 24px 18px 24px",
              maxWidth: 365,
              boxShadow: "0 0 14px #FFB70331",
              zIndex: 1,
              flex: "0 1 320px"
            }}
          >
            <div
              style={{
                fontSize: 19,
                color: "#FFB703",
                marginBottom: 7,
                textShadow: "0 0 12px #4CC9F0",
                letterSpacing: 1
              }}
            >
              Arcade Joke of the Day
            </div>
            {joke ? (
              <div
                style={{
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                {joke}
              </div>
            ) : (
              <div>Loading joke...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
