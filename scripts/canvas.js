let capCanvas = document.querySelector("#cap");
let redoBtn = document.querySelector("#redo");
let undoBtn = document.querySelector("#undo");

let color = { r: 255, g: 255, b: 255 };
let cSize = window.innerWidth

let leds = [];
let moves = [];
let set = [];
let current = -1;


function setup() {
    let canvas = createCanvas(955, cSize + 300)
    canvas.id = "capCanvas"
    canvas.parent(capCanvas);
    for (let col = 0; col < 32; col++) {
        let rows = [];
        for (let row = 0; row < 32; row++) {
            let led = new LED((col * 29) + 35, (row * 29) + 185);
            rows.push(led)
        }
        leds.push(rows);
    }
}

function draw() {
    // cSize = window.innerWidth;
    background(23, 35, 67)
    fill(0, 52, 153)

    //cap box
    rect(20, 175, 920, 920, 5)

    //checks for led 
    for (let c in leds) {
        for (let r in leds[c]) {
            if (mouseIsPressed) {
                if (mouseX > leds[c][r].xpos - 12 &&
                    mouseX < leds[c][r].xpos + 12 &&
                    mouseY > leds[c][r].ypos - 12 &&
                    mouseY < leds[c][r].ypos + 12) {
                    leds[c][r].color = color
                    let info = {
                        col: c,
                        row: r,
                        c: color
                    };
                    set.push(info);
                }
            }
            leds[c][r].draw()
        }
    }
    movesBtns();
}

undoBtn.onclick = undo;

function undo() {
    current--;
    if (current == -1) {
        for (let col in leds) {
            for (let row in leds[col]) {
                leds[col][row].color = {
                    r: 133,
                    g: 133,
                    b: 133
                }
            }
        }
    } else {
        for (let m of moves[current]) {
            let l = leds[m.col][m.row];
            l.color = m.c
            console.log(m)
        }
    }
}
redoBtn.onclick = redo;

function redo() {
    current++;
    for (let m of moves[current]) {
        let l = leds[m.col][m.row];
        l.color = m.c
    }
}

function mousePressed() {
    set = []
}

function mouseReleased() {
    if (mouseX > 20 &&
        mouseX < 940 &&
        mouseY > 175 &&
        mouseY < 1095) {
        console.log("splice:", moves.length - current)
        console.log("current:", current)
        moves.splice(current, moves.length - 1 - current);
        moves.push(set);
        current = moves.length - 1
        console.log("moves.length:", moves.length)
        console.log("current:", current)
    }
}

function movesBtns() {
    if (current == moves.length - 1) {
        redoBtn.style.display = "none";
    } else if (current == -1) {
        undoBtn.style.display = "none";
    } else {
        undoBtn.style.display = "inline-block";
        redoBtn.style.display = "inline-block";
    }
}

window.onresize = windowResized;

function windowResized() {
    cSize = window.innerWidth;
}