export async function getMatches() {
  return [
    {
      id: 1,
      homeTeam: "Sparta Praha",
      awayTeam: "Slavia Praha",
      time: "18:00",
      odds: {
        home: 2.1,
        draw: 3.5,
        away: 2.7,
      },
    },
    {
      id: 2,
      homeTeam: "Plzeň",
      awayTeam: "Baník Ostrava",
      time: "20:00",
      odds: {
        home: 1.85,
        draw: 3.9,
        away: 4.1,
      },
    },
  ];
}
