const gitHubLogo = document.getElementById('gitLogo');
const gitHubLogo1 = document.getElementById('gitLogo1');
const gitHubLogo2 = document.getElementById('gitLogo2');
const gitHubLogo3 = document.getElementById('gitLogo3');
const gitHubLogo4 = document.getElementById('gitLogo4');
const gitHubLogo5 = document.getElementById('gitLogo5');

const winW = window.innerWidth;
const winH = window.innerHeight;
function wait() { 
    let delay = Math.random()*1 
    return delay
}

// function initPosition(){
// gitHubLogo1.style.position = 'absolute';
// gitHubLogo1.style.left = Math.round(Math.random() * document.body.scrollHeight) + 'px';
// gitHubLogo1.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
// document.body.appendChild(gitHubLogo1);
// }
// initPosition()

//TweenMax.to(gitHubLogo, 2, {rotationY:90, x:1000});
TweenMax.to(gitHubLogo1, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
TweenMax.to(gitHubLogo2, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
TweenMax.to(gitHubLogo3, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
TweenMax.to(gitHubLogo4, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:200, width:200});
TweenMax.to(gitHubLogo5, 3, {delay:wait(), ease:Power2.easeOut, rotationY:360, rotationX:360, x:10, y:10, height:300, width:300});


