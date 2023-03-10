import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
