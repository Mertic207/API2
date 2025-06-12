import React, { useState } from "react";

const matches = [
  { id: 1, sport: "Fotbal", competition: "1. Liga ČR", teamA: "Sparta", teamB: "Slavia", datetime: "2025-06-12T18:00", oddsA: 2.1, oddsX: 3.0, oddsB: 3.4 },
  { id: 2, sport: "Fotbal", competition: "1. Liga ČR", teamA: "Baník", teamB: "Plzeň", datetime: "2025-06-13T20:15", oddsA: 2.9, oddsX: 2.8, oddsB: 2.6 },
  { id: 3, sport: "Hokej", competition: "Tipsport Extraliga", teamA: "Kometa", teamB: "Třinec", datetime: "2025-06-12T17:00", oddsA: 2.3, oddsX: 3.1, oddsB: 2.9 },
  { id: 4, sport: "Hokej", competition: "Tipsport Extraliga", teamA: "Sparta", teamB: "Litvínov", datetime: "2025-06-14T19:30", oddsA: 2.4, oddsX: 3.0, oddsB: 3.0 },
  { id: 5, sport: "Tenis", competition: "Wimbledon", teamA: "Djoković", teamB: "Alcaraz", datetime: "2025-06-12T14:00", oddsA: 1.9, oddsX: null, oddsB: 2.0 },
  { id: 6, sport: "Tenis", competition: "Wimbledon", teamA: "Kvitová", teamB: "Swiatek", datetime: "2025-06-13T16:30", oddsA: 2.5, oddsX: null, oddsB: 1.7 },
  // Nové zápasy Premier League:
  { id: 7, sport: "Fotbal", competition: "Premier League", teamA: "Manchester United", teamB: "Liverpool", datetime: "2025-06-12T21:00", oddsA: 2.7, oddsX: 3.3, oddsB: 2.5 },
  { id: 8, sport: "Fotbal", competition: "Premier League", teamA: "Chelsea", teamB: "Arsenal", datetime: "2025-06-13T18:30", oddsA: 2.2, oddsX: 3.1, oddsB: 3.0 },
];

const competitions = [
  { id: 1, sport: "Fotbal", name: "1. Liga ČR" },
  { id: 2, sport: "Fotbal", name: "Premier League" },
  { id: 3, sport: "Hokej", name: "Tipsport Extraliga" },
  { id: 4, sport: "Tenis", name: "Wimbledon" },
];


function formatDate(dateString) {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(dateString).toLocaleDateString("cs-CZ", options);
}

function groupByDate(matches) {
  return matches.reduce((groups, match) => {
    const date = formatDate(match.datetime);
    if (!groups[date]) groups[date] = [];
    groups[date].push(match);
    return groups;
  }, {});
}

function groupBySport(matches) {
  return matches.reduce((groups, match) => {
    if (!groups[match.sport]) groups[match.sport] = [];
    groups[match.sport].push(match);
    return groups;
  }, {});
}

