// import {scaleLinear} from "d3-scale";
// import * as d3 from "d3";

// script type="module"

// Uncaught SyntaxError: await is only valid in async function

// const data = await d3.csv(
//     "https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv",
//     ({letter, frequency}) => ({
//         name: letter,
//         value: + frequency
//     })
// ).sort((a, b) => b.value - a.value);

// async function asyncData() {
//     return (await d3.csv(
//         "https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv",
//         ({letter, frequency}) => ({
//             name: letter,
//             value: + frequency
//         })
//     ).sort((a, b) => b.value - a.value));
// }

// async function asyncData() {
//     const url = "https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv";
//     let data = await d3.csv(url)
//                         .then(
//                             (csv) => {
//                                 console.log(`csv =`, csv, csv.length);
//                                 // csv = [{}, {}, ...]
//                                 let result = [];
//                                 if (csv.length) {
//                                     csv.forEach(obj => {
//                                         let {
//                                             letter,
//                                             frequency
//                                         } = obj;
//                                         result.push({
//                                             name: letter,
//                                             value: frequency,
//                                             // value: + frequency,
//                                         });
//                                     });
//                                 }
//                                 console.log(`result =`, result);
//                                 return result;
//                             }
//                         );
//     console.log(`data =`, data);
//     return data;
// }

// Fetch API cannot load file:///.../alphabet.csv. URL scheme must be "http" or "https" for CORS request.

// async function asyncData() {
//     let data = await d3.csv("./alphabet.csv")
//         .then(
//             ({letter, frequency}) => ({
//                 name: letter,
//                 value: + frequency
//             })
//         );
//     return data;
// }

let data = [];

const asyncData = () => {
    const url = "https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv";
    return d3.csv(url)
        .then(
            (csv) => {
                console.log(`csv =`, csv, csv.length);
                // csv = [{}, {}, ...]
                let result = [];
                if (csv.length) {
                    csv.forEach(obj => {
                        let {
                            letter,
                            frequency
                        } = obj;
                        result.push({
                            name: letter,
                            value: frequency,
                            // value: + frequency,
                        });
                    });
                }
                console.log(`result =`, result);
                data = result;
                console.log(`data =`, data);
                return result;
            }
        );
};

asyncData();

// const data = asyncData();

// const data = asyncData().sort((a, b) => b.value - a.value);
console.log(`dataset =`, JSON.stringify(data, 4, null));

setTimeout(() => {
    console.log(`dataset =`, JSON.stringify(data, 4, null));
    let height = 500;
    let width = 500;

    let margin = {
        top: 20,
        right: 0,
        bottom: 30,
        left: 40
    };

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

    chart();

}, 1000);

