import React from "react";

import { Video, Footer, Header } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Video />
      <Footer />
    </div>
  );
};

export default App;
