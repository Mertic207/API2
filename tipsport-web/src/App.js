import React from "react";
import Navbar from "./components/Navbar";
import MatchList from "./components/MatchList";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h1>Tipsport Webovka</h1>
        <MatchList />
      </div>
    </div>
  );
}

export default App;
