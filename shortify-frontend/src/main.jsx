import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Only include BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
