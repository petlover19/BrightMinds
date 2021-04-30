class LED {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = {
            r: 0,
            g: 0,
            b: 0
        }
        this.lastC = {
            r: 0,
            g: 0,
            b: 0
        }
    }
    draw() {
        rectMode(CENTER);
        fill(this.color.r, this.color.g, this.color.b)
        rect(this.xpos, this.ypos, 20, 20)
    }
}