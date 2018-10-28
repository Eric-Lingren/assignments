

function yScroll(){
    var pageTop = document.getElementById('pageTop');
    var menu = document.getElementById('menu');
    var yPosition = window.pageYOffset;
    var logo1 = document.getElementById('logo');
    var logo2 = document.getElementById('logo2');
    var wrapper = document.getElementById('wrapper');

    if (yPosition > 100){
        pageTop.style.height = '30px';
        logo1.style.display='none';
        logo2.style.display='initial';
        logo2.style.marginTop='0px';
        menu.style.marginTop = '30px';
        //wrapper.style.marginTop='100px';
       
    } else {
        pageTop.style.height = '200px';
        logo1.style.display='initial';
        logo2.style.display='none';
        //pageTop.style.paddingTop = '50px';
       // menu.style.height = '45px';
        menu.style.marginTop = '115px';
        //wrapper.style.marginTop='600px';
    }
};

window.addEventListener('scroll', yScroll);




