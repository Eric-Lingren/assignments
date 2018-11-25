const info = document.getElementById('infoLogo')
const git = document.getElementById('gitLogo')
const portfolio = document.getElementById('portfolioLogo')
const linkedin = document.getElementById('linkedinLogo')
const resume = document.getElementById('resumeLogo')
const iconBox = document.getElementById('allIcons')

const portfolioTitle = document.getElementById('portfolioTitle')
const linkedinTitle = document.getElementById('linkedinTitle')
const gitTitle = document.getElementById('gitTitle')


// const exit1 = document.getElementById('exit1')
// const exit2 = document.getElementById('exit2')

// gitTitle.addEventListener('click', fadeOut);

// function fadeout(){
//     exit1.style.display = 'block'
//     exit2.style.display = 'block'
// }

const winH = window.innerHeight;
const winW = window.innerWidth;

console.log(resume)

function scrollPortfolioRight() {
   
    TweenMax.to(portfolio, .5, 
        {rotationY:55, 
            height:'auto', width:'19%', 
            x:'55%', y:'-3%', 
            translateY:'-3%', 
            ease: Power1.easeOut,
            onComplete: function(){
                TweenMax.to(portfolio, .01, {transformPerspective: 600, ease: Power1.easeInOut, }) }
        });

    gitCenter();

    TweenMax.to(info, .5, {rotationY:-55, height:'auto', width:'19%', x:'15%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(linkedin, .5, {rotationY:80, height:'auto', width:'13%', x:'15%', y:'-10%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:105, height:'auto', width:'8%', x:'-45%', y:'-15%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    //TweenMax.to(resume, .5, {opacity:0.7}) 
}

const linkedinCenter = () => {
    gitTitle.style.display = 'none'
    portfolioTitle.style.display = 'none'
    TweenMax.to(linkedin, .5, {rotationY:0, height:'auto', width:'27%', x:'-48%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){linkedinTitle.style.display = 'block'} }); 
} 

const gitCenter = () => {
    linkedinTitle.style.display = 'none'
    portfolioTitle.style.display = 'none'
    TweenMax.to(git, .5, {rotationY:0, height:'auto', width:'26%', x:'43%', y:'0%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, onComplete: function(){gitTitle.style.display = 'block'}});
}

function scrollPortfolioLeft() {

    TweenMax.to(portfolio, .5, 
        {rotationY:-55, 
            height:'auto', width:'19%', 
            x:'-68%', y:'-3%', 
            translateY:'-3%', 
            ease: Power1.easeOut, 
            onComplete: function(){
                TweenMax.to(portfolio, .01, {transformPerspective: 600, ease: Power1.easeInOut, }) }  
        }
    );

    linkedinCenter()

    TweenMax.to(resume, .5, {rotationY:60, height:'auto', width:'16%', x:'-35%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(git, .5, {rotationY:-80, height:'auto', width:'13%', x:'-30%', y:'-10%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(info, .5, {rotationY:-105, height:'auto', width:'10%', x:'20%', y:'-20%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    //TweenMax.to(info, .5, {opacity:.5})
    
}



function scrollPortfolioCenter() {
    // TweenMax.to(info, .5, {rotationY:-40, transformOrigin:"right 20% 200", transformPerspective:300, x:'40%', y:'', height:'60%'})
    // TweenMax.to(git, .5, {rotationY:00, transformOrigin:"left 20% -1000", transformPerspective:300, x:'100%', y:''})
    
    TweenMax.to(portfolio, .5, 
        {rotationY:0, 
        height:'auto', width:'27%', 
        x:'0%', y:'0%', 
        translateY:'0%',  
        ease: Power1.easeOut,
        onComplete: function(){
            TweenMax.to(portfolio, .01, {transformPerspective: 0, ease: Power1.easeInOut, }) }
    });

    TweenMax.to(git, .5, {rotationY:-55, height:'auto', width:'19%', x:'0%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(info, .5, {rotationY:-75, height:'auto', width:'13%', x:'0%', y:'-7%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    TweenMax.to(linkedin, .5, {rotationY:55, height:'auto', width:'19%', x:'0%', y:'-3%', translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});

    TweenMax.to(resume, .5, {rotationY:80, height:'auto', width:'10%', x:'0%', y:'-7%', translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});

    //TweenMax.to(resume, .5, {opacity:0.7}) 
}



git.addEventListener('click', scrollPortfolioRight)
linkedin.addEventListener('click', scrollPortfolioLeft)
portfolio.addEventListener('click', scrollPortfolioCenter)