import React, { useState, useEffect } from "react";
import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
import axios from "axios";
import searchIcon from "./images/search.png";
import ReactAnimatedWeather from "react-animated-weather";
import i18next from "./i18n";
import { dateTimeDecoder, textToIcon, CONFIG } from "./helpers";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

const Weather = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    setI18nData(dateTimeDecoder(new Date(), i18n));
  };

  const [i18nDate, setI18nData] = useState(dateTimeDecoder(new Date(), i18n));
  const [weather, setWeather] = useState({});
  const [searchInput, setSearchInput] = useState("Cluj-Napoca");
  const [error, setError] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    axios
      .get(
        `${apiKeys.base}weather?q=${searchInput}&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        // console.log("🚀 ~ .then ~ response.data:", JSON.stringify(response.data))
        setWeather(response.data);
        // Clear search input
        setSearchInput("");
      })
      .catch((error) => {
        // console.log(JSON.stringify(error));
        // Set error
        setError(error);
        setWeather({});
        // Clear search input
        setSearchInput("");
      });
  };

  return (
    <React.Fragment>
      <div className="city" role="region" aria-label="Weather Information">
        <div className="leftContainer">
          <div className="leftTitle">
            <h2>
              {weather?.name} {weather?.sys?.country}
            </h2>
          </div>
          <div className="leftIcon">
            <ReactAnimatedWeather
              {...CONFIG.ICON.BIG}
              icon={textToIcon(weather?.weather?.[0]?.main)}
            />
            <p>{weather?.weather?.[0]?.main}</p>
          </div>
        </div>

        <div className="date-time">
          <div className="dmy">
            <div id="txt"></div>
            <div className="current-time">
              <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            </div>
            <div className="current-date">{i18nDate}</div>
          </div>
          <div className="temperature">
            <p>
              {isNaN(weather?.main?.temp)
                ? "-"
                : Math.round(weather?.main?.temp)}
              °<span>C</span>
            </p>
          </div>
        </div>
      </div>
      <section className="forecast" aria-label="Weather Forecast">
        <div className="language-switcher">
          <button onClick={() => changeLanguageHandler("en")}>EN</button>
          <button onClick={() => changeLanguageHandler("ro")}>RO</button>
        </div>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            {...CONFIG.ICON.SMALL}
            icon={textToIcon(weather?.weather?.[0]?.main)}
          />
        </div>
        <article className="today-weather">
          <h3>{weather?.weather?.[0]?.main}</h3>
          <div className="search-box">
            <input
              type="text"
              id="searchInput"
              className="search-bar"
              placeholder={i18next.t("searchPlaceholder")}
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <div className="img-box">
              <img alt="searchbar" src={searchIcon} onClick={search} />
            </div>
          </div>
          <ul>
            {typeof weather?.main !== "undefined" ? (
              <div>
                {" "}
                <li className="cityHead">
                  <p>
                    {weather?.name},{weather?.sys.country}
                  </p>
                  <img
                    alt="Weather icon"
                    className="temp"
                    src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                  />
                </li>
                <li>
                  {i18next.t("temperature")}{" "}
                  <span className="temp">
                    {Math.round(weather?.main?.temp)}°c
                  </span>
                </li>
                <li>
                  {i18next.t("humidity")}
                  <span className="temp">
                    {Math.round(weather?.main.humidity)}%
                  </span>
                </li>
                <li>
                  {i18next.t("visibility")}
                  <span className="temp">
                    {Math.round(weather?.visibility)} mi
                  </span>
                </li>
                <li>
                  {i18next.t("windspeed")}
                  <span className="temp">
                    {Math.round(weather?.wind.speed)} Km/h
                  </span>
                </li>
              </div>
            ) : (
              <li>{error?.message}</li>
            )}
          </ul>
        </article>
      </section>
    </React.Fragment>
  );
};

export default withTranslation()(Weather);
