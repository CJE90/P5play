var columns;
var rows;
var w = 40;
var grid = [];

function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function mouseClicked() {
    for (var t = 0; t < grid.length; t++) {

        if (
            mouseX > grid[t].i * 40 &&
            mouseX < grid[t].i * 40 + 40 &&
            mouseY > grid[t].j * 40 &&
            mouseY < grid[t].j * 40 + 40
        ) {

            this.grid[t].entered();
            break;
        }
    }
}



function draw() {
    //console.log(mouseX);
    background(51);
    for (var i = 0; i < grid.length; i++) {
        // if (
        //     mouseX > grid[i].i &&
        //     mouseX < grid[i].i * 40 &&
        //     mouseY > grid[i].j &&
        //     mouseY < grid[i].j * 40 * 40
        // )
        //     grid[i].change(187);

        grid[i].show();
    }
}