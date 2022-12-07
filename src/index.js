import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TeamProvider from "./store/TeamProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TeamProvider>
      <App />
    </TeamProvider>
  </React.StrictMode>
);

export default App;
