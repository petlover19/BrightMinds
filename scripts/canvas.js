let capCanvas = document.querySelector("#cap");
// var ctx = canvas.getContext('2d');
// let cols = [];
let color = { r: 255, g: 255, b: 255 };
let leds = [];
let cSize = window.innerWidth
let last = [];
let current = [];
let next = [];

function setup() {
    let canvas = createCanvas(cSize, cSize + 300)
    canvas.id = "capCanvas"
    canvas.parent(capCanvas);
    for (let col = 0; col < 32; col++) {
        let rows = [];
        for (let row = 0; row < 32; row++) {

            let led = new LED((col * 29.5) + 35, (row * 29.5) + 185);
            rows.push(led);
        }
        leds.push(rows)
        rows = [];
    }
}

function draw() {
    // cSize = window.innerWidth;
    background(23, 35, 67)
    fill(0, 52, 153)
    rect(20, 175, cSize - 40, cSize - 40, 5)

    for (let c in leds) {
        for (let l in leds[c]) {
            if (mouseX > leds[c][l].x - 12 &&
                mouseX < leds[c][l].x + 12 &&
                mouseY > leds[c][l].y - 12 &&
                mouseX < leds[c][l].y + 12) {
                leds[c][l].color = color
                console.log("mouseX")
            }
            // if (mouseIsPressed) {


            // }
            leds[c][l].draw()
        }
    }
}

function mousePressed() {

}
window.onresize = windowResized;

function windowResized() {
    cSize = window.innerWidth;
}