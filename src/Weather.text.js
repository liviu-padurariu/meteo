import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Weather from "./Weather";

jest.mock("axios");

describe("Weather component", () => {
  test("renders weather information", async () => {
    render(<Weather />);

    // Mocked data for axios request
    const mockedData = {
      data: {
        name: "MockCity",
        sys: {
          country: "MO",
        },
        main: {
          temp: 20,
          humidity: 50,
        },
        visibility: 10,
        wind: {
          speed: 5,
        },
        weather: [
          {
            main: "Clear",
            icon: "01d",
          },
        ],
      },
    };

    // Simulate successful axios request
    require("axios").get.mockResolvedValueOnce(mockedData);

    // Wait for the component to fetch data
    await waitFor(() =>
      expect(screen.getByText(/MockCity, MO/i)).toBeInTheDocument()
    );

    // Check if the weather information is rendered
    expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/Visibility/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind Speed/i)).toBeInTheDocument();
  });

  test("handles search input", async () => {
    render(<Weather />);

    // Mocked data for axios request
    const mockedData = {
      data: {
        name: "MockCity",
        sys: {
          country: "MO",
        },
        main: {
          temp: 20,
          humidity: 50,
        },
        visibility: 10,
        wind: {
          speed: 5,
        },
        weather: [
          {
            main: "Clear",
            icon: "01d",
          },
        ],
      },
    };

    // Simulate successful axios request
    require("axios").get.mockResolvedValueOnce(mockedData);

    // Type in the search input
    userEvent.type(screen.getByPlaceholderText(/Search any city/i), "New York");

    // Click on the search button
    userEvent.click(screen.getByAltText(/searchbar/i));

    // Wait for the component to fetch data with the new search input
    await waitFor(() =>
      expect(screen.getByText(/New York, MO/i)).toBeInTheDocument()
    );
  });
});
