import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RHF from "./components/RHF.jsx";

createRoot(document.getElementById("root")).render(<RHF />);
