import { createNode, renderUI } from "./layout.js";
import { createLoder } from "./loader.js";
import getWeatherData from "./weather.js";

export function createSearchForm(parentNode) {
  const form = createNode({
    tag: "form",
    classNames: "search-form",
    parent: parentNode,
  });

  const searchField = createNode({
    tag: "input",
    attributes: {
      name: "search",
      type: "search",
      placeholder: "Search for a location or city",
    },
    classNames: "search-field",
    parent: form,
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createLoder(parentNode);
    getWeatherData(searchField.value).then((data) => {
      renderUI(parentNode, data);
    });
  });

  return form;
}
