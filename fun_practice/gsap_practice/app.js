const gitHubLogo = document.getElementById('gitLogo');
const gitHubLogo1 = document.getElementById('gitLogo1');
const gitHubLogo2 = document.getElementById('gitLogo2');
const gitHubLogo3 = document.getElementById('gitLogo3');
const gitHubLogo4 = document.getElementById('gitLogo4');
const gitHubLogo5 = document.getElementById('gitLogo5');

const winW = window.innerWidth;
const winH = window.innerHeight;
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

TweenMax.to(gitHubLogo, 3,  { 
    bezier: {
        type: 'thru',
        values: [
            {left: '0%', top: '0%'},
            {left: '20%', top: '20%'},
        ],
        autoRotate: false
    },
 
    delay:wait(),
    height: winH/2,
    width: winW/4,
    onComplete: function(){
        TweenMax.to(gitHubLogo, .1, {autoAlpha: 1});
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
    height: winH/2,
    width: winW/4,
    onComplete: function(){
        TweenMax.to(linkedinLogo, .1, {autoAlpha: 1});
    },
});


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
    height: winH/4,
    width: winW/8,
    onComplete: function(){
        TweenMax.to(gitHubLogo1, .5, {autoAlpha: 0});
    },
});

TweenMax.to(gitHubLogo2, 3,  { 
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

TweenMax.to(gitHubLogo3, 3,  { 
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
TweenMax.to(gitHubLogo4, 3,  { 
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

TweenMax.to(gitHubLogo5, 3,  { 
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



TweenMax.to(linkedinLogo1, 3,  { 
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

TweenMax.to(linkedinLogo2, 3,  { 
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

TweenMax.to(linkedinLogo3, 3,  { 
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

TweenMax.to(linkedinLogo4, 3,  { 
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