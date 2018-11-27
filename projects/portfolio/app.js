const info = document.getElementById('infoImageURL')
const git = document.getElementById('gitImageURL')
const portfolio = document.getElementById('portfolioImageURL')
const linkedin = document.getElementById('linkedinImageURL')
const resume = document.getElementById('resumeImageURL')
const iconBox = document.getElementById('allIcons')

const portfolioTitle = document.getElementById('portfolioTitle')
const linkedinTitle = document.getElementById('linkedinTitle')
const gitTitle = document.getElementById('gitTitle')


const audio1 = new Audio('./sound1.wav');
const audio2 = new Audio('./sound2.wav');
const audio3 = new Audio('./sound3.mp3');
const audio4 = new Audio('./sound4.wav');
const audio5 = new Audio('./sound5.wav');
const audio6 = new Audio('./sound6.wav');
const audio7 = new Audio('./sound7.mp3');
const audio8 = new Audio('./sound8.wav');
const audio9 = new Audio('./sound9.wav');

// const exit1 = document.getElementById('exit1')
// const exit2 = document.getElementById('exit2')

// gitTitle.addEventListener('click', fadeOut);

// function fadeout(){
//     exit1.style.display = 'block'
//     exit2.style.display = 'block'
// }

const winH = window.innerHeight;
const winW = window.innerWidth;

let whereIsCenter = 'portfolioIsCenter';

