import React from 'react';

const matches = [
  {
    id: 1,
    homeTeam: 'Sparta Praha',
    awayTeam: 'Slavia Praha',
    time: '18:00',
    odds: {
      home: 2.1,
      draw: 3.5,
      away: 2.7,
    },
  },
  {
    id: 2,
    homeTeam: 'Plzeň',
    awayTeam: 'Baník Ostrava',
    time: '20:00',
    odds: {
      home: 1.85,
      draw: 3.9,
      away: 4.1,
    },
  },
];

function MatchCard({ match }) {
  return (
    <div style={styles.card}>
      <h3 style={{ marginBottom: 4 }}>
        {match.homeTeam} vs {match.awayTeam}
      </h3>
      <p style={{ margin: '0 0 8px 0', color: '#555' }}>Čas: {match.time}</p>
      <div style={styles.oddsContainer}>
        <div style={{ ...styles.oddsBox, backgroundColor: '#e0f7fa' }}>
          🏠 {match.odds.home}
        </div>
        <div style={{ ...styles.oddsBox, backgroundColor: '#fff9c4' }}>
          ➖ {match.odds.draw}
        </div>
        <div style={{ ...styles.oddsBox, backgroundColor: '#ffccbc' }}>
          🚌 {match.odds.away}
        </div>
      </div>
    </div>
  );
}

export default function MatchesList() {
  return (
    <div style={{ maxWidth: 400, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Dnešní zápasy</h2>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  oddsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oddsBox: {
    flex: '1 1 0',
    margin: '0 4px',
    padding: '8px 0',
    borderRadius: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    cursor: 'default',
  },
};
