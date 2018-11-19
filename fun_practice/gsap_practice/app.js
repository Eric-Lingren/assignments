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

TweenMax.to(gitHubLogo1, 3,  { 
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
    height: 200,
    width: 200,
});

TweenMax.to(gitHubLogo2, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '-20%', top: '80%'},
            {left: '34%', top: '20%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: 200,
    width: 200,
});

TweenMax.to(gitHubLogo3, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '70%', top: '70%'},
            {left: '20.6%', top: '49%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: 200,
    width: 200,
});
TweenMax.to(gitHubLogo4, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '50%', top: '10%'},
            {left: '34%', top: '49%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: 200,
    width: 200,
});

TweenMax.to(gitHubLogo5, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '25%', top: '100%'},
            {left: '23%', top: '33%'},
        ],
        rotationY:360, 
        rotationX:360,
        autoRotate: false
    },
    delay:wait(),
    ease:Power2.easeOut,
    height: 330,
    width: 330,
});





