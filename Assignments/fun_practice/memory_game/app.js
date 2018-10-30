

var b1 = document.getElementById('button1');
var b2 = document.getElementById('button2');
var b3 = document.getElementById('button3');

var colorContainerStyle = []

// Change color of button 1

b1.addEventListener('click', buttonColorChange);

function buttonColorChange(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'words') {
    b1.style.backgroundColor = '#F41C54';
    b2.style.backgroundColor = 'black';
    b3.style.backgroundColor = 'black';
    colorContainerStyle.push('words');
    console.log(colorContainerStyle);
  }
}

// Change color of button 2

b2.addEventListener('click', buttonColorChange2);

function buttonColorChange2(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'numbers') {
    b1.style.backgroundColor = 'black';
    b2.style.backgroundColor = '#5AE80C';
    b3.style.backgroundColor = 'black';
    colorContainerStyle.push('numbers');
    console.log(colorContainerStyle);
  }
}

// Change color of button 3

b3.addEventListener('click', buttonColorChange3);

function buttonColorChange3(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'pictures') {
    b1.style.backgroundColor = 'black';
    b2.style.backgroundColor = 'black';
    b3.style.backgroundColor = '#00AAB5';
    colorContainerStyle.push('pictures');
    console.log(colorContainerStyle);
  }
}



var b4 = document.getElementById('button4');
var b5 = document.getElementById('button5');
var bHardBackgrounds = document.getElementById('card1');

var colorContainerDifficulity = []

// Change color of button 4
b4.addEventListener('click', buttonColorChange4);
function buttonColorChange4(){
  if(colorContainerDifficulity[colorContainerDifficulity.length-1] !== 'green') {
    b4.style.backgroundColor = 'green';
    b5.style.backgroundColor = 'black';
    colorContainerDifficulity.push('green');
    console.log(colorContainerDifficulity);
  }
}
// Change color of button 5
b5.addEventListener('click', buttonColorChange5);
function buttonColorChange5(){
  if(colorContainerDifficulity[colorContainerDifficulity.length-1] !== 'red') {
  b5.style.backgroundColor = 'red';
  b4.style.backgroundColor = 'black';
  colorContainerDifficulity.push('red');
  console.log(colorContainerDifficulity);
  bHardBackgrounds.background = 'white';
  }
}