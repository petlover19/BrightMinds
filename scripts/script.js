let presets = document.querySelector("#presets");
let images=["assets/presets/pikachu.png","assets/presets/cOf2021.png","assets/presets/IMadeIt.png","assets/presets/tiger.png","assets/presets/RITGrad.png"]

let page=0;

window.onload=load;
function load() {
    for(let i=0;i<10;i++){
        let preset=document.createElement("div");
        preset.class="preset";
        let img=document.createElement("img");
        img.src=images[i+page];
        img
        let name=document.createElement("p"); 
        preset.appendChild(img);
        preset.appendChild(name)
        presets.appendChild(preset);
    }
}