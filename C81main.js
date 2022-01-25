canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue"

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(400, 300, 60, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    console.log(color);

    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    console.log("X: " + mousex + ", Y: " + mousey);
    circle(mousex, mousey);

}

function circle(mousex, mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mousex, mousey, 60, 0, 2 * Math.PI);
    ctx.stroke();
}




