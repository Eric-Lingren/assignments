const gitHubLogo = document.getElementById('gitLogo');
const gitHubLogo1 = document.getElementById('gitLogo1');
const gitHubLogo2 = document.getElementById('gitLogo2');
const gitHubLogo3 = document.getElementById('gitLogo3');
const gitHubLogo4 = document.getElementById('gitLogo4');
const gitHubLogo5 = document.getElementById('gitLogo5');


const infoLogo = document.getElementById('infoLogo');
const portfolioLogo = document.getElementById('portfolioLogo');
const resumeLogo = document.getElementById('resumeLogo');

//  Set variable for mouse location on the page
let mouse = {
    x: undefined,
    y: undefined
}

//  Creates variables for the users window height and width
let winW = window.innerWidth;
let winH = window.innerHeight;

//  Function tracks the location of mouse on the page and sets the cordinates to the mose object above upon move
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //let rightHalf = ((winW/2) + (winW*.1))
    // console.log(mouse)
    console.log('mouse x cordinate is: ' + mouse.x)
    console.log('mouse y cordinate is: ' + mouse.y);
    leftHalfWindow();
    rightHalfWindow();
    
    isInsideTheRightBox();



    let leftHalfXMax  = ((winW/2) - (winW*.12))
    let leftHalfXMin  = ((winW/8))
    let leftHalfPositiveY  = ((winH/2) - ((winH/2)*.5))
    let leftHalfNegativeY  = ((winH/2) + ((winH/2)*.5))
    console.log("this is the left side X max var: " + leftHalfXMax)
    console.log("this is the left side X min var: " + leftHalfXMin)
    console.log("this is the left side +Y var: " + leftHalfPositiveY)
    console.log("this is the left side -Y var: " + leftHalfNegativeY)
    
    //console.log("this is the right side var: " + rightHalf)
})

let rightHalfXMin  = ((winW/2) + (winW*.12))
let rightHalfXMax  = (winW - (winW/6))
let rightHalfPositiveY  = ((winH/2) - ((winH/2)*.5))
let rightHalfNegativeY  = ((winH/2) + ((winH/2)*.5))

//  Sets variable values for the Right half of the window box for the icon scoll to happen
function rightHalfWindow() {
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    let rightHalfXMin  = ((winW/2) + (winW*.12))
    let rightHalfXMax  = (winW - (winW/6))
    let rightHalfPositiveY  = ((winH/2) - ((winH/2)*.5))
    let rightHalfNegativeY  = ((winH/2) + ((winH/2)*.5))
    // console.log("this is the right side X min var: " + rightHalfXMin)
    // console.log("this is the right side X max var: " + rightHalfXMax)
    // console.log("this is the right side +Y var: " + rightHalfPositiveY)
    // console.log("this is the right side -Y var: " + rightHalfNegativeY)
}

//  Sets variable values for the LEFT half of the window box for the icon scoll to happen
function leftHalfWindow() {
    console.log('test')
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    let leftHalfXMin  = ((winW/2) - (winW*.12))
    let leftHalfXMax  = (winW + (winW/6))
    let leftHalfPositiveY  = ((winH/2) - ((winH/2)*.5))
    let leftHalfNegativeY  = ((winH/2) + ((winH/2)*.5))
    console.log("this is the left side X min var: " + leftHalfXMin)
    console.log("this is the left side X max var: " + leftHalfXMax)
    console.log("this is the left side +Y var: " + leftHalfPositiveY)
    console.log("this is the left side -Y var: " + leftHalfNegativeY)
}

// Checks to see if the mouse is inside the imaginary scroll box
function isInsideTheRightBox() {
    if(mouse.x > rightHalfXMin && mouse.x < rightHalfXMax && mouse.y < rightHalfNegativeY  && mouse.y > rightHalfPositiveY ){
        console.log('The Mouse is in the box!!!');
        scrollPortfolioRight()
    } else{
        console.log('not there')
    }
}

//  sets a variable value for the right half of the window + 11%
function leftHalfWindow() {
    let winW = window.innerWidth;
    let rightHalfX = ((winW/2) - (winW*.10))
    //console.log("this is the left side var: " + rightHalfX)
}
window.addEventListener('resize', function(){
    rightHalfWindow();
    leftHalfWindow();
})
//  Create a variable for the mouse postion on the right portion of the icons


//  Create a variable for the mouse postion on the left portion of the icons




//  Creates a random wait time for animation functions
function wait() { 
    let delay = Math.random()*.5 
    return delay
}

