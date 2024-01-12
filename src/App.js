import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container" role="main">
        <Weather />
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
