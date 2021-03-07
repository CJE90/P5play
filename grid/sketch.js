var columns;
var rows;
var w = 40;
var grid = [];
var current; //cell currently being visited


var stack = [];


function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

function setup() {
    createCanvas(800, 800);
    //frameRate(40)
    cols = floor(width / w);
    rows = floor(height / w);
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    this.current = this.grid[0];

}


function removeWalls(a, b) {
    var x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }

    var y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}


function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }


    this.current.visited = true;

    current.highlight();
    var next = this.current.checkNeighbors();

    if (next) {
        next.visited = true;

        stack.push(current);

        removeWalls(current, next);
        current = next;
    } else {
        current = stack.pop();
    }
}