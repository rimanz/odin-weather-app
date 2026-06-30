import { createNode } from "./layout.js";

export function showError(parentNode, errorMessage) {
  console.dir(errorMessage);
  const errorTokens = errorMessage.split(":");

  const errorOutput = createNode({
    classNames: "error-msg",
    parent: parentNode,
  });

  createNode({
    tag: "h3",
    textContent: errorTokens[0],
    parent: errorOutput,
  });

  createNode({
    tag: "p",
    textContent: errorTokens[1],
    parent: errorOutput,
  });

  return errorOutput;
}
