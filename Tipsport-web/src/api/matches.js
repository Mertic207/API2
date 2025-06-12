// src/api/matches.js

export async function getMatches() {
  return [
    {
      id: 1,
      teams: "Sparta Praha vs Slavia Praha",
      time: "18:00",
      odds: {
        home: 2.10,
        draw: 3.50,
        away: 2.70,
      },
    },
    {
      id: 2,
      teams: "Plzeň vs Baník Ostrava",
      time: "20:00",
      odds: {
        home: 1.85,
        draw: 3.90,
        away: 4.10,
      },
    },
  ];
}
