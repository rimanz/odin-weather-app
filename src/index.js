import {
  createWeatherCard,
  createWeatherForecast,
  createWeatherSummary,
} from "./layout.js";
import "./styles.css";
import getWeatherData from "./weather.js";

const root = document.getElementById("root");

getWeatherData("Dhaka").then((data) => {
  createWeatherCard(root, data);
  createWeatherSummary(root, data);
  createWeatherForecast(root, data);
  console.log(data);
});
