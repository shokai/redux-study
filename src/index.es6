import "babel-polyfill"

require("insert-css")(require("./styl/index.styl"));

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {store} from "./store";

ReactDOM.render(<App store={store} />, document.getElementById("app"));
