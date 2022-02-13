class collisionBox {
    constructor(x,y,w,h) {
        this.x1 = x;
        this.y1 = y;
        this.w = w;
        this.h = h;
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
    update(x,y) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + this.w;
        this.y2 = y + this.h;
    }
    collision(colln) {
        return (this.x1 < colln.x2 && this.x2 > colln.x1
                && this.y1 < colln.y2 && this.y2 > colln.y1);
    }
}