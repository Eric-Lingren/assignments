const info = document.getElementById('infoLogo')
const git = document.getElementById('gitLogo')
const portfolio = document.getElementById('portfolioLogo')
const linkedin = document.getElementById('linkedinLogo')
const resume = document.getElementById('resumeLogo')

console.log(resume)

function scrollPortfolioRight() {
    // TweenMax.to(info, .5, {rotationY:-40, transformOrigin:"right 20% 200", transformPerspective:300, x:'40%', y:'', height:'60%'})
    // TweenMax.to(git, .5, {rotationY:00, transformOrigin:"left 20% -1000", transformPerspective:300, x:'100%', y:''})
    TweenMax.to(portfolio, .5, {rotationY:25, transformOrigin:"left 65% -570", transformPerspective:400, x:'60%', y:'-6%', height:'85%'})
    TweenMax.to(linkedin, .5, {opacity:0.5})
    // TweenMax.to(linkedin, .5, {rotationY:50, transformOrigin:"left 20% -250", transformPerspective:400, x:'10%', y:'-5%', height:'50%'})
    // TweenMax.to(resume, .5, {rotationY:120, transformOrigin:"left 20% -100", transformPerspective:100, x:'-50%', y:'0%'})
}

function scrollPortfolioLeft() {
    // TweenMax.to(info, .5, {rotationY:-40, transformOrigin:"right 20% 200", transformPerspective:300, x:'40%', y:'', height:'60%'})
    // TweenMax.to(git, .5, {rotationY:00, transformOrigin:"left 20% -1000", transformPerspective:300, x:'100%', y:''})
    TweenMax.to(portfolio, .5, {rotationY:-25, transformOrigin:"right 65% -570", transformPerspective:400, x:'-60%', y:'-6%', height:'85%'})
    TweenMax.to(git, .5, {opacity:0.5})
    // TweenMax.to(linkedin, .5, {rotationY:50, transformOrigin:"left 20% -250", transformPerspective:400, x:'10%', y:'-5%', height:'50%'})
    // TweenMax.to(resume, .5, {rotationY:120, transformOrigin:"left 20% -100", transformPerspective:100, x:'-50%', y:'0%'})
}

// perspective(600px) rotateY(55deg) translateY(-3%)
linkedin.addEventListener('click', scrollPortfolioRight)
git.addEventListener('click', scrollPortfolioLeft)