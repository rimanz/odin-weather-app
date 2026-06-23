import "./styles.css";
import getWeatherData from "./weather.js";

getWeatherData("Dhaka").then((data) => console.log(data));
