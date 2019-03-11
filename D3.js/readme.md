# D3.js

> Data-Driven Documents (D3.js)

https://github.com/d3/d3#installing

https://github.com/d3/d3/blob/master/API.md

https://www.npmjs.com/package/d3

```sh
    
$ npm i -S d3


```

```js

import {scaleLinear} from "d3-scale";


import * as d3 from "d3";

```


https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3/add-document-elements-with-d3


```js

    d3.select("body")
    .append("h1")
    .text("Learning D3");

```

https://www.npmjs.com/package/d3-node


## bar and scatter plot charts

> 条形图和散点图

## Axes

Axes is the plural form of axis

> 轴是轴的复数形式

https://codepen.io/webgeeker/pen/YgxdEK?editors=1111

```js

// import {scaleLinear} from "d3-scale";
// import * as d3 from "d3";

// datas
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// view
const w = 500;
const h = 100;

const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
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



```

https://github.com/freeCodeCamp/learn/tree/master/src/introductions/data-visualization


https://github.com/d3/d3/blob/master/API.md#axes-d3-axis


ProjectReferenceData

https://github.com/freeCodeCamp/ProjectReferenceData


https://guide.freecodecamp.org/d3

https://cdnjs.com/libraries/d3

https://guide.freecodecamp.org/certifications/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart



