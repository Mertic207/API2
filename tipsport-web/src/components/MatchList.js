import React, { useState, useEffect } from "react";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pevné evropské zápasy
  const europeanMatches = [
    {
      id: "e1",
      event: "Česká republika U21 vs Německo U21",
      time: "15:00 CEST",
      place: "MOL Aréna, Dunajská Streda, Slovensko",
      competition: "UEFA Mistrovství Evropy U21",
    },
    {
      id: "e2",
      event: "Nizozemsko U21 vs Dánsko U21",
      time: "15:00 CEST",
      place: "Futbal Tatran Arena, Prešov, Slovensko",
      competition: "UEFA Mistrovství Evropy U21",
    },
    {
      id: "e3",
      event: "Anglie U21 vs Slovinsko U21",
      time: "15:00 CEST",
      place: "Stadión Pod Zoborom, Nitra, Slovensko",
      competition: "UEFA Mistrovství Evropy U21",
    },
    {
      id: "e4",
      event: "Finsko U21 vs Ukrajina U21",
      time: "15:00 CEST",
      place: "Košická futbalová aréna, Košice, Slovensko",
      competition: "UEFA Mistrovství Evropy U21",
    },
  ];

  // Pevné mezinárodní zápasy
  const internationalMatches = [
    {
      id: "i1",
      event: "PSG vs Atlético Madrid",
      time: "21:00 CEST",
      place: "Stadion v USA",
      competition: "FIFA Club World Cup 2025",
    },
    {
      id: "i2",
      event: "Bayern Mnichov vs Auckland City",
      time: "23:00 CEST",
      place: "Stadion v USA",
      competition: "FIFA Club World Cup 2025",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3001/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Chyba při načítání:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Načítám zápasy...</div>;

  return (
    <div style={{ padding: 20 }}>
      {/* Tipsport zápasy z API */}
      <h2>Tipsport zápasy</h2>
      {matches.length === 0 && <p>Žádné zápasy k zobrazení</p>}
      {matches.map((match) => (
        <div
          key={match.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
          }}
        >
          <h3>{match.event}</h3>
          <p>
            Kurzy: 1 = {match.odds["1"]}, X = {match.odds["X"]}, 2 = {match.odds["2"]}
          </p>
        </div>
      ))}

      {/* Evropské zápasy */}
      <h2>Dnešní zápasy v Evropě (15. června 2025)</h2>
      {europeanMatches.map((match) => (
        <div
          key={match.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
          }}
        >
          <h3>{match.event}</h3>
          <p>🕒 Čas: {match.time}</p>
          <p>📍 Místo: {match.place}</p>
          <p>Soutěž: {match.competition}</p>
        </div>
      ))}

      {/* Mezinárodní zápasy */}
      <h2>Mezinárodní zápasy</h2>
      {internationalMatches.map((match) => (
        <div
          key={match.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
          }}
        >
          <h3>{match.event}</h3>
          <p>🕒 Čas: {match.time}</p>
          <p>📍 Místo: {match.place}</p>
          <p>Soutěž: {match.competition}</p>
        </div>
      ))}
    </div>
  );
}
