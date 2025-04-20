import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* Embed your chat widget via iframe */}
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "420px",
      height: "480px",
      border: "none",
      zIndex: 1000,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: "16px",
      overflow: "hidden"
    }}>
      <iframe
        src="https://aquamarine-lolly-a3be50.netlify.app"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Unit Assistant Chat Widget"
      ></iframe>
    </div>
  </React.StrictMode>
);