function initPosition(){
gitHubLogo1.style.position = 'absolute';
gitHubLogo1.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
gitHubLogo1.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(gitHubLogo1);

gitHubLogo2.style.position = 'absolute';
gitHubLogo2.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
gitHubLogo2.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(gitHubLogo2);

gitHubLogo3.style.position = 'absolute';
gitHubLogo3.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
gitHubLogo3.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(gitHubLogo3);

gitHubLogo4.style.position = 'absolute';
gitHubLogo4.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
gitHubLogo4.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(gitHubLogo4);

gitHubLogo5.style.position = 'absolute';
gitHubLogo5.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
gitHubLogo5.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(gitHubLogo5);

linkedinLogo1.style.position = 'absolute';
linkedinLogo1.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
linkedinLogo1.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(linkedinLogo1);

linkedinLogo2.style.position = 'absolute';
linkedinLogo2.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
linkedinLogo2.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(linkedinLogo2);

linkedinLogo3.style.position = 'absolute';
linkedinLogo3.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
linkedinLogo3.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(linkedinLogo3);

linkedinLogo4.style.position = 'absolute';
linkedinLogo4.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
linkedinLogo4.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
document.body.appendChild(linkedinLogo4);
}
initPosition()

//TweenMax.to(gitHubLogo, 2, {rotationY:90, x:1000});

TweenMax.to(infoLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
        autoRotate: false
    },
 
    delay:wait(),
    height: winH/(2.3),
    width: winW/5,
    onComplete: function(){
        TweenMax.to(infoLogo, .1, {autoAlpha: 1});
    },
});

TweenMax.to(gitHubLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
    },
    delay:wait(),
    height: winH/(2.3),
    width: winW/5,
    onComplete: function(){
        TweenMax.to(gitHubLogo, .1, {autoAlpha: 1});
    },
});

//  function to move the portfilio icon on hover
function scrollPortfolioRight() {
    TweenMax.to(infoLogo, .5, {rotationY:-40, transformOrigin:"right 20% 200", transformPerspective:300, x:'40%', y:'', height:'60%'})
    TweenMax.to(gitHubLogo, .5, {rotationY:00, transformOrigin:"left 20% -1000", transformPerspective:300, x:'100%', y:''})
    TweenMax.to(portfolioLogo, .5, {rotationY:20, transformOrigin:"left 20% -1000", transformPerspective:400, x:'5%', y:'3%', height:'65%'})
    TweenMax.to(linkedinLogo, .5, {rotationY:50, transformOrigin:"left 20% -250", transformPerspective:400, x:'10%', y:'-5%', height:'50%'})
    TweenMax.to(resumeLogo, .5, {rotationY:120, transformOrigin:"left 20% -100", transformPerspective:100, x:'-50%', y:'0%'})
}
//  Calls the move portfolio icon on mouse over
// portfolioLogo.onmouseover = function() {
//     scrollPortfolioRight()
// }



TweenMax.to(portfolioLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
        autoRotate: false
    },
 
    delay:wait(),
    height: winH/(2.3),
    width: winW/5,
    onComplete: function(){
        TweenMax.to(portfolioLogo, .1, {autoAlpha: 1});
    },
});

TweenMax.to(linkedinLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
        autoRotate: false
    },
    delay:wait(),
    height: winH/(2.3),
    width: winW/5,
    onComplete: function(){
        TweenMax.to(linkedinLogo, .1, {autoAlpha: 1});
    },
});

TweenMax.to(resumeLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
        autoRotate: false
    },
 
    delay:wait(),
    height: winH/(2.3),
    width: winW/6,
    onComplete: function(){
        TweenMax.to(resumeLogo, .1, {autoAlpha: 1});
    },
});


TweenMax.to(gitHubLogo1, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '100%', top: '50%'},
            {left: '20%', top: '20%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(gitHubLogo1, .5, {autoAlpha: 0});
    },
});

TweenMax.to(gitHubLogo2, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-20%', top: '80%'},
            {left: '32.5%', top: '20%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(gitHubLogo2, .5, {autoAlpha: 0});
    },
});

TweenMax.to(gitHubLogo3, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '70%', top: '70%'},
            {left: '20.5%', top: '44%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(gitHubLogo3, .5, {autoAlpha: 0});
    },
});
TweenMax.to(gitHubLogo4, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '50%', top: '10%'},
            {left: '32.5%', top: '44%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(gitHubLogo4, .5, {autoAlpha: 0});
    },
});

TweenMax.to(gitHubLogo5, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '24%', top: '100%'},
            {left: '21%', top: '25%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/2,
    width: winW/4,
    onComplete: function(){
        TweenMax.to(gitHubLogo5, .5, {autoAlpha: 0});
    },
});



TweenMax.to(linkedinLogo1, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-100%', top: '-50%'},
            {left: '50%', top: '20%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(linkedinLogo1, .5, {autoAlpha: 0});
    },
});

TweenMax.to(linkedinLogo2, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-10%', top: '30%'},
            {left: '62%', top: '20%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(linkedinLogo2, .5, {autoAlpha: 0});
    },
});

TweenMax.to(linkedinLogo3, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-10%', top: '90%'},
            {left: '50%', top: '45%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(linkedinLogo3, .5, {autoAlpha: 0});
    },
});

TweenMax.to(linkedinLogo4, .1,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-5%', top: '-10%'},
            {left: '62%', top: '45%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(linkedinLogo4, .5, {autoAlpha: 0});
    },
});