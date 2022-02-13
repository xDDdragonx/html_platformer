let canvas = document.getElementById("myCanvas");
let render = canvas.getContext("2d");
let width;
let height;

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    drawLoop();
}

let objects = [];
createLevel();

let endLevel = new finish(48*32, 32);
let user = new player(50,800);

window.onresize();

alert("Welcome to Platforming! Move with 'A' and 'D'. Jump with 'W'. "
    + "Reach the orange square to finish. Use 'F5' to refresh page.");

let target_fps = 30;
setInterval(loop,1000/target_fps);
setInterval(cond,4000/target_fps);

function loop() {
    stepLoop();
    drawLoop();
    keyEnd();
}
function cond(){
    if(user.x < endLevel.x + endLevel.colln.w &&
        user.x + endLevel.colln.w > endLevel.x &&
        user.y < endLevel.y + endLevel.colln.h &&
        user.y + user.colln.h > endLevel.y)
    {alert("You have completed the level. Congrats!");}
}
function stepLoop() {
    for(let i=0; i<objects.length; i++) {
        if(objects[i].step) {objects[i].step()}
    }
}
function drawLoop() {
    background(25, 25, 25);
    for(let i=0; i<objects.length ; i++) {
        if(objects[i].draw) {objects[i].draw()}
    }
}
