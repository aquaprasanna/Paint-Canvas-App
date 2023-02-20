var mouseEvent="empty";
var last_X,last_Y;
canvas= document.getElementById("MyCanvas");
ctx= canvas.getContext("2d");
color="red";
width1= 1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width1= document.getElementById("width1").value;

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width1

        console.log("Last position of x and y coordinates = ");
        console.log("x = "+ last_X + "y=" + last_Y);
        ctx.moveTo(last_X, last_Y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = "+ current_X + "y=" + current_Y);
        ctx.lineTo(current_X, current_Y);
        ctx.stroke();

        
    }
    last_X= current_X;
    last_Y = current_Y;
     
}
function ClearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
