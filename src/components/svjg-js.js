import React, { useRef, useState } from "react";
import "./svg-js.scss";

function randomColor() {
  return (
    "#" + ("000000" + ((Math.random() * 0xffffff) << 0).toString(16)).slice(-6)
  );
}

const SvgJs = () => {
  const svg = useRef(null);
  const [circles, setCircles] = useState([]);

  return (
    <div>
      <p>{circles.length} círculos</p>
      <button
        onClick={() =>
          setCircles([
            ...circles,
            {
              cx: Math.floor(Math.random() * 500),
              cy: Math.floor(Math.random() * 500),
              color: randomColor()
            }
          ])
        }
      >
        Criar círculo
      </button>
      <svg
        ref={svg}
        className="container"
        width="500"
        height="500"
        viewBox="0 0 500 500"
      >
        {circles.map(circle => (
          <Circle {...circle} />
        ))}
      </svg>
    </div>
  );
};

const Circle = ({ cx, cy, color }) => (
  <svg className="circle">
    <circle r="20" cx={cx} cy={cy} fill={color}>
      <animate
        attributeName="r"
        begin="0s"
        dur="1s"
        repeatCount="indefinite"
        from="0%"
        to="100%"
      />
    </circle>
  </svg>
);

export default SvgJs;
