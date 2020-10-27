var my_mouse =  "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    my_mouse = "mouseDown";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if (my_mouse == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y = ");
        console.log("X = "+last_position_of_x + "Y="+last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        console.log("X="+current_position_of_mouse_x , "Y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup" , my_mouse_up);
function my_mouse_up(e) {
    my_mouse = "mouseUp";
}
canvas.addEventListener("mouseleave" , my_mouse_Leave);
function my_mouse_Leave(e) {
    my_mouse = "mouseleave";
}
function clear(e) {
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}