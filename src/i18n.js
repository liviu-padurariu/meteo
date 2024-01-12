import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ro: {
    translation: {
      200: {
        main: "Furtună",
        description: "furtună cu ploaie ușoară",
      },
      201: {
        main: "Furtună",
        description: "furtună cu ploaie",
      },
      202: {
        main: "Furtună",
        description: "furtună cu ploaie torențială",
      },
      210: {
        main: "Furtună",
        description: "furtună ușoară",
      },
      211: {
        main: "Furtună",
        description: "furtună",
      },
      212: {
        main: "Furtună",
        description: "furtună puternică",
      },
      221: {
        main: "Furtună",
        description: "furtună dezordonată",
      },
      230: {
        main: "Furtună",
        description: "furtună cu burniță ușoară",
      },
      231: {
        main: "Furtună",
        description: "furtună cu burniță",
      },
      232: {
        main: "Furtună",
        description: "furtună cu burniță torențială",
      },
      300: {
        main: "Burniță",
        description: "burniță cu intensitate ușoară",
      },
      301: {
        main: "Burniță",
        description: "burniță",
      },
      302: {
        main: "Burniță",
        description: "burniță cu intensitate mare",
      },
      310: {
        main: "Burniță",
        description: "burniță cu intensitate ușoară ploaie",
      },
      311: {
        main: "Burniță",
        description: "burniță cu ploaie",
      },
      312: {
        main: "Burniță",
        description: "burniță cu ploaie torențială intensă",
      },
      313: {
        main: "Burniță",
        description: "furtună cu ploaie și burniță",
      },
      314: {
        main: "Burniță",
        description: "furtună cu ploaie torențială și burniță",
      },
      321: {
        main: "Burniță",
        description: "furtună cu burniță",
      },
      500: {
        main: "Ploaie",
        description: "ploaie ușoară",
      },
      501: {
        main: "Ploaie",
        description: "ploaie moderată",
      },
      502: {
        main: "Ploaie",
        description: "ploaie cu intensitate mare",
      },
      503: {
        main: "Ploaie",
        description: "ploaie foarte abundentă",
      },
      504: {
        main: "Ploaie",
        description: "ploaie extremă",
      },
      511: {
        main: "Ploaie",
        description: "ploaie înghețată",
      },
      520: {
        main: "Ploaie",
        description: "furtună cu ploaie ușoară",
      },
      521: {
        main: "Ploaie",
        description: "furtună cu ploaie",
      },
      522: {
        main: "Ploaie",
        description: "furtună cu ploaie torențială",
      },
      531: {
        main: "Ploaie",
        description: "furtună cu ploaie dezordonată",
      },
      600: {
        main: "Zăpadă",
        description: "zăpadă ușoară",
      },
      601: {
        main: "Zăpadă",
        description: "zăpadă",
      },
      602: {
        main: "Zăpadă",
        description: "zăpadă abundentă",
      },
      611: {
        main: "Zăpadă",
        description: "lapoviță",
      },
      612: {
        main: "Zăpadă",
        description: "burniță ușoară",
      },
      613: {
        main: "Zăpadă",
        description: "burniță",
      },
      615: {
        main: "Zăpadă",
        description: "ploaie ușoară și zăpadă",
      },
      616: {
        main: "Zăpadă",
        description: "ploaie și zăpadă",
      },
      620: {
        main: "Zăpadă",
        description: "furtună cu zăpadă ușoară",
      },
      621: {
        main: "Zăpadă",
        description: "furtună cu zăpadă",
      },
      622: {
        main: "Zăpadă",
        description: "furtună cu zăpadă torențială",
      },
      701: {
        main: "Ceată",
        description: "ceată",
      },
      711: {
        main: "Fum",
        description: "fum",
      },
      721: {
        main: "Ceață",
        description: "ceață",
      },
      731: {
        main: "Praf",
        description: "vârtejuri de nisip/praf",
      },
      741: {
        main: "Cețușă",
        description: "cețușă",
      },
      751: {
        main: "Nisip",
        description: "nisip",
      },
      761: {
        main: "Praf",
        description: "praf",
      },
      762: {
        main: "Cenusa",
        description: "cenușă vulcanică",
      },
      771: {
        main: "Vijelie",
        description: "vijelii",
      },
      781: {
        main: "Tornado",
        description: "tornado",
      },
      800: {
        main: "Senin",
        description: "cer senin",
      },
      801: {
        main: "Înnorat",
        description: "câțiva nori: 11-25%",
      },
      802: {
        main: "Înnorat",
        description: "norii sunt răzleți: 25-50%",
      },
      803: {
        main: "Înnorat",
        description: "norii sunt frânghii: 51-84%",
      },
      804: {
        main: "Înnorat",
        description: "cer acoperit: 85-100%",
      },
      motto: "Better than Busu",
      developedBy: "Create de:",
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
      200: {
        main: "Thunderstorm",
        description: "thunderstorm with light rain",
      },
      201: {
        main: "Thunderstorm",
        description: "thunderstorm with rain",
      },
      202: {
        main: "Thunderstorm",
        description: "thunderstorm with heavy rain",
      },
      210: {
        main: "Thunderstorm",
        description: "light thunderstorm",
      },
      211: {
        main: "Thunderstorm",
        description: "thunderstorm",
      },
      212: {
        main: "Thunderstorm",
        description: "heavy thunderstorm",
      },
      221: {
        main: "Thunderstorm",
        description: "ragged thunderstorm",
      },
      230: {
        main: "Thunderstorm",
        description: "thunderstorm with light drizzle",
      },
      231: {
        main: "Thunderstorm",
        description: "thunderstorm with drizzle",
      },
      232: {
        main: "Thunderstorm",
        description: "thunderstorm with heavy drizzle",
      },
      300: {
        main: "Drizzle",
        description: "light intensity drizzle",
      },
      301: {
        main: "Drizzle",
        description: "drizzle",
      },
      302: {
        main: "Drizzle",
        description: "heavy intensity drizzle",
      },
      310: {
        main: "Drizzle",
        description: "light intensity drizzle rain",
      },
      311: {
        main: "Drizzle",
        description: "drizzle rain",
      },
      312: {
        main: "Drizzle",
        description: "heavy intensity drizzle rain",
      },
      313: {
        main: "Drizzle",
        description: "shower rain and drizzle",
      },
      314: {
        main: "Drizzle",
        description: "heavy shower rain and drizzle",
      },
      321: {
        main: "Drizzle",
        description: "shower drizzle",
      },
      500: {
        main: "Rain",
        description: "light rain",
      },
      501: {
        main: "Rain",
        description: "moderate rain",
      },
      502: {
        main: "Rain",
        description: "heavy intensity rain",
      },
      503: {
        main: "Rain",
        description: "very heavy rain",
      },
      504: {
        main: "Rain",
        description: "extreme rain",
      },
      511: {
        main: "Rain",
        description: "freezing rain",
      },
      520: {
        main: "Rain",
        description: "light intensity shower rain",
      },
      521: {
        main: "Rain",
        description: "shower rain",
      },
      522: {
        main: "Rain",
        description: "heavy intensity shower rain",
      },
      531: {
        main: "Rain",
        description: "ragged shower rain",
      },
      600: {
        main: "Snow",
        description: "light snow",
      },
      601: {
        main: "Snow",
        description: "snow",
      },
      602: {
        main: "Snow",
        description: "heavy snow",
      },
      611: {
        main: "Snow",
        description: "sleet",
      },
      612: {
        main: "Snow",
        description: "light shower sleet",
      },
      613: {
        main: "Snow",
        description: "shower sleet",
      },
      615: {
        main: "Snow",
        description: "light rain and snow",
      },
      616: {
        main: "Snow",
        description: "rain and snow",
      },
      620: {
        main: "Snow",
        description: "light shower snow",
      },
      621: {
        main: "Snow",
        description: "shower snow",
      },
      622: {
        main: "Snow",
        description: "heavy shower snow",
      },
      701: {
        main: "Mist",
        description: "mist",
      },
      711: {
        main: "Smoke",
        description: "smoke",
      },
      721: {
        main: "Haze",
        description: "haze",
      },
      731: {
        main: "Dust",
        description: "sand/dust whirls",
      },
      741: {
        main: "Fog",
        description: "fog",
      },
      751: {
        main: "Sand",
        description: "sand",
      },
      761: {
        main: "Dust",
        description: "dust",
      },
      762: {
        main: "Ash",
        description: "volcanic ash",
      },
      771: {
        main: "Squall",
        description: "squalls",
      },
      781: {
        main: "Tornado",
        description: "tornado",
      },
      800: {
        main: "Clear",
        description: "clear sky",
      },
      801: {
        main: "Clouds",
        description: "few clouds: 11-25%",
      },
      802: {
        main: "Clouds",
        description: "scattered clouds: 25-50%",
      },
      803: {
        main: "Clouds",
        description: "broken clouds: 51-84%",
      },
      804: {
        main: "Clouds",
        description: "overcast clouds: 85-100%",
      },
      motto: "Better than Busu",
      developedBy: "Developed by:",
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
