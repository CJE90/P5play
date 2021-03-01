function Cell(pos, radius, c) {

    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(width), random(height));
    }

    // this.pos = pos.copy() || createVector(random(width), random(height));
    this.radius = radius || 80;
    this.c = c || color(random(100, 255), random(100, 255), random(100, 255), 100);
    this.move = function () {
        var vel = p5.Vector.random2D();
        this.pos.add(vel);

    };
    this.show = function () {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    };

    this.clicked = function (x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y);
        if (d < this.radius) {
            return true;
        } else {
            return false;
        }
    }

    this.mitosis = function () {
        this.pos.x += random(-this.radius, this.radius);
        var cell = new Cell(this.pos, this.radius * 0.8, this.c);
        return cell;


    }


}