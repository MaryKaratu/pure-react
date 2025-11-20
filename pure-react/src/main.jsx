import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Tweet from "./Tweet.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tweet />
  </StrictMode>
);
