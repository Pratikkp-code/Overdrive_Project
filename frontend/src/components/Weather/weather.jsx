import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseURL}/api/weather/${city}`);
      if (response?.data?.current && response?.data?.location) {
        setWeatherData(response.data);
      } else {
        setWeatherData(null);
        setError("Invalid response data");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <h2 className="text-2xl font-bold mb-4">🌤️ Weather Info</h2>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Weather
        </button>
      </form>

      {loading && <p>Loading weather data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData?.current && weatherData?.location && (
        <div className="p-4 border rounded-lg shadow-md space-y-4 mb-12">
          <div className="flex items-center gap-4">
            {weatherData.current.weather_icons?.[0] && (
              <img
                src={weatherData.current.weather_icons[0]}
                alt="weather icon"
                className="w-16 h-16"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold">
                {weatherData.location.name}, {weatherData.location.country}
              </h3>
              <p className="text-gray-600">
                {weatherData.current.weather_descriptions?.[0] || "N/A"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>🌡️ Temperature: {weatherData.current.temperature}°C</div>
            <div>💧 Humidity: {weatherData.current.humidity}%</div>
            <div>🌬️ Wind: {weatherData.current.wind_speed} km/h {weatherData.current.wind_dir}</div>
            <div>☁️ Cloud Cover: {weatherData.current.cloudcover}%</div>
            <div>🌞 Feels Like: {weatherData.current.feelslike}°C</div>
            <div>🧭 Pressure: {weatherData.current.pressure} mb</div>
            <div>📍 Region: {weatherData.location.region}</div>
            <div>🌐 Coordinates: {weatherData.location.lat}, {weatherData.location.lon}</div>
            <div>🕰️ Timezone: {weatherData.location.timezone_id}</div>
          </div>

          {weatherData.current.astro && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">🌙 Astro Info</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                <div>🌅 Sunrise: {weatherData.current.astro.sunrise}</div>
                <div>🌇 Sunset: {weatherData.current.astro.sunset}</div>
                <div>🌔 Moonrise: {weatherData.current.astro.moonrise}</div>
                <div>🌘 Moonset: {weatherData.current.astro.moonset}</div>
                <div>🌖 Moon Phase: {weatherData.current.astro.moon_phase}</div>
                <div>💡 Moon Illumination: {weatherData.current.astro.moon_illumination}%</div>
              </div>
            </div>
          )}

          {weatherData.current.air_quality && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">🏭 Air Quality</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <div>CO: {weatherData.current.air_quality.co}</div>
                <div>NO₂: {weatherData.current.air_quality.no2}</div>
                <div>O₃: {weatherData.current.air_quality.o3}</div>
                <div>SO₂: {weatherData.current.air_quality.so2}</div>
                <div>PM2.5: {weatherData.current.air_quality.pm2_5}</div>
                <div>PM10: {weatherData.current.air_quality.pm10}</div>
                <div>US EPA Index: {weatherData.current.air_quality["us-epa-index"]}</div>
                <div>GB DEFRA Index: {weatherData.current.air_quality["gb-defra-index"]}</div>
              </div>
            </div>
          )}

          <p className="mt-4 text-xs text-gray-500">
            Last updated at {weatherData.location.localtime}
          </p>
        </div>
      )}

      
    </div>
  );
};

export default WeatherPage;
