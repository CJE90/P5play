var columns;
var rows;
var w = 40;
var grid = [];

function setup() {
    createCanvas(600, 600);
    cols = floor(width / w);
    rows = floor(height / w);
    let sum = 0;
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j, sum);
            grid.push(cell);
        }
    }
}

function draw() {

    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}