import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Weather from "./Weather";

jest.mock("axios");

// Mocked data for axios request
const mockedData = {
  data: {
    coord: { lon: 23.6, lat: 46.7667 },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    base: "stations",
    main: {
      temp: -2.29,
      feels_like: -2.29,
      temp_min: -2.51,
      temp_max: -2.29,
      pressure: 1019,
      humidity: 69,
    },
    visibility: 10000,
    wind: { speed: 1.03, deg: 0 },
    clouds: { all: 40 },
    dt: 1704992314,
    sys: {
      type: 1,
      id: 6913,
      country: "RO",
      sunrise: 1704953311,
      sunset: 1704985050,
    },
    timezone: 7200,
    id: 681290,
    name: "Cluj-Napoca",
    cod: 200,
  },
};

describe("Weather component", () => {
  test("handles search input", async () => {
    render(<Weather />);
    // Simulate successful axios request
    require("axios").get.mockResolvedValueOnce(mockedData);

    // Use act to wrap the state-changing code
    await act(async () => {
      // Type in the search input
      // Triggering the onChange event
      userEvent.type(
        screen.getByPlaceholderText(/Search any city/i),
        "Cluj-Napoca"
      );
    });

    // Click on the search button
    userEvent.click(screen.getByAltText(/searchbar/i));

    // Wait for the component to fetch data with the new search input
    await screen.findByText(/Cluj-Napoca RO/i);
  });

  test("renders weather information", async () => {
    render(<Weather />);

    // Simulate successful axios request
    require("axios").get.mockResolvedValueOnce(mockedData);

    // Wait for the component to fetch data
    await screen.findByTestId("city-info");
    // Check if the weather information is rendered
    expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/Visibility/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind Speed/i)).toBeInTheDocument();
  });
});
