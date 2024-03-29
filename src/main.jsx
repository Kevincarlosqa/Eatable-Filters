import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
