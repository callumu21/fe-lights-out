import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isOnHomeScreen, setIsOnHomeScreen] = useState(true);
  return (
    <main className="App">
      <Header isOnHomeScreen={isOnHomeScreen} />
      <Game setIsOnHomeScreen={setIsOnHomeScreen} />
    </main>
  );
}

export default App;
