import { createNode, loadImage } from "./layout.js";

export function createLoder(parentNode) {
  const img = createNode({
    tag: "img",
    attributes: {
      alt: "loading weather data",
    },
    classNames: "loading-icon",
    parent: parentNode,
  });

  loadImage("loading-icon", "gif").then((url) => (img.src = url));
}
