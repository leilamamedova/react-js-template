import React from "react";

import App from "App";
import ReactDOM from "react-dom";

import { Wrapper } from "components/wrappers";

import "assets/styles/index.css";

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root"),
);
