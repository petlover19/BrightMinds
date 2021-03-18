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
        fill(this.color.r, this.color.g, this.color.b)
        ellipse(this.xpos, this.ypos, 25)
    }
}