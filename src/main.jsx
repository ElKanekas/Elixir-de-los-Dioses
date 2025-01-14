import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Vino } from "./cards1.jsx";
import { FooterCards } from "./footer.jsx";
import "./cards.css";

createRoot(document.getElementById("root")).render(
  <>
    <Vino />
    <FooterCards />
  </>
);
