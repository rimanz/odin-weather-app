import { createWeatherForecast } from "./forecast.js";
import { createSearchForm } from "./search.js";
import { createWeatherCard } from "./weatherCard.js";
import { createWeatherSummary } from "./weatherSummary.js";

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

export async function loadImage(name, ext) {
  const imageModule = await import(`../icons/${name}.${ext}`);
  const image = imageModule.default;
  console.log(image);
  return image;
}

export function renderUI(root, data) {
  root.textContent = "";
  createSearchForm(root);
  createWeatherCard(root, data);
  createWeatherSummary(root, data);
  createWeatherForecast(root, data);
  console.log(data);
}
