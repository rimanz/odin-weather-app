import { createNode, loadImage } from "./layout.js";

export function createWeatherForecast(parentNode, data) {
  const forecast = createNode({
    tag: "section",
    classNames: "weather-forecast",
    parent: parentNode,
  });

  // Section Heading
  createNode({
    tag: "h2",
    textContent: "Next 6 days",
    classNames: "section-heading",
    parent: forecast,
  });

  // Forecast Grid
  const forecastGrid = createNode({
    classNames: "forecast-grid",
    parent: forecast,
  });

  // Forecast Items
  data.days.slice(1).forEach((day) => {
    const card = createNode({
      classNames: "forecast-card",
      parent: forecastGrid,
    });

    // Week day
    createNode({
      tag: "p",
      textContent: new Date(day.dateTimeEpoch * 1000).toLocaleDateString("en", {
        weekday: "long",
      }),
      classNames: "info-label",
      parent: card,
    });

    // Icon
    const icon = createNode({
      tag: "img",
      attributes: {
        alt: day.icon,
      },
      classNames: "weather-icon-sm",
      parent: card,
    });

    loadImage(data.current.icon, "svg").then((url) => {
      icon.src = url;
    });

    // Temperature
    createNode({
      tag: "p",
      textContent: `${day.temp} °C`,
      classNames: "forecast-temp",
      parent: card,
    });

    // Max temperature
    createNode({
      tag: "p",
      textContent: `${day.tempMax} °C`,
      classNames: "temp-max",
      parent: card,
    });

    // Min temperature
    createNode({
      tag: "p",
      textContent: `${day.tempMin} °C`,
      classNames: "temp-min",
      parent: card,
    });
  });

  return forecast;
}
