import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Tipsport</h2>
      <div style={styles.buttons}>
        <button style={styles.button}>Domů</button>
        <button style={styles.button}>Zápasy</button>
        <button style={styles.button}>Přihlásit se</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0b3d91",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "#0b3d91",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;



