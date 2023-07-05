import React from "react";

import App from "App";
import { createRoot } from "react-dom/client";

import { Wrapper } from "components/wrappers";

import "assets/styles/index.css";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
  </Wrapper>,
);
