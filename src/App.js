import React from "react";

import { Video, Footer, Header } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Video />
      <Pricing />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
