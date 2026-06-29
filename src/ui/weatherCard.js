import { createNode, loadImage } from "./layout.js";

export function createWeatherCard(parentNode, data) {
  const card = createNode({
    tag: "section",
    classNames: "weather-card",
    parent: parentNode,
  });

  // Weather Icon
  const weatherIcon = createNode({
    tag: "img",
    attributes: {
      alt: data.current.icon,
    },
    classNames: "weather-icon",
    parent: card,
  });

  loadImage(data.current.icon, "svg").then((url) => {
    weatherIcon.src = url;
  });

  // Current Temperature
  createNode({
    tag: "h2",
    textContent: `${data.current.temperature} °C`,
    classNames: "temperature",
    parent: card,
  });

  // Weather Condition
  createNode({
    tag: "p",
    textContent: data.current.conditions,
    classNames: "weather-condition",
    parent: card,
  });

  // Feels Like Temperature
  createNode({
    tag: "p",
    textContent: `Feels like ${data.current.feelsLike} °C`,
    classNames: "feels-like",
    parent: card,
  });

  // Location
  createNode({
    tag: "p",
    textContent: data.resolvedAddress,
    classNames: "location meta-data",
    parent: card,
  });

  // Timestamp
  createNode({
    tag: "p",
    textContent: new Date(data.current.dateTimeEpoch * 1000),
    classNames: "timestamp meta-data",
    parent: card,
  });

  return card;
}
