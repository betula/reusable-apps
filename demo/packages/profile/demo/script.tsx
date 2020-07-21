import React from "react";
import { render } from "react-dom";
import { App as Layout } from "layout";
import { App } from "../.";

render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById("root")
);
