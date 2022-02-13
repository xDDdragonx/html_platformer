let walls = [];
class terrain {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        this.colln = new collisionBox(this.x, this.y, this.size, this.size)
        objects.push(this);
        walls.push(this);
    }
    draw() {
        strokeColor(200,200,200);
        fillColor(100,50,50);
        strokeSize(3);
        rectangle(this.x,this.y,this.size,this.size);
    }
}
function wallCollision(colln, x, y) {
    let lastX = colln.x1;
    let lastY = colln.y1;
    colln.update(x, y);
    let returnValue = false;
    for(let i=0; i<walls.length; i++) {
        if(walls[i].colln.collision(colln)) {
            returnValue = true;
            break;
        }
    }

    colln.update(lastX, lastY);
    return returnValue;
}
class finish {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        this.colln = new collisionBox(this.x, this.y, this.size, this.size)
        objects.push(this);
    }
    draw() {
        strokeColor(0,200,200);
        fillColor(175,100,0);
        strokeSize(3);
        rectangle(this.x,this.y,this.size,this.size);
    }
}

