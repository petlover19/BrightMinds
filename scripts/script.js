let desCat = document.querySelector("#designCat");
let inCat = document.querySelector("#instructionsCat");
let abtCat = document.querySelector("#aboutCat");
let creCat = document.querySelector("#createNewCat");
let preCat = document.querySelector("#presetCat");

let catArray = [desCat, inCat, abtCat, creCat, preCat];
while (true) {
    for (let i in catArray) {
        i.onclick = direct;
    }
}

function direct() {}