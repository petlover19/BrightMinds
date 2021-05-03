let presets = document.querySelector("#presets");
let images=["assets/presets/clownfish.png","assets/presets/firework.png","assets/presets/rainbow.png","assets/presets/chemistry.png","assets/presets/2021grad.png","assets/presets/wires.png"]

let page=0;

window.onload=load;
function load() {
    for(let i=0;i<6;i++) {
        let preset=document.createElement("div");
        preset.class="preset";

        let img=document.createElement("img");
        img.src=images[i+page];
        img;

        img
        let name=document.createElement("p"); 
        preset.appendChild(img);
        preset.appendChild(name);
        presets.appendChild(preset);
    }
}