import React from "react";
import { TimelineLite } from "gsap/TweenMax";
import Starbucks from "./components/starbucks";
import Github from "./components/github";
import LineChart from "./components/charts/line";
import SVGINJS from "./components/svjg-js";
import "./App.scss";

const randomArray = (total = 10) =>
  [...Array(total).keys()].map(value => ({
    x: value,
    y: Math.floor(Math.random() * 50) + 50
  }));

function App() {
  const elementsRef = [];
  const elements = [0, 1, 2, 3, 4, 5, 6];
  const myTween = new TimelineLite({
    paused: true,
    onComplete: () => myTween.reverse(0)
  });

  const play = () =>
    myTween.staggerTo(elementsRef, 0.2, { x: 80, autoAlpha: 0 }, 0.3).play();

  return (
    <div className="App">
      <LineChart data={randomArray()} />
      <button onClick={play}>Play animation</button>
      {elements.map((element, index) => (
        <div
          key={element}
          ref={el => (elementsRef[index] = el)}
          className="animate"
        >
          {`ANIMATE ${element}`}
        </div>
      ))}

      <h1>SVG</h1>
      <SVGINJS />
      <Starbucks />
      <Github />
    </div>
  );
}

export default App;
