const canvas = document.getElementById('myCanvas')
const c = canvas.getContext('2d')

let mouseX
let mouseY

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const canvasWidth = canvas.width
const canvasHeight = canvas.height

const maxRadius = 35

canvas.onmousemove = function(e) {
    mouseX = e.clientX
    mouseY = e.clientY
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

// Grid ---------------------------------------------------
class Grid {
    constructor(_canvas) {
        this.canvas = _canvas;
    }

    draw(){

        var c = this.canvas.getContext("2d");
        c.strokeStyle = '#eceff1';

        for (let i = 10; i < 200; i += 20) 
         {
           c.moveTo(0, i);
           c.lineTo(this.canvas.width, i);
           c.stroke();
          }
        for (let i = 10; i <400; i += 20) 
         {
           c.moveTo(i, 0);
           c.lineTo(i,this.canvas.width);
           c.stroke();
          }
    }
    
}
// -------------------------------------------------------

function updateAll() {
    c.clearRect(0, 0, canvasWidth, canvasHeight)

    grid = new Grid(canvas);
    grid.draw();
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(mouseX, mouseY);
    c.stroke();
    
    window.requestAnimationFrame(updateAll)
}

updateAll()