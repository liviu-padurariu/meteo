import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ro: {
    translation: {
      searchPlaceholder: "Caută orasul",
      temperature: "Temperatura",
      humidity: "Umiditate",
      visibility: "Vizibilitate",
      windspeed: "Viteza Vantului",
      months: {
        January: "Ianuarie",
        February: "Februarie",
        March: "Martie",
        April: "Aprilie",
        May: "Mai",
        June: "Iunie",
        July: "Iulie",
        August: "August",
        September: "Septembrie",
        October: "Octombrie",
        November: "Noiembrie",
        December: "Decembrie",
      },
      days: {
        Sunday: "Duminică",
        Monday: "Luni",
        Tuesday: "Marți",
        Wednesday: "Miercuri",
        Thursday: "Joi",
        Friday: "Vineri",
        Saturday: "Sâmbătă",
      },
    },
  },
  en: {
    translation: {
      searchPlaceholder: "Search any city",
      temperature: "Temperature",
      humidity: "Humidity",
      visibility: "Visibility",
      windspeed: "Wind Speed",
      months: {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "September",
        October: "October",
        November: "November",
        December: "December",
      },
      days: {
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
