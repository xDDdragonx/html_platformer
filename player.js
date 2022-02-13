class player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 36;
        this.colln = new collisionBox(this.x, this.y, this.size, this.size)

        //physics
        this.gravity = 5;
        this.ySpeed = 0;
        this.jumpSpeed = 30;
        this.maxSpeed = 10;
        this.xSpeed = 0;

        objects.push(this);
    }
    step(){
        this.ySpeed += this.gravity;
        let grounded = wallCollision(this.colln, this.x, this.y+1);
        if(keyDown.W && grounded) {this.ySpeed = -this.jumpSpeed}

        if (wallCollision(this.colln, this.x, this.y+this.ySpeed)) {
            while(!wallCollision(this.colln, this.x, this.y+Math.sign(this.ySpeed))) {
                this.y += Math.sign(this.ySpeed);
            }
            this.ySpeed = 0
        }
        if(this.ySpeed > 30) {this.ySpeed = 30}
        this.y += this.ySpeed;
        this.colln.update(this.x, this.y);

        let direction = keyDown.D - keyDown.A;
        this.xSpeed = direction * this.maxSpeed;
        if (wallCollision(this.colln, this.x+this.xSpeed, this.y)) {
            while(!wallCollision(this.colln, this.x+Math.sign(this.xSpeed), this.y)) {
                this.x += Math.sign(this.xSpeed);
            }
            this.xSpeed = 0
        }
        this.x += this.xSpeed;
    }

    draw() {
        strokeColor(0,100,255);
        fillColor(0,100,255);
        strokeSize(2);
        rectangle(this.x,this.y,this.size,this.size);
    }

}
