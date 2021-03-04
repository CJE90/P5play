function Cell(i, j, runsum) {
    this.i = i;
    this.j = j;
    var mouseOver = false;
    this.runsum = runsum;
    this.colo = color(51, 51, 51);

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        fill(this.colo);
        rect(x, y, w, w);
        if (mouseOver) {
            this.colo = color(random(0, 255), random(0, 255), random(0, 255))
            mouseOver = false;
        }
    }

    this.changeColor = function () {
        this.colo = color(random(0, 255), random(0, 255), random(0, 255))

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

            //console.log(this.colo)
            mouseOver = true;

            //fill(this.colo);
            //console.log("ENTERED" + i + " " + j);
        } else {
            mouseOver = false;
        }
        //console.log("ENTERED" + i + " " + j);
    }



}