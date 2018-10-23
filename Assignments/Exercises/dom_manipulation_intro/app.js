
/*
var newList = document.getElementById('div1');

//newList.textContent ='hello';



var candyList = document.getElementById('candyList');
var li = document.createElement('li');
var textNode = document.createTextNode('Runts');
li.appendChild(textNode);

candyList.appendChild(li);
*/


var box = document.getElementById('colorBox');

//  Change to blue on mouse over
box.addEventListener('mouseover', function(){
    box.style.backgroundColor = 'blue';
});


 //Change red when mouse pressed down
 box.addEventListener('mousedown', function(){
    box.style.backgroundColor = 'red';
});

 //Change yellow when mouse is let go
 box.addEventListener('mouseup', function(){
    box.style.backgroundColor = 'yellow';
});

 //Change green when mouse is double clicked
 box.addEventListener('dblclick', function(){
    box.style.backgroundColor = 'green';
});

 //Change orange when mouse scroll is used anywhere
 window.addEventListener('wheel', function(){
    box.style.backgroundColor = 'orange';
});


document.addEventListener('keydown', function(event) {
    console.log(event.which);
    if(event.which === 82) {
        box.style.backgroundColor = 'red'
    } else if (event.which === 66){
        box.style.backgroundColor = 'blue'
    } else if (event.which === 89){
        box.style.backgroundColor = 'yellow'
    } else if (event.which === 71){
        box.style.backgroundColor = 'green'
    } else if (event.which === 79){
        box.style.backgroundColor = 'orange'
    }
})