function setup() {
    createCanvas(980, 920);
    strokeWeight(8);
}

function draw() {
    background(204);
    for (x = 20; x < 900; x += 60) {
        for (y = 40; y < 900; y += 80) {
            line(x * 2, y, x + 90, y + 60);
            line(y, x, y + 90, x + 60);
        }
    }
}