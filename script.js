let currentColor = "#000000";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

const screen = document.querySelector("#tela");
const ctx = screen.getContext("2d");

document.querySelectorAll(".colorArea .color").forEach((item) => {
   item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", MouseDownEvent);
screen.addEventListener("mousemove", MouseMoveEvent);
window.addEventListener("mouseup", MouseUpEvent);

document.querySelector(".clear").addEventListener("click", clearScreen);

function colorClickEvent(e) {
   const color = e.target.getAttribute("data-color");
   currentColor = color;

   document.querySelector(".color.active").classList.remove("active");
   e.target.classList.add("active");
}

function MouseDownEvent(e) {
   canDraw = true;
   const rect = screen.getBoundingClientRect();
   mouseX = e.clientX - rect.left;
   mouseY = e.clientY - rect.top;
}

function MouseMoveEvent(e) {
   if (canDraw) {
      draw(e.clientX, e.clientY);
   }
}

function MouseUpEvent() {
   canDraw = false;
}

function draw(clientX, clientY) {
   const rect = screen.getBoundingClientRect();
   const pointX = clientX - rect.left;
   const pointY = clientY - rect.top;

   ctx.beginPath();
   ctx.lineWidth = 5;
   ctx.lineJoin = "round";
   ctx.lineCap = "round";
   ctx.moveTo(mouseX, mouseY);
   ctx.lineTo(pointX, pointY);
   ctx.strokeStyle = currentColor;
   ctx.stroke();

   mouseX = pointX;
   mouseY = pointY;
}

function clearScreen() {
   ctx.setTransform(1, 0, 0, 1, 0, 0);
   ctx.clearRect(0, 0, screen.width, screen.height);
}
