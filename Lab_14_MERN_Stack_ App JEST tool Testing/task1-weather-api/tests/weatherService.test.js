const axios = require("axios");

jest.mock("axios");

const {
  getCurrentWeather,
  getForecast
} = require("../src/services/weatherService");

describe("Weather Service Unit Tests", () => {

  test("getCurrentWeather formats API response correctly", async () => {

    axios.get.mockResolvedValue({
      data: {
        name: "Karachi",
        sys: {
          country: "PK",
          sunrise: 1000,
          sunset: 2000
        },
        main: {
          temp: 30,
          feels_like: 32,
          temp_min: 28,
          temp_max: 33,
          humidity: 60,
          pressure: 1010
        },
        weather: [{
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }],
        wind: { speed: 5 },
        visibility: 10000
      }
    });

    const result = await getCurrentWeather("Karachi");

    expect(result.city).toBe("Karachi");
    expect(result.country).toBe("PK");
    expect(result.temperature.current).toBe(30);
  });

});