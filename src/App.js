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
  // const [count, setCount] = useState(0);

  // const handleHeroClick = () => {};

  return (
    <div className="app">
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Hero name="test" onClick={handleHeroClick} />
      <Counter /> */}
      {/* <HelloWorld /> */}


      <Character />


      {/* <Cat /> */}
      {/* <Country /> */}


      {/* <Clock /> */}
      {/* <BeautifulClock /> */}
    </div>
  );
}

export default App;
