import React from "react";

export default () => (
  <div>
    <h1>Viewport e viewbox</h1>
    <svg
      width="30"
      height="10"
      viewBox="0 0 30 10"
      style={{ border: "1px solid red" }}
    >
      <circle r="25" cx="150" cy="50" />
    </svg>
    <h1>Formas básicas</h1>

    <h2>Rect</h2>
    <svg>
      <rect x="50" y="50" width="50" height="50" />
    </svg>

    <h2>Circle</h2>
    <svg>
      <circle r="25" cx="70" cy="70" />
    </svg>

    <h2>Ellipse</h2>
    <svg>
      <ellipse rx="100" ry="50" cx="150" cy="75" />
    </svg>

    <h2>Line</h2>
    <svg>
      <line x1="10" y1="10" x2="100" y2="120" stroke="green" stroke-width="4" />
    </svg>
    <h2>Polyline</h2>
    <svg>
      <polyline
        points="0,40 40,40 40,80 80,80"
        fill="transparent"
        stroke="red"
        stroke-width="2"
      />
    </svg>

    <h2>Polygon</h2>
    <svg>
      <polygon
        points="50,5 100,5 125,30 125,80 100,105"
        stroke="red"
        stroke-width="2"
        fill="black"
      />
    </svg>

    <h2>Path</h2>
    <svg>
      <path
        stroke="black"
        stroke-width="1"
        fill="none"
        d="M40,20 L40,80 A30,30 0 0,0 100,100z"
      />
    </svg>

    <h2>Elementos containers</h2>

    <h3>Defs</h3>
    <svg>
      <defs>
        <circle id="meu-circulo" r="25" cx="150" cy="50" />
      </defs>

      <use xlinkHref="#meu-circulo" />

      <use xlinkHref="#meu-circulo" x="80" fill="red" />
    </svg>

    <h3>Group</h3>
    <svg>
      <g fill="green">
        <circle id="meu-circulo" r="25" cx="150" cy="50" />
        <circle id="meu-circulo" r="25" cx="220" cy="50" />
      </g>
    </svg>

    <h3>Symbol</h3>

    <svg>
      <symbol id="simbolo-circulo" viewBox="0 0 600 300">
        <circle r="25" cx="150" cy="50" />
      </symbol>

      <use xlinkHref="#simbolo-circulo" />
      <use xlinkHref="#simbolo-circulo" x="80" fill="red" />
    </svg>
  </div>
);
