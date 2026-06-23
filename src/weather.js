import fetchWeatherData from "./api.js";

export default async function getWeatherData(location) {
  const {
    currentConditions,
    days,
    address,
    resolvedAddress,
    timezone,
    tzoffset,
  } = await fetchWeatherData(location);

  const weatherObj = {
    current: {
      conditions: currentConditions.conditions,
      temperature: currentConditions.temp,
      feelsLike: currentConditions.feelslike,
      dew: currentConditions.dew,
      humidity: currentConditions.humidity,
      pressure: currentConditions.pressure,
      uvIndex: currentConditions.uvindex,
      visibility: currentConditions.visibility,
      windDirection: currentConditions.winddir,
      windSpeed: currentConditions.windspeed,
      icon: currentConditions.icon,
      dateTimeEpoch: currentConditions.datetimeEpoch,
    },
    days: days.slice(0, 7).map((d) => {
      return {
        dateTimeEpoch: d.datetimeEpoch,
        temp: d.temp,
        tempMax: d.tempmax,
        tempMin: d.tempmin,
        icon: d.icon,
      };
    }),
    address,
    resolvedAddress,
    timezone,
    tzoffset,
  };

  return weatherObj;
}
