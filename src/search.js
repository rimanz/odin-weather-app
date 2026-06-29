import { createNode, renderUI } from "./layout.js";
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
      type: "search",
      placeholder: "Search for a location or city",
    },
    classNames: "search-field",
    parent: form,
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(searchField.value);
    getWeatherData(searchField.value).then((data) => {
      renderUI(parentNode, data);
    });
  });

  return form;
}
