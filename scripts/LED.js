class LED {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = {
            r: 133,
            g: 133,
            b: 133
        }
    }
    draw() {
        rectMode(CENTER);
        fill(this.color.r, this.color.g, this.color.b)
        rect(this.xpos, this.ypos, 20,20)
    }
}