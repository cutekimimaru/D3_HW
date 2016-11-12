function showAlert(msg1, msg2) {
    var msg = msg1+" "+msg2;
    return msg;
}

function getRandomInt(n, m) {
    console.log("your input", n, m);
    return Math.ceil((m-n)*Math.random()+n);
}

function getRandomIntByScale(n, m) {
    console.log("your input", n, m);
    var rScale = d3.scale.linear()
        .domain([0, 1])
        .rangeRound([n,m]);
    return rScale(Math.random());
}

// draw the five lines
function drawLines () {
    for (var i=0; i<5; i=i+1) {
        d3.select(".melody>svg")
          .append("line")
          .attr({
            x1: 0,
            y1: 45 + i * 30,
            x2: 300,
            y2: 45 + i * 30,
            stroke: "black",
            "stroke-width": 2
            });    
    }
}