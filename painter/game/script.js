const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const openTool = document.getElementById("openTools");
const tools = document.querySelector(".tools");
const circle = document.getElementById("circle");
const square = document.getElementById("square");
const size = document.getElementById("size");
const clear = document.getElementById("clear");
const lastik = document.getElementById("lastik");

let xCord;
let yCord;
let isDrawing = false;
let drawWith = "circle";
let width = 50;
let height = 50;
let scale = 25;
let las = false;

lastik.addEventListener("click", () => {
    las = true;
    tools.style.visibility = "hidden";
});

size.addEventListener("click", () => {
    tools.style.visibility = "hidden";
    width = parseInt(prompt("Width"));
    height = parseInt(prompt("Height"));
    scale = parseInt(prompt("Circle scale"));
});

clear.addEventListener("click", () => {
    tools.style.visibility = "hidden";
    ctx.clearRect(0, 0, innerWidth, innerHeight);
});

canvas.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  if(drawWith == "circle") {
    xCord = x - 50;
    yCord = y;
  } else if(drawWith == "square") {
    xCord = x - 75;
    yCord = y - 50 / 2;
  }

  if (isDrawing) {
    draw()
  }
})

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  draw();
})

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
})

openTool.addEventListener("click", () => { 
    if(tools.style.visibility == "visible") {
        tools.style.visibility = "hidden";
    } else {
        tools.style.visibility = "visible";
    }
});

circle.addEventListener("click", () => {
    las = false;
    tools.style.visibility = "hidden";
    drawWith = "circle";
});

square.addEventListener("click", () => {
    las = false;
    tools.style.visibility = "hidden";
    drawWith = "square";
});

function draw () {
    if( !las ) ctx.fillStyle = "black"
    else if( las ) ctx.fillStyle = "white"
    if(drawWith == "circle") {
        let circle = new Path2D(); 
        circle.moveTo(xCord, yCord);
        circle.arc(xCord, yCord, scale, 0, 2 * Math.PI);
        ctx.fill(circle);
    } else if(drawWith = "square") {
        ctx.fillRect(xCord, yCord, width, height)
    }
}

function resize() {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
}

window.onload = resize;
window.addEventListener("resize", resize);