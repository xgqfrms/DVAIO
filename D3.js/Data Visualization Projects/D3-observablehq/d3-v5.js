
// 数据 dataset
let data = [
    {
        key: "a",
        value: 32
    },
    {
        key: "b",
        value: 26
    },
    {
        key: "c",
        value: 45
    },
    {
        key: "d",
        value: 38
    },
    {
        key: "e",
        value: 52
    },
    {
        key: "f",
        value: 48
    },
    {
        key: "g",
        value: 50
    },
    {
        key: "h",
        value: 34
    },
    {
        key: "i",
        value: 37
    },
    {
        key: "j",
        value: 36
    },
    {
        key: "k",
        value: 40
    },
];

// d[0] & d[1]
// d.key & d.value
let Xdatas = data.map(d => d.key),
    Ydatas = data.map(d => d.value);

let width = 800,
    height = 500;

// x-Axis 轴 scale range
let x = d3.scaleBand()
        .domain(Xdatas)
        .rangeRound([0, width])
        .padding(0.1);

// y-Axis 轴 scale range
let y = d3.scaleLinear()
        .domain([0, d3.max(Ydatas)])
        .rangeRound([height, 0]);

let padding = {
    left: 50,
    top: 20,
    right: 50,
    bottom: 50
};

// select root DOM & 设置 svg size
let svg = d3.select(`[data-dom="body"]`)
            .append("svg")
            .attr("style", `border: 1px solid red;`)
            .attr("width", `${width + padding.left}px`)
            // .attr("width", width + padding.left)
            .attr("height", height + padding.bottom * 2);
// group box
let g = svg.append("g")
            // .attr("transform", "translate(" + padding.left + "," + padding.top + ")");
            .attr("transform", `translate(${padding.left}, ${padding.left + padding.top})`);

// title
g.append("text")
    // .attr("transform", "translate(" + (width/2 - padding.left) + ",0)")
    .attr("transform", `translate(${width / 2 - padding.left}, -30)`)
    .attr("font-weight", 600)
    .attr("margin-bottom", 80)
    .text("D3.js Bar Chart");

// x轴  & rotate
g.append("g")
    // .attr("transform", "translate(0," + height + ")")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

// y轴 & ticks(10)
g.append("g")
    .call(d3.axisLeft(y).ticks(10));


let chart = g.selectAll(".bar")
        .data(data)
        .enter()
        .append("g");

// // 矩形
// chart.append("rect")
//     .attr("x", d => d.value)
//     .attr("cursor", "pointer")
//     // ???
//     .attr("y", d => y(y.domain()[0]))
//     // RGB color & 16777215 === 0xffffff
//     .attr("fill", d => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`)
//     .transition().delay(function(d, i) {return (i + 1) * 50}).duration(2000).ease(d3.easeBounceIn)
//     .attr("y", function(d) {return y(d.value);})
//     .attr("width", x.bandwidth()).attr("height", function(d) {return height - y(d.value)});

// rect
chart.append("rect")
    .attr("x", d => x(d.key))
    .attr("cursor", "pointer")
    .attr("y", d => y(y.domain()[0]))
    .attr("fill", d => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`)
    // .transition()
    // .delay((d, i) => (i + 1) * 50)
    // .duration(2000)
    // .ease(d3.easeBounceIn)
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value));

// text
chart.append("text")
    .attr("fill", "#FFF")
    .attr("x", d => x(d.key) + 14)
    .attr("y", d => y(y.domain()[0]))
    // .transition()
    // .delay((d, i) => (i + 1) * 100)
    // .duration(2000)
    // .ease(d3.easeBounceIn)
    .attr("y", d => y(d.value))
    .attr("dx", d => (x.bandwidth() - padding.left) / 2)
    .attr("dy", 20)
    .text(d => d.value);

// tooltip
let tooltip = d3.select("body").append("div");

// mouse event
chart
    .on("mouseover", function() {
        d3.select(this)
            .attr("opacity", 0.5);
        // 悬浮在直方图上时，显示提示框
        tooltip.html("我是提示框")
            .transition()
            .duration(500)
            .style("left", d3.event.pageX - 20)
            .style("top", d3.event.pageY + 20)
            .style("opacity", 1.0);
    })
    .on("mouseout", function() {
        d3.select(this)
            .transition()
            .delay(100)
            .duration(500)
            .attr("opacity", 1.0);
    });

// 当鼠标移出svg画布时，就将提示框隐藏掉，考虑到鼠标移出时显示的动画还未完成，需要加transition()过滤
svg
    .on("mouseout", function() {
        tooltip.transition()
            .style("opacity", 0);
    });