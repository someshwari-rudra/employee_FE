import React from "react";
import Routers from "./routers";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
