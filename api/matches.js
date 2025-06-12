export async function getMatches() {
  return [
    {
      id: 1,
      teams: 'Slavia vs Sparta',
      time: '18:00',
      odds: { home: 2.1, draw: 3.2, away: 2.8 }
    },
    {
      id: 2,
      teams: 'Plzeň vs Brno',
      time: '20:00',
      odds: { home: 1.9, draw: 3.5, away: 3.1 }
    }
  ];
}
