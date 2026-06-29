import { createSearchForm } from "./search.js";

/**
 * Creates an HTML element with specified attributes and properties.
 * @param {Object} options - Configuration options.
 * @param {string} [options.tag='div'] - HTML tag name.
 * @param {Object} [options.attributes] - Key-value pairs of HTML attributes.
 * @param {string} [options.classNames] - Space-separated CSS class names.
 * @param {string} [options.textContent] - Text content of the element.
 * @param {HTMLElement} [options.parent] - Parent node to append to. Defaults to #root element.
 * @returns {HTMLElement} The created element.
 */
export function createNode(options = {}) {
  const node = document.createElement(options.tag || "div");
  if (options.textContent !== undefined) node.textContent = options.textContent;

  if (options.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
  }

  if (options.classNames?.length > 0) {
    options.classNames.split(" ").forEach((className) => {
      node.classList.add(className);
    });
  }

  if (options.parent) {
    options.parent.appendChild(node);
  } else {
    document.querySelector("#root").appendChild(node);
  }

  return node;
}

async function loadImage(name, ext) {
  const imageModule = await import(`./icons/${name}.${ext}`);
  const image = imageModule.default;
  console.log(image);
  return image;
}

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

export function renderUI(root, data) {
  root.textContent = "";
  createSearchForm(root);
  createWeatherCard(root, data);
  createWeatherSummary(root, data);
  createWeatherForecast(root, data);
  console.log(data);
}
