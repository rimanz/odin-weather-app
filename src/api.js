export default async function fetchWeatherData(location) {
  const key = "HFJ9WVN7BJ6LDL4YHHS3MEV3W";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&include=days%2Ccurrent&key=${key}&contentType=json`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
