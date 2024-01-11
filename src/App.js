import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container" role="main">
        <CurrentLocation />
      </main>
      <footer className="footer-info">
        <span>
          Better than Busu | Developed by: Liviu Padurariu and Mariana Georges
        </span>
      </footer>
    </React.Fragment>
  );
}

export default App;
