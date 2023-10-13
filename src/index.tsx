import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout children={undefined} />
  </React.StrictMode>,
  document.getElementById("root")
);
