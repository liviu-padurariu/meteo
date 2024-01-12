import React from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
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
          {`${i18next.t("motto")}`} | {`${i18next.t("developedBy")} `}
          Liviu Padurariu and Mariana Georges
        </span>
      </footer>
    </React.Fragment>
  );
}

export default withTranslation()(App);
