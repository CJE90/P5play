function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; //Top, Right, Bottom, Left
    this.visited = false;


    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }
        if (this.visited) {
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }

    }

}