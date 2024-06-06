import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import GlobalState, { GlobalContext } from "./Components/context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalState>
        <App />
      </GlobalState>
    </ChakraProvider>
  </React.StrictMode>
);
