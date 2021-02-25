function setup() {
    createCanvas(980, 920);
    strokeWeight(8);
}

function draw() {
    background(204);
    //   for (var i = 20; i < 900; i += 60) {
    //     line(i, 40, i + 60, 80);
    //     line(i, 100, i + 60, 140);
    //     line(i, 160, i + 60, 200);
    //     line(i, 220, i + 60, 260);
    //   }

    for (x = 20; x < 900; x += 60) {
        for (y = 40; y < 900; y += 80) {
            line(x, y, x + 60, y + 60);
            line(y, x, y + 60, x + 60);
        }
    }
}