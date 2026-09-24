import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { applySiteTheme } from "./lib/theme";

applySiteTheme();

createRoot(document.getElementById("root")!).render(<App />);
