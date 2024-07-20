import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchProvider } from "./context/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
