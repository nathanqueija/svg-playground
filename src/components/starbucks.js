import React, { Component } from "react";
import "./starbucks.scss";

export default class Starbucks extends Component {
  render() {
    return (
      <svg
        className="container"
        viewBox="0 0 612 792"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="detalhe-externo">
          <path
            id="green_b"
            fill="#067655"
            d="M4.9,396C4.9,229.5,139.5,94.9,306,94.9S607.1,229.8,607.1,396
        c0,166.5-134.9,301.1-301.1,301.1C139.5,697.1,4.9,562.5,4.9,396"
          />
          <path
            id="white_b"
            fill="#FFFFFF"
            d="M13.8,396c0-161.6,130.7-292.2,292.2-292.2c161.6,0,292.2,131,292.2,292.2
        c0,161.6-131,292.2-292.2,292.2C144.4,688.2,13.8,557.6,13.8,396"
          />
        </g>
        <g id="circulo-verde">
          <path
            fill="#067655"
            d="M23.3,396c0-156.1,126.7-282.7,282.7-282.7c156.1,0,282.7,126.7,282.7,282.7
        c0,156.1-126.7,282.7-282.7,282.7C149.9,678.7,23.3,552.1,23.3,396"
          />
        </g>
        <g id="textos">
          <path
            id="STARBUCKS"
            fill="#FFFFFF"
            d="M385.9,147.2c-4.9,14.4-11.6,28.8-15.3,44.1c-0.3,3.7,1.8,7.6,6.1,8.9
        c3.1,1.5,7.3,1.8,9.5,0c9.8-13.5,14.4-30.6,20.2-45.6c7.6,2.8,13.8,6.4,21.1,9.5c-8,16.8-12.9,36.7-23.9,50.8c-8,7-20.5,5.2-30,3.1
        c-11-4-22.6-11-26-23.3c-2.4-8.3,9.2-37,15.3-54.5L385.9,147.2 M252.5,181.2c2.8-3.4,3.7-7.3,4.9-11.3c0-6.1-0.6-13.2-5.2-18.1
        c-17.4-18.1-45.6,1.2-64.9,9.2c7.6,19.3,18.1,43.5,26.6,64.3l20.8-11.3l-8-17.4c2.8-1.2,4.9-3.1,7.6-3.4c6.7,4.6,11.3,9.2,19,15.3
        l22-4.9l0.9-0.3C269,196.5,258.3,188.2,252.5,181.2z M231.6,176.3l-12.2,5.2c-3.1-5.5-4.3-9.5-6.4-13.8c5.5-2.1,15.3-10.4,19.9-1.2
        C234.1,169.6,234.4,174.5,231.6,176.3z M341.2,179.7c-0.6-6.4-5.5-10.1-10.4-13.5c4-3.1,6.4-7.3,7.6-11.6
        c0.3-6.1-1.2-11.9-5.8-16.2c-16.5-8.3-38.6-3.4-57.5-3.4v1.5l3.1,64.6l0.3,2.4l28.5-0.6c10.7-0.3,22.6,1.8,30-6.7
        C340.9,191.6,342.7,185.8,341.2,179.7z M299.3,147.5c4.3,0.6,11.3-1.5,14.4,1.8c1.8,1.8,1.2,5.5,0.3,7.6c-3.1,3.7-9.2,3.7-14.1,3.1
        C300.5,156.1,299,151.8,299.3,147.5z M312.7,187c-4,0.6-6.7,0.3-11,0.3c-0.6-4.3-0.9-10.4-0.6-14.1c5.5,0.6,14.1-2.4,16.8,4
        C318.9,181.8,316.7,186.1,312.7,187z M483.2,201.4c4.3,5.2,7,11.6,8.9,18.1c-5.2,2.8-9.2,5.8-14.1,8c-1.2-7.6-5.5-15.3-12.9-19
        c-3.7-2.1-8.9-2.4-12.9-1.2c-6.1,2.4-11.6,7.6-14.1,14.1c-2.1,6.1,0.3,11.9,3.7,16.5c4.9,5.5,11,8.3,18.4,8.6
        c-3.4,5.2-4.9,8.6-8,12.9c-11.9-1.8-23.3-8.3-30-19.6c-5.8-9.5-6.1-23.9-1.2-33.7c5.5-11,15.9-17.7,27.5-19.6
        C462.4,185.8,474.9,191.3,483.2,201.4 M149.9,187.6l-2.1-1.2l-25.7,22.3l28.2,67.3l1.2,2.8l15.9-17.7c-1.8-4.9-4.3-10.4-6.1-14.7
        l17.7-15c4.3,2.1,8,4.3,14.1,7.3l16.2-10.7l2.1-1.5C190.9,214.5,170.1,200.2,149.9,187.6z M153.9,230.8c-3.1-7-5.8-13.2-8.9-20.8
        c7,3.7,13.2,8,19.9,12.2C161.9,224.9,158.2,227.7,153.9,230.8z M519.9,244.5c-5.5,5.5-13.2,10.4-19,15.9c9.5,2.1,20.2,1.8,30,3.4
        c4.3,6.4,6.7,12.5,11,20.2l-36.1-2.4c-8,12.5-15.3,25.1-22,38.2c-4.3-6.1-7.7-14.4-11.6-21.4c4.6-9.5,10.7-19.3,15.3-28.8
        c-8,4.9-15,11.3-23.3,16.5L451.3,269c17.1-14.7,35.5-27.8,53.6-41l1.5-0.6L519.9,244.5 M115.7,239.9c-3.4,6.7-7.6,11.3-10.4,17.7
        l41.9,27.5c-2.1,6.1-7,12.2-11,18.4l-42.8-26.9c-4,5.2-6.7,10.4-10.4,16.8c-5.5-3.7-9.5-6.1-14.1-9.5
        c10.7-17.7,20.8-34.3,32.4-52.9L115.7,239.9 M76.2,307c-7.6,5.8-12.9,14.4-11.3,24.2c0.9,1.5,1.8,3.7,3.7,4c6.1,0,8.3-6.7,11-10.7
        c3.4-7.3,9.8-15.3,18.4-16.2c7.3-0.6,13.8,1.5,18.7,7.3c7.3,8.9,6.1,23.3,2.4,33.7c-3.4,7.6-8.6,15.6-15.9,20.5l-13.2-8
        c7.3-4.9,14.7-13.2,15.9-22.3c0-3.4-0.6-7.6-4.9-8c-8.6,2.4-9.2,12.5-15,18.4c-4.3,4.6-9.8,8-16.8,7c-6.4-0.3-11.9-4.3-15.9-9.5
        c-7.3-11-3.7-27.2,0.6-35.5c2.8-4.9,5.8-9.5,10.4-13.2C68.2,300.5,72.5,303.9,76.2,307 M555.7,316.4c6.4,10.4,8.9,23.9,5.5,36.4
        l-13.5-0.6c1.8-8.3,3.1-18.4-2.4-25.4c-1.8-2.1-4.9-3.4-7-2.1c-7.3,8.3,0.6,20.2-4,29.7c-2.1,4.3-5.5,9.5-10.4,11.3
        c-7.7,3.1-17.1,1.5-23.3-4.3c-11.6-11.9-16.8-30.6-9.5-46.2h14.4c-2.4,6.1-4.3,14.7-1.8,22c1.2,3.1,2.8,7,6.1,8
        c11.6,0.3,3.7-16.5,6.7-24.2c1.2-5.8,4.3-11.9,10.4-14.7C537.6,300.8,550.8,307,555.7,316.4"
          />
          <path
            id="COFFEE"
            fill="#FFFFFF"
            d="M176.9,539.2c1.5,3.7,3.7,6.4,4.6,11.6c-4,2.4-8.9,4.6-13.5,6.7c-1.2-8-8.3-15.9-16.2-18.1
        c-6.7-1.5-13.8,1.5-18.7,7.3c-4,4.9-5.2,11.6-4,17.7c3.1,8.3,11.9,14.7,20.8,14.7h2.4c-2.4,5.8-4,8.9-6.7,13.2
        c-14.7-0.6-29.7-9.2-35.2-23.6c-4.9-11.6-2.8-26.6,4.9-36.4c9.2-11.6,23.6-14.7,37.3-11.6C162.5,523.3,171.1,530.3,176.9,539.2
         M462.1,531.6l0.9,0.9l-22,20.5l7.3,8.9c6.1-4.9,12.9-10.1,19.6-16.2c3.4,2.8,6.1,6.1,9.5,10.1c-6.7,6.4-13.5,10.7-19.3,16.5
        c2.4,3.1,4.3,6.4,8,10.1l23.9-19.6l10.1,10.4c-13.5,12.9-28.2,26-42.2,36.1l-41.6-53.5c13.2-11,24.5-21.1,36.1-32.7
        C456.2,525.1,458.7,528.2,462.1,531.6 M228.6,576.5c-7.6-11.3-21.1-18.1-35.5-17.1c-14.1,1.8-27.8,11.9-31.5,26
        c-4.3,12.9,0.3,26.3,8.9,35.5c9.5,9.2,22,13.5,35.2,11.3c11-2.4,20.8-9.5,26-20.5C236.2,601,235.9,586,228.6,576.5z M205.9,611.4
        c-4.3,3.4-9.8,5.5-15.6,3.4c-3.7-1.8-8-4.9-8.9-8.6c-2.8-9.8,1.8-19,8.6-25.7c4.3-3.4,10.1-5.5,15.3-3.1c3.1,0.9,6.7,4.6,7.6,7.7
        C217.3,595.2,212.7,604.7,205.9,611.4z M359.2,601c-10.4,1.5-20.2,2.8-30,4.3c0.9,4.9,0.6,8,1.2,11.6c9.2-0.3,17.1-1.8,25.7-3.1
        l2.4,15.6c-8.3,1.5-17.4,3.1-26.3,3.7c0.3,7,1.2,15.9,1.2,23.6c-7.3,1.2-15,1.8-22.3,1.5l-4.3-67v-1.5c16.5-1.5,33.4-3.7,49.3-6.4
        C356.8,589.1,358.3,594.6,359.2,601 M415.5,570.7l0.6,1.2l-26.9,13.5l4.6,10.7c8.3-3.1,15.3-6.1,23.6-10.1
        c2.4,3.7,4.3,7.6,6.1,12.2c-7.3,4-15,7-23.3,10.4c1.5,3.7,2.1,6.1,4.9,11.9l28.2-12.2l6.7,12.9c-16.5,8.6-34.3,17.1-50.5,23
        l-24.8-63c15.9-6.7,29.4-13.5,43.8-21.4C411.6,563.4,413.1,567.1,415.5,570.7 M296.8,608.7c-10.1-1.8-19.9-3.7-29.7-4.9
        c-0.6,4.9-1.8,8-2.4,11.6c8.9,2.8,16.8,3.4,25.4,5.2l-2.4,15.6c-8.6-1.2-17.4-2.4-26.3-4.3c-1.8,6.7-3.7,15.3-6.1,23
        c-7.3-1.2-15-2.8-21.7-5.5l16.2-65.2l0.3-1.2c16.2,3.4,33,6.7,49,8.9C297.7,596.4,297.4,602.2,296.8,608.7"
          />
          <path
            id="star"
            fill="#FFFFFF"
            d="M89.7,442.5c7.3,0,14.7,0.3,22.3,0l-17.1,14.4c1.5,6.1,3.1,12.9,5.2,20.8l-16.8-11.6
        c-7,3.4-11.3,7.3-18.7,11l5.8-20.2c-5.5-4.6-11.9-8.9-17.1-13.5c7.6-0.3,14.4,0,21.7,0c3.4-6.4,4.9-13.8,8-20.2L89.7,442.5"
          />
          <path
            id="star_1_"
            fill="#FFFFFF"
            d="M534.6,442.5c7.3,0,14.1,0.3,22,0l-17.1,14.4c1.5,6.1,3.1,12.9,5.2,20.8l-16.8-11.6
        c-7,3.4-11.3,7.3-18.7,11l5.8-20.2c-5.5-4.6-11.9-8.9-17.1-13.5c7.6-0.3,14.4,0,21.7,0c3.1-6.7,5.2-13.2,8-20.2L534.6,442.5"
          />
        </g>
        <g id="logo">
          <path
            id="inner"
            fill="#FFFFFF"
            d="M131.3,394.8c0-96.1,78-174.1,174.1-174.1c96.1,0,174.1,78,174.1,174.1
        c0,96.1-78,174.1-174.1,174.1C209.3,568.9,131.3,490.9,131.3,394.8"
          />
          <path
            id="inner_artwork"
            fill="#010101"
            d="M304.5,289.8c5.8,3.4,11.9,7.6,16.5,12.2l-1.8,1.8c-9.2-0.9-19,0.3-27.5,0.3
        c-0.9-0.9-3.1-2.4-1.2-3.7L304.5,289.8z M467,403.7c0,4.3,0.6,7.6-1.2,11.9c-16.8,4.9-27.8-12.9-44.1-10.4l1.8,9.2
        c15,0.6,24.5,15,40.1,14.4c-2.1,4.3,0.9,15.9-8.9,11.3c-10.1-2.4-17.4-11.3-28.8-11.3c-1.2,2.4-0.6,5.8-0.6,8.9
        c11.6,1.8,20.2,11.6,31.8,13.5c-1.2,4-2.1,8.6-5.5,11c-9.5-2.4-17.1-11-27.2-10.7l-1.8,8.6c9.8,0.3,15.9,8.9,24.5,11.3
        c0.3,3.7-3.1,6.7-4.9,9.8c-7.6-2.4-13.5-8.9-22.3-8.6c0-3.4,1.8-7,1.2-10.7c-9.8,3.1-16.5-6.1-23.9-11.6
        c-0.3-18.1-19.3-30-20.2-46.8c-0.3-3.4,0.3-7,1.8-10.7c6.1-14.4,4.3-33-2.4-46.5c-2.1-3.7-5.8-6.4-9.2-8.6c4.9,10.7,11,23.3,8,36.4
        c-0.3,10.1-6.4,19.9-6.4,29.7c0,3.4,0.6,7,2.8,10.4c8,14.4,22.3,27.8,16.8,45.9c-1.5,5.5-5.8,9.8-7,15.3
        c9.2,7.7,18.1,16.5,30.6,16.8c4.3-2.8,1.8-15.3,11-9.5l13.2,6.7c-0.9,3.7-4,6.7-6.7,9.2c-4.9-2.4-9.8-5.5-16.2-5.2
        c-1.8,1.8-3.4,4.3-3.4,7c4.3,0.6,8.6,2.4,12.2,5.2c-1.8,3.7-4.9,6.1-8,8.9l-10.4-3.7c-1.8,2.4-5.2,4.9-4,7.7c2.4,0.9,4.9,2.4,6.7,4
        c-4.6,4.9-10.4,8-15.9,11.3c-4.9-15.6-20.5-26.3-19-44.4l-0.6-0.6c-3.7,4.3-2.4,10.7-2.1,16.2c4.3,11.3,15,19.9,16.5,32.4
        c-1.8,3.1-6.1,3.7-9.2,5.2c0.3-22.3-33.4-39.2-11.6-61.8c7.3-11,19.3-21.4,15-36.7c-4.3-14.7-19.9-23.9-19.9-40.1v-1.2
        c3.7-17.1,14.4-35.5,5.5-53.6c-2.4-7.3-8-15.6-15.3-18.7c11,12.9,15.6,33.7,9.2,50.8c-3.1,6.7-7.7,15-8,22.9l0,0
        c-0.3,4.3,0.6,8.3,3.4,12.2c8.6,13.8,23.3,28.8,14.7,46.5c-9.5,14.4-26.3,28.8-16.8,47.7c6.7,11.3,17.1,22.6,14.4,36.4l-11,3.7
        c7.3-25.7-28.8-41-13.5-66.7c9.2-13.8,26-26.9,16.5-45.3c-5.5-11.3-17.1-18.1-16.8-32.4l0.3-2.4c3.7-20.2,19-39.2,8.3-60.9
        c-2.8-6.4-8.6-12.9-14.7-16.5l-0.3,0.3c12.5,12.2,16.2,32.1,9.5,48c-3.1,9.5-10.1,18.7-11.3,28.8c-0.6,4.9,0,9.8,2.8,15
        c8,12.5,22,26,13.2,42.2c-9.2,13.5-24.5,26.6-18.4,44.1c6.7,15.3,20.8,30,13.2,49l-11.3,2.4c9.2-18.4-4.6-36.7-12.5-52.9
        c-9.8-23,20.8-34,21.4-55.1c0-13.5-14.7-21.4-17.7-33.7c-6.1-5.2-12.9,2.1-20.2,0.6c-5.5,1.2-14.1-7.7-17.1,1.8
        c-4,13.8-21.7,23.9-14.1,40.4c7.3,14.7,25.4,25.1,19.6,44.1c-5.5,17.7-23.3,34.3-12.2,54.8c-4.6-1.5-12.9,1.2-12.9-5.8
        c-7-24.5,22.6-38.9,13.5-63.6c-4.3-15-23.9-23.3-19.6-41.6c3.1-15,19.9-25.4,17.4-41.6c-0.3-1.2-0.6-2.8-0.9-4.3
        c-6.1-17.7-19-35.2-11.3-55.7c2.1-5.8,6.1-11,9.8-16.2c-12.2,6.4-18.4,20.2-18.1,34.3c-0.6,15.3,10.7,28.2,12.2,41.9
        c0.6,5.5-0.3,11.3-4.3,17.4c-8,10.7-18.4,22-13.5,36.4c4.6,14.4,22.3,23,21.4,39.8c0,19.6-23,31.8-16.5,53.9l-11.3-3.7
        c-4.6-19.6,16.2-29.7,16.5-47.7c3.1-20.8-23.6-28.5-22-49c0-15.3,13.5-25.1,19.6-38.2c0.9-3.1,1.2-6.1,1.2-8.9
        c-0.6-14.4-13.8-25.7-11.6-41.6c0.6-11.9,4.9-22.3,12.5-31.2c-10.7,4.3-15,16.5-18.1,26.9c-5.2,16.5,7,31.2,8.3,46.2
        c0.6,6.4-0.9,13.2-7.3,19.6c-8.9,10.4-17.7,23.6-11.3,37.3c6.7,15.3,27.8,27.5,18.7,46.5c-4.9,12.2-17.1,21.4-16.5,35.5
        c-3.1-1.2-6.4-2.8-9.2-5.2c0-18.4,26-29.7,13.5-49c-1.2,3.7-1.2,8.9-2.1,13.2c-4.3,11-13.5,20.2-16.8,31.5
        c-5.8-2.1-11.6-6.7-16.5-11.6l6.7-4c-0.6-2.4-2.8-4.6-4.3-6.7c-4.3-0.6-7,2.1-10.7,3.4c-3.1-2.8-6.1-5.2-8.6-8.6
        c2.1-6.1,19.3-1.2,10.7-11.3c-5.8-3.7-11.6,1.5-16.8,4l-7-8.9c6.1-3.7,11.9-8.9,19.6-7.3c1.8,3.4,1.8,8.3,5.5,9.8
        c12.5-0.3,21.4-9.8,31.2-17.1c-6.7-10.1-12.2-23.9-6.1-36.1c4.9-12.2,17.1-22.3,17.7-35.8c0-3.1-0.3-6.1-1.8-9.8
        c-6.7-17.1-8.9-40.1,3.7-55.1c-6.7,1.8-11,10.4-13.2,16.8c-7.6,16.5,2.1,32.1,2.4,48c0,2.8-0.3,5.8-0.9,8.6
        c-6.4,13.2-17.1,24.5-18.7,39.8c-7.3,4.9-13.5,13.2-24.2,10.4c-0.3,2.8,0.6,7,1.5,10.4c-8.6-0.3-14.1,5.8-21.4,8.9
        c-3.7-1.2-4.9-6.1-6.1-9.5c8.3-2.8,14.4-11,23.9-11c1.2-3.1-0.6-5.8-1.2-8.9c-11.9-5.2-30.6,26-32.4-1.2
        c11.9-0.6,19.6-11.6,31.2-12.9l0.3-8.9c-13.5-1.2-22,12.2-35.2,11l-3.1-11.6c15.3,0.9,24.5-12.9,39.2-13.5c1.8-2.4,2.1-6.4,2.4-9.8
        c-15.9-2.1-26.9,15.6-44.1,10.4c0,0-0.6-7.3-0.9-11.6l0,0c0-1.5-0.3-2.8-0.3-2.8c15.3,5.8,28.5-4.9,41.6-10.7
        c3.4-0.9,8.6,0.6,9.8-3.1c0-2.8,4.9-6.1,0.6-8c-19-2.4-31.5,20.2-51.1,9.8l-0.9-2.8c4-55.1,35.2-108.6,86.9-134.9
        c21.1-11.9,47.1-18.1,73.4-18.4c31.8-0.3,63.6,8,87.5,24.8c23.3,14.1,45.3,37.6,57.2,61.2c11.6,20.8,16.8,44.1,18.4,69.2
        c-20.2,15.3-33.7-14.4-53.9-7.6c1.2,3.1,1.8,6.4,4,9.2c18.1,0,30.6,19,49.6,11.3V403.7z M236.2,335.7c-12.9-8.3-28.8-0.6-40.7,4
        c-1.2-11-5.5-21.4-15-28.8c-0.9-0.3-2.1-1.5-3.4-1.5c-0.6,0-1.2,0.3-1.8,1.2c4.3,26.3-12.9,44.7-25.1,64.6c4,3.4,10.4,2.8,15.3,1.8
        c12.9-5.2,25.1-14.1,40.4-11c4.6-7.7,12.2-15.3,18.4-21.4C228.3,341.5,233.5,339.4,236.2,335.7z M275.1,352.2
        c-0.3,1.5,0,4.3,2.4,3.4c3.7-5.2,10.4-1.2,14.7-0.6v-1.5c-2.1-3.7-7-5.5-11.6-5.2c-1.2,0-2.1,0.3-3.4,0.3
        C275.7,348.9,274.8,350.4,275.1,352.2z M335.1,336.3c-3.4-7.6-11.3-10.7-18.4-12.5c-3.4-0.3-7-0.6-10.7-0.6c-0.6,0-1.2,0-2.1,0
        c-10.1,0.3-19.6,2.8-25.4,11c-0.9,2.4-4.6,5.5-1.2,7.6c7.6-0.6,16.5-1.5,21.7,5.2c0,5.8,3.7,13.8-2.4,16.5
        c-5.2-4.9-11.6,2.1-17.1-1.8c-2.8-1.5-4.3,0.3-5.5,2.4c-1.5,15.3,6.4,31.8,20.5,40.4c5.8,2.1,13.5,4,19.6,1.2
        c14.4-6.7,20.5-22,23.3-36.4c-0.3-2.8-0.3-8-4-8c-4.3,2.8-10.4,1.2-15,0c-2.8,0.9-2.8,4.9-5.8,5.5l-1.8-1.5
        c-1.5-6.7-2.4-16.2,3.7-20.8c7-2.8,15.3-4,22.3-1.8C337.5,340.3,335.4,338.5,335.1,336.3z M327.7,348.6c-0.6,0-0.9,0-1.5,0
        c-2.4,1.8-10.1,0.6-7.3,6.1c4.6-3.7,11-1.2,15.9,0.6c1.8-0.9,1.2-2.4,1.5-4C334.8,348.6,331.1,348.3,327.7,348.6z M381,296.9
        c-9.2-0.6-16.5,4.6-25.1,7c-0.6-7,4.6-14.7,5.8-21.7c-13.5,0.9-24.2,8.9-35.2,15.3c-2.4-6.1-5.2-12.5-7.7-18.7l14.7-14.1l0.3-1.8
        l-19.9-1.2c-3.4-6.1-4.9-13.2-8.9-18.7c-3.4,6.1-5.5,12.9-8.9,19l-19.9,1.2v1.5l15,13.5c-1.8,7-3.7,14.7-8,19.9
        c-8.9-5.2-17.4-11-27.2-14.7c-2.4-0.6-5.5-1.8-7.6-0.3c3.1,6.7,7.3,14.1,6.7,21.4c-4-0.6-7.3-3.4-11-4.3c-4.6-1.2-9.8-3.7-14.4-2.1
        c7.3,10.4,13.5,21.1,15.3,33.4c24.5-11.6,52.9-18.4,82.3-13.2c13.8,2.1,26.6,8,38.9,12.5C367.2,317.7,375.5,307.3,381,296.9z
         M422.9,367.2c12.5,3.4,25.1,16.8,38.2,8c-11.6-19-28.8-36.7-23.9-61.8c0.6-1.8-0.6-3.4-2.1-3.7c-7.3,3.1-13.2,10.4-16.2,17.7
        c-1.2,4.3-1.8,8.9-3.7,12.9c-8.9-4.6-18.4-9.2-29.4-8c-4,0.6-9.5,0.6-10.4,4.9c12.2,6.7,22.6,17.7,30,29.4
        C411,365.7,417.4,366.3,422.9,367.2z M292.2,384.4l0.3,2.1c4.9,3.1,6.1,8.6,12.9,8c5.8,0.3,10.4-5.2,13.2-9.5
        C310.6,384.1,300.8,385.9,292.2,384.4z M298.7,374.6c0.3,0.9-0.6,2.4,0.6,3.1c4-0.9,11,2.1,13.2-2.4c-1.5-1.8-4-2.4-6.7-2.4
        C303.2,372.4,300.8,373.4,298.7,374.6z"
          />
        </g>
      </svg>
    );
  }
}
