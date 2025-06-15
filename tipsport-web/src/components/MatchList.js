import React, { useState, useEffect } from "react";

const additionalMatches = [
  {
    id: 101,
    event: "Česká republika U21 vs Německo U21",
    competition: "UEFA Mistrovství Evropy U21",
    time: "15:00 CEST",
    location: "MOL Aréna, Dunajská Streda, Slovensko",
    odds: { "1": 2.4, "X": 3.1, "2": 2.7 },
  },
  {
    id: 102,
    event: "Nizozemsko U21 vs Dánsko U21",
    competition: "UEFA Mistrovství Evropy U21",
    time: "15:00 CEST",
    location: "Futbal Tatran Arena, Prešov, Slovensko",
    odds: { "1": 2.6, "X": 3.0, "2": 2.5 },
  },
  {
    id: 103,
    event: "Anglie U21 vs Slovinsko U21",
    competition: "UEFA Mistrovství Evropy U21",
    time: "15:00 CEST",
    location: "Stadión Pod Zoborom, Nitra, Slovensko",
    odds: { "1": 2.1, "X": 3.3, "2": 3.0 },
  },
  {
    id: 104,
    event: "Finsko U21 vs Ukrajina U21",
    competition: "UEFA Mistrovství Evropy U21",
    time: "15:00 CEST",
    location: "Košická futbalová aréna, Košice, Slovensko",
    odds: { "1": 2.7, "X": 3.2, "2": 2.4 },
  },
  {
    id: 201,
    event: "PSG vs Atlético Madrid",
    competition: "FIFA Club World Cup 2025",
    time: "21:00 CEST",
    location: "Stadion v USA",
    odds: { "1": 1.8, "X": 3.6, "2": 4.2 },
  },
  {
    id: 202,
    event: "Bayern Mnichov vs Auckland City",
    competition: "FIFA Club World Cup 2025",
    time: "23:00 CEST",
    location: "Stadion v USA",
    odds: { "1": 1.5, "X": 4.0, "2": 5.0 },
  },
];

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamicky nastavená URL podle prostředí (lokálně nebo na Vercelu)
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "/api/matches"
      : "http://localhost:3001/api/matches";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const homeMatches = data.map((m) => ({
          ...m,
          competition: "Domácí zápasy",
        }));
        setMatches([...homeMatches, ...additionalMatches]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Chyba při načítání:", err);
        setMatches(additionalMatches);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) return <div>Načítám zápasy...</div>;

  // Rozdělení podle soutěží
  const grouped = matches.reduce((acc, match) => {
    if (!acc[match.competition]) acc[match.competition] = [];
    acc[match.competition].push(match);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(grouped).map((competition) => (
        <div key={competition} style={{ marginBottom: 30 }}>
          <h2>{competition}</h2>
          {grouped[competition].map((match) => (
            <div
              key={match.id}
              style={{
                border: "1px solid #ccc",
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
              }}
            >
              <h3>{match.event}</h3>
              {match.time && <p>🕒 Čas: {match.time}</p>}
              {match.location && <p>📍 Místo: {match.location}</p>}
              {match.odds && (
                <p>
                  Kurzy: 1 = {match.odds["1"]}, X = {match.odds["X"]}, 2 = {match.odds["2"]}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

