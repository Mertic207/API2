function MatchCard({ match }) {
  return (
    <div style={{
      background: '#fff',
      padding: 16,
      marginBottom: 20,
      borderRadius: 10,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{match.homeTeam} vs {match.awayTeam}</h3>
      <p>Čas: {match.time}</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <div>🏠 {match.odds.home}</div>
        <div>➖ {match.odds.draw}</div>
        <div>🚌 {match.odds.away}</div>
      </div>
    </div>
  );
}

export default MatchCard;
