import React from "react";
import Footer from "./components/Footer/Footer";
import Quote from "./components/Quote/Quote";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app_mainpage">
        <Header />
        <Quote />
        <Footer />
      </div>
    </div>
  );
}

export default App;
