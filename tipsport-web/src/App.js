import MatchList from "./components/MatchList";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Tipsport Webovka</h1>
      <MatchList />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import MatchList from "./components/MatchList";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <MatchList />
      </div>
    </div>
  );
}

export default App;
