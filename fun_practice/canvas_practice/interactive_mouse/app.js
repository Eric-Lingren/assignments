let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/////  Boxes ////
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(200, 200, 300, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(600, 400, 200, 200);


/////  Line ////
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,500);
// c.strokeStyle = '#9af94e'
// c.stroke();

/////  Arc / Circle /////
// c.beginPath();
// c.arc(300, 350, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'white';
// c.stroke();


// for(let i = 0; i < 10; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'white';
//     c.stroke();
// }

// for(let i = 0; i < 20; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.moveTo(x, y);
//     c.lineTo(y, x/2);
//     c.strokeStyle = '#2ad14e'
//     c.stroke();
// }

// for (let i = 0; i < 10; i++){
//     let a = (Math.random() * 100) + 100;
//     let b = (Math.random() * 100) + 100;
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerWidth;

//     c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//     c.fillRect(x, y, a, b);
//     // c.fillStyle = 'rgba(0, 0, 255, 0.5)';
//     // c.fillRect(a, b, 200, 200);
// };
// for (let i = 0; i < 10; i++){
//     let a = (Math.random() * 100) + 100;
//     let b = (Math.random() * 100) + 100;
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerWidth;

   
//     c.fillStyle = 'rgba(0, 255, 0, 0.5)';
//      c.fillRect(x, y, a, b);
//     // c.fillStyle = 'rgba(0, 0, 255, 0.5)';
//     // c.fillRect(a, b, 200, 200);
// };

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 70;
let minRadius = 5

let colorArray = ['#6B4428','#E5C896','#6A7C00','#56F212','#FFEDC6',]


window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()
})


function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;

    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        
    }
    this.update = function() {
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
         this.dx = -this.dx;
        } 
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        } 
        this.x += this.dx;
        this.y += this.dy;

        //// Interactivity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 1
            }
            
        } else if(this.radius > this.minRadius) {
            this.radius -= 1
        }
        

        this.draw();
     }
}




let circleArray = [];

function init(){
    circleArray = [];
    for(let i = 0; i < 1000; i++){
        let radius = Math.random()* 5 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 3;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dy = (Math.random() - 0.5) * 3;
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerWidth);
    
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();
init();
