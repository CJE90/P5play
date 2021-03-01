var cells = [];

function setup() {
    createCanvas(900, 900);

    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());

}

function mousePressed() {
    //cells.push(new Cell());
    for (var i = cells.length - 1; i >= 0; i--) {
        if (cells[i].clicked(mouseX, mouseY)) {
            var cellA = cells[i].mitosis();
            var cellB = cells[i].mitosis();
            cells.push(cellA);
            cells.push(cellB);
            cells.splice(i, 1);
        }
    }
}

function draw() {
    background(51);
    for (var i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
    }


}