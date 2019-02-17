import React from "react";
import "./line.scss";

function getMinX(data) {
  const only_x = data.map(obj => obj.x);
  const min_x = Math.min.apply(null, only_x);
  return min_x;
}
function getMinY(data) {
  const only_y = data.map(obj => obj.y);
  const min_y = Math.min.apply(null, only_y);
  return min_y;
}
function getMaxX(data) {
  const only_x = data.map(obj => obj.x);
  const max_x = Math.max.apply(null, only_x);
  return max_x;
}
function getMaxY(data) {
  const only_y = data.map(obj => obj.y);
  const max_y = Math.max.apply(null, only_y);
  return max_y;
}

function getSvgX(x, width, data) {
  console.log(x, width, data);
  return (x / getMaxX(data)) * width;
}
function getSvgY(y, height, data) {
  return height - (y / getMaxY(data)) * height;
}

function makePath(data, width, height) {
  console.log(data, width, height);
  let pathD = ` M  ${getSvgX(data[0].x, width, data)} ${getSvgY(
    data[0].y,
    height,
    data
  )} `;

  pathD += data.map((point, i) => {
    return `L ${getSvgX(point.x, width, data)} ${getSvgY(
      point.y,
      height,
      data
    )}  `;
  });

  return pathD;
}

function makeAxis(data, width, height) {
  const minX = getMinX(data);
  const maxX = getMaxX(data);
  const minY = getMinY(data);
  const maxY = getMaxY(data);
  return (
    <g className="linechart_axis">
      <line
        x1={getSvgX(minX, width, data)}
        y1={getSvgY(minY, height, data)}
        x2={getSvgX(maxX, width, data)}
        y2={getSvgY(minY, height, data)}
      />
      <line
        x1={getSvgX(minX, width, data)}
        y1={getSvgY(minY, height, data)}
        x2={getSvgX(minX, width, data)}
        y2={getSvgY(maxY, height, data)}
      />
    </g>
  );
}

const Line = ({ data, color, svgHeight, svgWidth }) => {
  console.log("DATAA", data);
  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <path
        className="linechart_path"
        d={makePath(data, svgWidth, svgHeight)}
      />
      {makeAxis(data, svgWidth, svgHeight)}
    </svg>
  );
};

Line.defaultProps = {
  data: [],
  color: "#ff4500",
  svgHeight: 200,
  svgWidth: 600
};

export default Line;
