function setup(){
    createCanvas(800, 600);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    translate(200, 200);
    rotate(-90);

    let hours = hour();
    let minutes = minute();
    let seconds = second();
    
    fill (255);
    noStroke();
    text(hours + ':' + minutes + ':' + seconds, 50, 50);

    // strokeWeight(4);
    // stroke(255);
    // noFill();
    // ellipse(200, 200, 300, 300);

    strokeWeight(8);
    noFill();
    stroke(255, 100, 150);
    let end1 = map(seconds, 0, 60, 0, 360)
    arc(0, 0, 300, 300, 0, end1)

    push();
    rotate(end1);
    line(0, 0, 100, 0);
    pop();
    
    stroke(150, 100, 255);
    let end2 = map(minutes, 0, 60, 0, 360)
    arc(0, 0, 280, 280, 0, end2)

    push();
    rotate(end2);
    line(0, 0, 80, 0);
    pop();

    stroke(150, 255, 100);
    let end3 = map(hours % 12, 0, 12, 0, 360)
    arc(0, 0, 260, 260, 0, end3)

    push();
    rotate(end3);
    line(0, 0, 60, 0);
    pop();

}


