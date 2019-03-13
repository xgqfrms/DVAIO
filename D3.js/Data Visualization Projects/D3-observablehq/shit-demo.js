// import {scaleLinear} from "d3-scale";
import * as d3 from "d3";


const chart = () => {
    const svg = d3.select(DOM.svg(width, height));
    svg.append("g")
        .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth());
    
    svg.append("g")
        .call(xAxis);
    
    svg.append("g")
        .call(yAxis);
    
    return svg.node();
};


// letter,frequency
// A,0.08167
// B,0.01492
// C,0.02782
// D,0.04253
// E,0.12702
// F,0.02288
// G,0.02015
// H,0.06094
// I,0.06966
// J,0.00153
// K,0.00772
// L,0.04025
// M,0.02406
// N,0.06749
// O,0.07507
// P,0.01929
// Q,0.00095
// R,0.05987
// S,0.06327
// T,0.09056
// U,0.02758
// V,0.00978
// W,0.0236
// X,0.0015
// Y,0.01974
// Z,0.00074

// [{name: "E", value: 0.12702}, ...]

const data = await d3.csv(
    "https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv",
    ({letter, frequency}) => ({
        name: letter,
        value: + frequency
    })
).sort((a, b) => b.value - a.value);

// x = ƒ(i)
let x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

// y = ƒ(n)
let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);

// xAxis = ƒ(g)
let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

// yAxis = ƒ(g)
let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove());

let height = 500;

let margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 40
};

chart();