const linkedinCenter = () => {
    portfolioTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    gitTitle.style.display = 'none'
    infoTitle.style.display = 'none'
    whereIsCenter = 'linkedinIsCenter';
    git.style.cursor = 'default'
    TweenMax.to(linkedin, .5, {rotationY:0, height:'auto', width:'27%', x:'-42%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){linkedinTitle.style.display = 'block'} }); 
} 

const gitCenter = () => {
    portfolioTitle.style.display = 'none'
    infoTitle.style.display = 'none'
    linkedinTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    whereIsCenter = 'gitIsCenter';
    TweenMax.to(git, .5, {rotationY:0, height:'auto', width:'26%', x:'40%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){gitTitle.style.display = 'block'}});
    makeGithubURLClickable()
}

const resumeCenter = () => {
    whereIsCenter = 'resumeIsCenter';
    linkedinTitle.style.display = 'none';
    portfolioTitle.style.display = 'none';
    infoTitle.style.display = 'none';
    git.style.cursor = 'default';
    TweenMax.to(resume, .5, {rotationY:0, height:'auto', width:'21%', x:'-85%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){resumeTitle.style.display = 'block', resumeTitle.style.marginLeft = '-3.5%'}});
}
const infoCenter = () => {
    whereIsCenter = 'infoIsCenter';
    gitTitle.style.display = 'none'
    linkedinTitle.style.display = 'none'
    portfolioTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    git.style.cursor = 'default';
    TweenMax.to(info, .5, {rotationY:0, height:'auto', width:'27%', x:'65%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){infoTitle.style.display = 'block'}});
}

const portfolioInCenterPosition = () => {
    whereIsCenter = 'portfolioIsCenter';
    gitTitle.style.display = 'none'
    linkedinTitle.style.display = 'none'
    infoTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    git.style.cursor = 'default';
    TweenMax.to(portfolio, .5, {rotationY:0, height:'auto', width:'27%', x:'0%', y:'0%', translateY:'0%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){ portfolioTitle.style.display = 'block' }
    });
}

function scrollPortfolioCenter() {
    //audio1.play() // Best Option i think

    portfolioInCenterPosition();

    TweenMax.to(git, .5, {rotationY:-55, height:'auto', width:'19%', x:'0%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(info, .5, {rotationY:-75, height:'auto', width:'13%', x:'0%', y:'-7%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(linkedin, .5, {rotationY:55, height:'auto', width:'19%', x:'0%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:80, height:'auto', width:'10%', x:'0%', y:'-7%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

}

function scrollPortfolioRight() {
    //audio1.play()
    gitCenter();

    TweenMax.to(portfolio, .5, {rotationY:55, height:'auto', width:'19%', x:'55%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, });

    TweenMax.to(info, .5, {rotationY:-55, height:'auto', width:'19%', x:'15%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(linkedin, .5, {rotationY:80, height:'auto', width:'12%', x:'24%', y:'-10%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:90, height:'auto', width:'8%', x:'20%', y:'-20%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
}

function scrollPortfolioFarRight() {
    //audio1.play()
    infoCenter();

    TweenMax.to(linkedin, .5, {rotationY:90, height:'auto', width:'9%', x:'75%', y:'-20%', translateY:'-7%', transformPerspective: 600, ease: Power1.easeOut});


    TweenMax.to(portfolio, .5, {rotationY:80, height:'auto', width:'12%', x:'150%', y:'-10%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(git, .5, {rotationY:55, height:'auto', width:'19%', x:'136%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:90, height:'auto', width:'10%', x:'50%', y:'-20%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    
}


function scrollPortfolioLeft() {
    //audio1.play()
    linkedinCenter()

    TweenMax.to(portfolio, .5, {rotationY:-55, height:'auto', width:'19%', x:'-60%', y:'-3%', translateY:'-3%',transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:60, height:'auto', width:'15%', x:'-35%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(git, .5, {rotationY:-80, height:'auto', width:'12%', x:'-30%', y:'-10%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(info, .5, {rotationY:-90, height:'auto', width:'10%', x:'-25%', y:'-15%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut, });
}

function scrollPortfolioFarLeft() {
    //audio1.play()
    resumeCenter();

    TweenMax.to(linkedin, .5, {rotationY:-45, height:'auto', width:'19%', x:'-140%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(portfolio, .5, {rotationY:-75, height:'auto', width:'12%', x:'-170%', y:'-12%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(git, .5, {rotationY:-90, height:'auto', width:'10%', x:'-95%', y:'-15%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(info, .5, {rotationY:-90, height:'auto', width:'10%', x:'-70%', y:'-20%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    
}


git.addEventListener('click', scrollPortfolioRight)
linkedin.addEventListener('click', scrollPortfolioLeft)
resume.addEventListener('click', scrollPortfolioFarLeft)
portfolio.addEventListener('click', scrollPortfolioCenter)
info.addEventListener('click', scrollPortfolioFarRight)



//  Adds an event listener to the keyboard for the entire window
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keypress", checkKeyPressed, false);

//  Checks if an arrow key is pressed right or left, checks the center image position, 
//   and then the correct scroll functions execute
function checkKeyPressed(e) {
    if (e.keyCode == "37" && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioRight();
     } else if (e.keyCode == "37" && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioFarRight();
     } else if (e.keyCode == "39" && whereIsCenter === 'infoIsCenter') {
        scrollPortfolioRight();
     } else if (e.keyCode == "39" && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioCenter();
     } else if (e.keyCode == "39" && whereIsCenter === 'portfolioIsCenter'){
         scrollPortfolioLeft()
    } else if (e.keyCode == "39" && whereIsCenter === 'linkedinIsCenter'){
        scrollPortfolioFarLeft()
    } else if (e.keyCode == "37" && whereIsCenter === 'resumeIsCenter'){
        scrollPortfolioLeft()
    } else if (e.keyCode == "37" && whereIsCenter === 'linkedinIsCenter'){
        scrollPortfolioCenter()
    }
}

// Adds an event listener to the mouse scroll wheel for the entire window
window.addEventListener('wheel', scrollWheelAction);

//  Checks if the mouse wheel is scrolled up or down, checks the center image position, 
//   and then the correct scroll functions execute
function scrollWheelAction(e){
    if (e.deltaY > 0 && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioRight();
    } else if (e.deltaY > 0 && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioFarRight();
    } else if (e.deltaY < 0 && whereIsCenter === 'infoIsCenter') {
        scrollPortfolioRight();
    } else if (e.deltaY < 0 && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioCenter();
    } else if (e.deltaY < 0 && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioLeft();
    } else if (e.deltaY > 0 && whereIsCenter === 'linkedinIsCenter') {
        scrollPortfolioCenter();
    } else if (e.deltaY < 0 && whereIsCenter === 'linkedinIsCenter') {
        scrollPortfolioFarLeft();
    } else if (e.deltaY > 0 && whereIsCenter === 'resumeIsCenter') {
        scrollPortfolioLeft();
    }
}

//  Navigate to github if git log is clicked and git is the center icon
function makeGithubURLClickable(){
        git.onclick = "return true"
        git.style.cursor = 'pointer'
}

//  Checks if the image is in the center position, and only allows the url tag in the image to be clickable if it is

