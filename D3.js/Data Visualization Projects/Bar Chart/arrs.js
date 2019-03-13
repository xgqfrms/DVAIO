// import {scaleLinear} from "d3-scale";
// import * as d3 from "d3";


// https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json
// https://codepen.io/freeCodeCamp/full/GrZVaM
// https://codepen.io/freeCodeCamp/pen/MJjpwO

// datas
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const data_arrs = [
    [12, "2011"],
    [31, "2012"],
    [22, "2013"],
    [17, "2014"],
    [25, "2015"],
    [18, "2016"],
    [29, "2017"],
    [14, "2018"],
    [9, "2019"],
];


const data_objs = [
    {
        money: 12,
        year: "2011",
    },
    {
        money: 31,
        year: "2012",
    },
    {
        money: 22,
        year: "2013",
    },
    {
        money: 17,
        year: "2014",
    },
    {
        money: 25,
        year: "2015",
    },
    {
        money: 18,
        year: "2016",
    },
    {
        money: 29,
        year: "2017",
    },
    {
        money: 14,
        year: "2018",
    },
    {
        money: 9, 
        year: "2019",
    },
];

// view
const w = 500;
const h = 200;

// const svg = d3.select("body")
const svg = d3.select("#content")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("fill", "#0f0");
// title 
// svg.select("h1")
//    .enter()
//    .append("h1")
//    .attr("x", (d, i) => w / 2)
//    .attr("y", 10)
//    .attr("width", 100)
//    .attr("height", 10)
//    .select("text")
//    .enter()
//    .append("text")
//    .text(d => `title`);
 
// let scale = d3.scale.linear();
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