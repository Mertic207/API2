// src/components/MatchCard.jsx

function MatchCard({ match }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{match.teams}</h3>
      <p>Čas: {match.time}</p>
      <p>
        Kurzy: 🏠 {match.odds.home} | ➖ {match.odds.draw} | 🚌 {match.odds.away}
      </p>
    </div>
  );
}

export default MatchCard;
