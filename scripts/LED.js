class LED {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = (255, 255, 255)
    }
    draw() {
        ellipse(this.xpos, this.ypos)
    }
}