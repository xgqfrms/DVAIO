// import {scaleLinear} from "d3-scale";
// import * as d3 from "d3";


// https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json
// https://codepen.io/freeCodeCamp/full/GrZVaM
// https://codepen.io/freeCodeCamp/pen/MJjpwO

// datas
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// view
const w = 500;
const h = 200;

// const svg = d3.select("body")
const svg = d3.select("#content")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("fill", "#0f0");

let scale = d3.scaleLinear();
// console.log(`scale =`, scale);

let min = d3.min(dataset, d => d);
let max = d3.max(dataset, d => d);

// console.log(`min =`, min);
// console.log(`max =`, max);

// rect
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .attr("fill", "navy");

// title
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d - 3)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .text(d => `¥${d}`)
   .attr("class", "high-light-color");
// tooltips
// svg.selectAll("rect");

// https://www.runoob.com/svg/svg-examples.html