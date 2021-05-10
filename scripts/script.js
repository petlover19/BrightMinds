let presets = document.querySelector("#presets");
let prev = document.querySelector("#prev");
let pep = document.querySelector("#pep");
let modal = document.querySelector("#modalID");
let upload = document.querySelectorAll(".upload");
let pre = document.querySelectorAll(".preset");
let images = ["assets/presets/clownfish.png", "assets/presets/firework.png", "assets/presets/rainbow.png", "assets/presets/chemistry.png", "assets/presets/2021grad.png", "assets/presets/wires.png"]

let clown;
window.onload = load;

function load() {
    for (let i = 0; i < 6; i++) {
        let preset = document.createElement("div");
        preset.class = "preset";

        let img = document.createElement("img");
        img.src = images[i];
        if (img.src == "assets/presets/clownfish.png") {
            img.id = "clown"
        }
        clown = document.querySelector("#clown");

        preset.appendChild(img);
        presets.appendChild(preset);
    }
}


// check()

// function check() {
//     // console.log("checking...")
//     let children = presets.childNodes;
//     for (let j = 0; j < children.length; j++) {
//         let c = children[j].childNodes;
//         for (let ch = 0; ch < c.length; ch++) {
//             // console.log("hello")
//             var p = c[ch];
//             // console.log(p)
//             p.onclick = pop;
//         }

//     }
//     setTimeout(check, 1000);
// }

// clown.onclick = pop;
// pre.onclick = pop;

function pop() {

    modal.style.display = "block"
}
// upload.onclick = up;

// function up() {
//     // send HTTP GET request to the IP address with the parameter "pin" and value "p", then execute the function
//     $.get("http://192.168.4.1:80/", { leds: bob }); // execute get request
// }