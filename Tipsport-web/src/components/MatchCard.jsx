import React from "react";

function MatchCard({ match }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span>{match.homeTeam} vs {match.awayTeam}</span>
        <span style={styles.time}>🕒 {match.time}</span>
      </div>

      <div style={styles.oddsRow}>
        <div style={{ ...styles.oddsBox, backgroundColor: "#e0f7fa" }}>
          🏠 {match.odds.home}
        </div>
        <div style={{ ...styles.oddsBox, backgroundColor: "#fff9c4" }}>
          ➖ {match.odds.draw}
        </div>
        <div style={{ ...styles.oddsBox, backgroundColor: "#ffccbc" }}>
          🚌 {match.odds.away}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: 500,
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  oddsRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
  },
  oddsBox: {
    flex: 1,
    padding: "10px 0",
    textAlign: "center",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};

export default MatchCard;
