import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Hero from "./component/Hero";
import Counter from "./component/Counter";
import HelloWorld from "./component/HelloWorld";
import Clock from "./component/Clock";
import BeautifulClock from "./component/BeautifulClock";
import Cat from "./component/Cat";
import Country from "./component/Country";
import Character from "./component/Character";

function App() {
  return (
    <div className="app">
      
      <Character />


      {/* <Cat /> */}
      {/* <Country /> */}


      {/* <Clock /> */}
      {/* <BeautifulClock /> */}

    </div>
  );
}

export default App;
