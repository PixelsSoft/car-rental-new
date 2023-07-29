import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "reactjs-popup/dist/index.css";
import { Provider } from "react-redux";
import store from "./redux/reducers";

/* eslint-disable */
console.log( 'JavaScript debug log' );
console.log( 'eslint is disabled now' );

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
