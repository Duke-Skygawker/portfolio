import React from "react";
import ReactDOM from "react-dom/client";
import AppContext from "./context/Context";
import App from "./App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
