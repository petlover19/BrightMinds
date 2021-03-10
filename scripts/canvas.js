let capCanvas = document.querySelector("#cap");
// var ctx = canvas.getContext('2d');
// let cols = [];

let leds = [];
let cSize = window.innerWidth

function setup() {
    let canvas = createCanvas(cSize, cSize)
    canvas.parent(capCanvas);
    for (let col = 0; col < 32; col++) {
        let rows = [];
        for (let row = 0; row < 32; row++) {

            let led = new LED(col, row);
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
    rect(20, 20, cSize - 40, cSize - 40, 5)
}

window.onresize = windowResized;

function windowResized() {
    cSize = window.innerWidth;
}