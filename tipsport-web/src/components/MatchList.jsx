import React, { useState } from "react";

const matches = [
  { id: 1, teamA: "Sparta Praha", teamB: "Slavia Praha", time: "18:00", oddsA: 2.1, oddsX: 3.0, oddsB: 3.4 },
  { id: 2, teamA: "Baník Ostrava", teamB: "Plzeň", time: "20:15", oddsA: 2.9, oddsX: 2.8, oddsB: 2.6 },
  { id: 3, teamA: "Zlín", teamB: "Jablonec", time: "17:30", oddsA: 3.1, oddsX: 2.5, oddsB: 2.1 },
  { id: 4, teamA: "Brno", teamB: "Liberec", time: "16:45", oddsA: 2.8, oddsX: 2.7, oddsB: 2.9 },
];

function MatchList() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dnešní zápasy</h2>
      {matches.map((match) => (
        <div key={match.id} style={styles.matchCard}>
          <div style={styles.teams}>
            <span>{match.teamA}</span> vs <span>{match.teamB}</span>
          </div>
          <div style={styles.details}>
            <span>Čas: {match.time}</span>
            <span>
              Kurzy: <strong>{match.oddsA}</strong> / <strong>{match.oddsX}</strong> / <strong>{match.oddsB}</strong>
            </span>
          </div>
          <button style={styles.button} onClick={() => setSelectedMatch(match)}>
            Detail
          </button>
        </div>
      ))}

      {selectedMatch && (
        <div style={styles.modalOverlay} onClick={() => setSelectedMatch(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedMatch.teamA} vs {selectedMatch.teamB}</h3>
            <p><strong>Čas:</strong> {selectedMatch.time}</p>
            <p><strong>Kurzy:</strong></p>
            <ul>
              <li>1: {selectedMatch.oddsA}</li>
              <li>X: {selectedMatch.oddsX}</li>
              <li>2: {selectedMatch.oddsB}</li>
            </ul>
            <button style={styles.closeBtn} onClick={() => setSelectedMatch(null)}>Zavřít</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f6f8",
  },
  heading: {
    color: "#0b3d91",
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  matchCard: {
    backgroundColor: "#ffffff",
    borderLeft: "6px solid #0b3d91",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  teams: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    color: "#666",
  },
  button: {
    backgroundColor: "#0b3d91",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    marginTop: "15px",
    backgroundColor: "#d33",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MatchList;


