import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ConcertDetail from "./pages/ConcertDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <HomePage />
    <ConcertDetail />
  </StrictMode>,
);
