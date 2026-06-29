import { createNode } from "./layout.js";

export function createWeatherSummary(parentNode, data) {
  const selectedInfo = [
    "dew",
    "humidity",
    "pressure",
    "uvIndex",
    "visibility",
    "windSpeed",
  ];

  const selecedInfoLabel = [
    "Dew",
    "Humidity",
    "Pressure",
    "UV Index",
    "Visibility",
    "Wind Speed",
  ];

  const summary = createNode({
    tag: "section",
    classNames: "weather-summary",
    parent: parentNode,
  });

  // Section Heading
  createNode({
    tag: "h2",
    textContent: "Weather Summary",
    classNames: "section-heading",
    parent: summary,
  });

  // Summary Grid
  const summaryGrid = createNode({
    classNames: "summary-grid",
    parent: summary,
  });

  // Summary Items
  selectedInfo.forEach((info, index) => {
    const card = createNode({
      classNames: "weather-info-card",
      parent: summaryGrid,
    });

    // Info label
    createNode({
      tag: "p",
      textContent: selecedInfoLabel[index],
      classNames: "info-label",
      parent: card,
    });

    // Info value
    createNode({
      tag: "p",
      textContent: data.current[info],
      classNames: "info-value",
      parent: card,
    });
  });

  return summary;
}