function MatchList({ matches }) {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const groupedBySport = groupBySport(matches);

  return (
    <div style={styles.content}>
      {Object.entries(groupedBySport).map(([sport, matchesBySport]) => {
        const groupedByDate = groupByDate(matchesBySport);

        return (
          <div key={sport} style={{ marginBottom: "40px" }}>
            <h3 style={styles.sportTitle}>{sport}</h3>

            {Object.entries(groupedByDate).map(([date, matchesOnDate]) => (
              <div key={date} style={{ marginBottom: "25px", paddingLeft: "15px" }}>
                <h4 style={styles.dateTitle}>{date}</h4>

                {matchesOnDate.map((match) => (
                  <div key={match.id} style={styles.matchCard}>
                    <div style={styles.teams}>
                      <span>{match.teamA}</span> vs <span>{match.teamB}</span>
                    </div>
                    <div style={styles.details}>
                      <span>
                        Čas:{" "}
                        {new Date(match.datetime).toLocaleTimeString("cs-CZ", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span>
                        Kurzy:{" "}
                        <strong>{match.oddsA}</strong>
                        {match.oddsX !== null ? <> / <strong>{match.oddsX}</strong></> : null}
                        / <strong>{match.oddsB}</strong>
                      </span>
                    </div>
                    <button style={styles.button} onClick={() => setSelectedMatch(match)}>
                      Detail
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}

      {selectedMatch && (
        <div style={styles.modalOverlay} onClick={() => setSelectedMatch(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>
              {selectedMatch.teamA} vs {selectedMatch.teamB}
            </h3>
            <p>
              <strong>Sport:</strong> {selectedMatch.sport}
            </p>
            <p>
              <strong>Soutěž:</strong> {selectedMatch.competition}
            </p>
            <p>
              <strong>Datum a čas:</strong> {new Date(selectedMatch.datetime).toLocaleString("cs-CZ")}
            </p>
            <p>
              <strong>Kurzy:</strong>
            </p>
            <ul>
              <li>1: {selectedMatch.oddsA}</li>
              {selectedMatch.oddsX !== null && <li>X: {selectedMatch.oddsX}</li>}
              <li>2: {selectedMatch.oddsB}</li>
            </ul>
            <button style={styles.closeBtn} onClick={() => setSelectedMatch(null)}>
              Zavřít
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Competitions({ onSelectCompetition }) {
  return (
    <div style={styles.content}>
      <h2 style={styles.heading}>Soutěže</h2>
      <ul style={styles.competitionList}>
        {competitions.map((comp) => (
          <li
            key={comp.id}
            style={{ ...styles.competitionItem, cursor: "pointer", color: "#0b3d91" }}
            onClick={() => onSelectCompetition(comp.name)}
          >
            <strong>{comp.sport}</strong> – {comp.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("matches");
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  const filteredMatches = selectedCompetition
    ? matches.filter((m) => m.competition === selectedCompetition)
    : matches;

  return (
    <div>
      <nav style={styles.nav}>
        <button
          style={page === "matches" ? styles.navActiveButton : styles.navButton}
          onClick={() => {
            setPage("matches");
            setSelectedCompetition(null);
          }}
        >
          Zápasy
        </button>
        <button
          style={page === "competitions" ? styles.navActiveButton : styles.navButton}
          onClick={() => {
            setPage("competitions");
            setSelectedCompetition(null);
          }}
        >
          Soutěže
        </button>
      </nav>

      {page === "matches" && <MatchList matches={matches} />}

      {page === "competitions" && !selectedCompetition && (
        <Competitions onSelectCompetition={(comp) => setSelectedCompetition(comp)} />
      )}

      {page === "competitions" && selectedCompetition && (
        <div style={styles.content}>
          <button
            style={{ ...styles.button, marginBottom: "15px" }}
            onClick={() => setSelectedCompetition(null)}
          >
            ← Zpět na soutěže
          </button>
          <h2 style={styles.heading}>Zápasy v soutěži: {selectedCompetition}</h2>
          <MatchList matches={filteredMatches} />
        </div>
      )}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    backgroundColor: "#0b3d91",
    padding: "10px 20px",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "1.1rem",
    cursor: "pointer",
    opacity: 0.7,
  },
  navActiveButton: {
    backgroundColor: "#fff",
    border: "none",
    color: "#0b3d91",
    padding: "10px 20px",
    fontSize: "1.1rem",
    cursor: "pointer",
    opacity: 1,
    borderRadius: "5px",
    fontWeight: "bold",
  },
  content: {
    padding: "20px",
    backgroundColor: "#eef2f5",
    minHeight: "calc(100vh - 52px)",
  },
  heading: {
    color: "#0b3d91",
    fontSize: "2rem",
    marginBottom: "25px",
  },
  competitionList: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  competitionItem: {
    marginBottom: "10px",
    fontSize: "1.1rem",
    color: "#222",
  },
  sportTitle: {
    color: "#0a2c66",
    fontSize: "1.5rem",
    marginBottom: "15px",
    borderBottom: "3px solid #0b3d91",
    paddingBottom: "6px",
  },
  dateTitle: {
    color: "#222",
    fontSize: "1.2rem",
    marginTop: "10px",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "3px",
  },
  matchCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderLeft: "6px solid #0b3d91",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginBottom: "12px",
  },
  teams: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginBottom: "6px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    color: "#555",
    fontSize: "0.95rem",
    marginBottom: "8px",
  },
  button: {
    backgroundColor: "#0b3d91",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
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
    width: "320px",
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

