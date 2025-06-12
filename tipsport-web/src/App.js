import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoggedIn(true);
      setShowLoginForm(false);
    } else {
      alert("Vyplň uživatelské jméno i heslo!");
    }
  };

  return (
    <div>
      <Navbar onLoginClick={() => setShowLoginForm(true)} />

      {showLoginForm && (
        <form
          onSubmit={handleLoginSubmit}
          style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", width: "300px" }}
        >
          <input
            type="text"
            placeholder="Uživatelské jméno"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
          <input
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 15px",
              backgroundColor: "#0077cc",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Přihlásit se
          </button>
          <button
            type="button"
            onClick={() => setShowLoginForm(false)}
            style={{
              padding: "8px 15px",
              backgroundColor: "#ccc",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Zrušit
          </button>
        </form>
      )}

      {loggedIn && <p>Vítej, {username}! Jsi přihlášený.</p>}
    </div>
  );
}

export default App;
