function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.colo = color(255, 100);

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        fill(this.colo);
        rect(x, y, w, w);
    }

    this.entered = function () {
        var x = this.i * w;
        var y = this.j * w;
        if (
            mouseX > x &&
            mouseX < x + 40 &&
            mouseY > y &&
            mouseY < y + 40
        ) {
            this.colo = color(45, 45, 45);
            //fill(this.colo);
            //console.log("ENTERED" + i + " " + j);
        }
        //console.log("ENTERED" + i + " " + j);
    }



}