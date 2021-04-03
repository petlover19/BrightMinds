let capCanvas = document.querySelector("#cap");
let redoBtn = document.querySelector("#redo");
let undoBtn = document.querySelector("#undo");
let rotateBtn = document.querySelector("#rotate");
let pSize = document.getElementsByName("penSize");


let color = { r: 255, g: 255, b: 255 };
let cSize = window.innerWidth

let leds = [];
let moves = [];
let set = [];
let current = -1;
let colorPicker;
let size=0;
let rotated=false;


function setup() {
    let canvas = createCanvas(955, cSize + 100)
    canvas.id = "capCanvas"
    canvas.parent(capCanvas);

    angleMode(DEGREES)
   
    for (let col = 0; col < 32; col++) {
        let rows = [];
        for (let row = 0; row < 32; row++) {
            let led = new LED((col * 29) + 32, (row * 29) + 85);
            rows.push(led)
        }
        leds.push(rows);
    }
    colorPicker = createColorPicker('#ed225d');
    let cp=document.querySelector("#colorPicker")
    colorPicker.parent(cp);
    cp.id="cp";
   // colorPicker.position(15, cSize + 300);
}

function draw() {
    rectMode(CORNER);
    // cSize = window.innerWidth;
    background(23, 35, 67)
    fill(0, 52, 153)
    for(let i=0;i<pSize.length;i++){
        if(pSize[i].checked){
            size=pSize[i].value;
        }
    }
// console.log(pSize.value)
    // if(rotated==true){
    //     translate(width/2,height/2)
    //     rotate(45);
    // }else if(rotated==false){
    //     translate(width/2,height/2)
    //     rotate(-45);
    // }else{ 
    //     translate(0,0)
    // }

    //cap box
    rect(20, 75, 920, 920, 5)

    //checks for led 
    for (let c in leds) {
        for (let r in leds[c]) {
            if (mouseIsPressed) {
                if (mouseX + size > leds[c][r].xpos &&
                    mouseX - size < leds[c][r].xpos &&
                    mouseY + size > leds[c][r].ypos &&
                    mouseY - size < leds[c][r].ypos ) {
                    let pColor = leds[c][r].color;

                    color.r=colorPicker.color().levels[0];
                    color.g=colorPicker.color().levels[1];
                    color.b=colorPicker.color().levels[2];

                    leds[c][r].color = color
                    leds[c][r].lastC =pColor
                    let info = {
                        col: c,
                        row: r,
                        nc: color,
                        pc: pColor
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
            l.color = m.pc;
        }
    }
}
redoBtn.onclick = redo;

function redo() {
    current++;
    for (let m of moves[current]) {
        let l = leds[m.col][m.row];
        l.color = m.nc
    }
}

function mousePressed() {
    set.length=0;
    console.log(set)
}

function mouseReleased() {
    if (mouseX > 20 &&
        mouseX < 940 &&
        mouseY > 175 &&
        mouseY < 1095) {
        moves.splice(current, moves.length - 1 - current);
        moves.push(set);
        current = moves.length - 1
    }
}

function movesBtns() {
    if(moves.length!=-1){
        if (current == moves.length - 1) {
            redoBtn.style.display = "none";
        } else if (current == -1) {
            undoBtn.style.display = "none";
        }
    }else {
        undoBtn.style.display = "inline-block";
        redoBtn.style.display = "inline-block";
    }
}

rotateBtn.onclick=rotater;
function rotater(){
    if(rotated==true){
        rotated=false
    }else{
        rotated=true
    }
}


window.onresize = windowResized;

function windowResized() {
    cSize = window.innerWidth;
}