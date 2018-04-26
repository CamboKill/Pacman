function Circle() {
    this.x = 32;
    this.y = 32;

    this.a = 12.5;
    this.b = 12.5;
    this.c = 12.5;
    this.color = "yellow";

    this.draw = function(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.c, 0, Math.PI * 2, true);
        c.closePath();
        c.fill();
    }
}
