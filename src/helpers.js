export const CONFIG = {
  ICON: {
    SMALL: {
      color: "#fff",
      size: 112,
      animate: false,
    },
    BIG: {
      color: "#fff",
      size: 224,
      animate: true,
    },
  },
};

export const textToIcon = (text) => {
  switch (text) {
    case "Haze":
      return "CLEAR_DAY";
    case "Clouds":
      return "CLOUDY";
    case "Rain":
      return "RAIN";
    case "Snow":
      return "SNOW";
    case "Dust":
      return "WIND";
    case "Drizzle":
      return "SLEET";
    case "Fog":
      return "FOG";
    case "Smoke":
      return "FOG";
    case "Tornado":
      return "WIND";
    default:
      return "CLEAR_DAY";
  }
};

export const dateTimeDecoder = (dateObject, i18n) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = i18n.t(`days.${days[dateObject.getDay()]}`);
  let date = dateObject.getDate();
  let month = i18n.t(`months.${months[dateObject.getMonth()]}`);
  let year = dateObject.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
