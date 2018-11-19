const gitHubLogo = document.getElementById('gitLogo');
const gitHubLogo1 = document.getElementById('gitLogo1');
const linkedinLogo = document.getElementById('linkedinLogo');


const winW = window.innerWidth;
const winH = window.innerHeight;

// function initPosition(){
// gitHubLogo1.style.position = 'absolute';
// gitHubLogo1.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
// gitHubLogo1.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
// document.body.appendChild(gitHubLogo1);
// }
// initPosition()

// TweenMax.to(gitHubLogo, 2, {rotationY:180, x:1000});
TweenMax.to(gitHubLogo, 10, {bezier:[{x:0, y:0}, {x:1000, y:-100}, {x:500, y:-200}, {x:0, y:0}], transform: "rotateY(180deg)", ease:Power0.easeNone, repeat:-1});

TweenMax.to(linkedinLogo, 5, {bezier:{type:"cubic", values:[{x:0, y:0}, {x:1000, y:-100}, {x:500, y:-200}, {x:0, y:0}], autoRotate:["x","y","rotation",90,false]}, ease:Power0.easeNone});


// TweenMax.to(gitHubLogo2, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
// TweenMax.to(gitHubLogo3, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
// TweenMax.to(gitHubLogo4, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
// TweenMax.to(gitHubLogo5, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:300, width:300});


