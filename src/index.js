import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled";
import { PetmoStyleProvider } from "petmo-design-system";

if (process.env.REACT_APP_RUN_MODE === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <PetmoStyleProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PetmoStyleProvider>
    </RecoilRoot>
  </React.StrictMode>
);
