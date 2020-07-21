import React from "react";
import { render as reactRender } from "react-dom";
import { App } from "./components/app";

export {
  App,
  render,
}

function render(element, props = {}) {
  reactRender(<App {...props} />, element);
}
