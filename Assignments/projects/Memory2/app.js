
var b1 = document.getElementById('words');
var b2 = document.getElementById('numbers');
var b3 = document.getElementById('pictures');

var colorContainerStyle = []

// Change color of button 1

b1.addEventListener('click', buttonColorChange);

function buttonColorChange(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'words') {
    b1.style.backgroundColor = '#3FE31C';
    b2.style.backgroundColor = 'black';
    b3.style.backgroundColor = 'black';
    b1.style.color='black';
    b2.style.color='white';
    b3.style.color='white';
    colorContainerStyle.push('words');
    //console.log(colorContainerStyle);
  }
}

// Change color of button 2

b2.addEventListener('click', buttonColorChange2);

function buttonColorChange2(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'numbers') {
    b1.style.backgroundColor = 'black';
    b2.style.backgroundColor = '#3FE31C';
    b3.style.backgroundColor = 'black';
    b1.style.color='white';
    b2.style.color='black';
    b3.style.color='white';
    colorContainerStyle.push('numbers');
    //console.log(colorContainerStyle);
  }
}

// Change color of button 3

b3.addEventListener('click', buttonColorChange3);

function buttonColorChange3(){
  if(colorContainerStyle[colorContainerStyle.length-1] !== 'pictures') {
    b1.style.backgroundColor = 'black';
    b2.style.backgroundColor = 'black';
    b3.style.backgroundColor = '#3FE31C';
    b1.style.color='white';
    b2.style.color='white';
    b3.style.color='black';
    colorContainerStyle.push('pictures');
    //console.log(colorContainerStyle);
  }
}


var b4 = document.getElementById('easy');
var b5 = document.getElementById('hard');
var b6 = document.getElementById('insane');
var bHardBackgrounds = document.getElementById('card1');


// Stores the history of level difficulty changes:
var colorContainerDifficulity = [];
  //console.log(colorContainerDifficulity);
  //alert(colorContainerDifficulity.slice(-1));
// Outputs the current level of difficulty:
var currentDifficultyLevel = colorContainerDifficulity[colorContainerDifficulity.length - 1];
  //console.log(colorContainerDifficulity);

  for (i = 0; i < colorContainerDifficulity.length; i++) {
    console.log(colorContainerDifficulity[i]);
  }

// Change color of button 4  ENABLE EASY MODE
b4.addEventListener('click', buttonColorChange4);
function buttonColorChange4(){
  if(colorContainerDifficulity !== 0) {
    b4.style.backgroundColor = '#3FE31C';
    b5.style.backgroundColor = 'black';
    b6.style.backgroundColor = 'black';
    b4.style.color='black';
    b5.style.color='white';
    b6.style.color='white';
    colorContainerDifficulity.push(0);
    //colorContainerDifficulity.shift();
    //console.log(colorContainerDifficulity);
  }
}
// Change color of button 5  ENABLE HARD MODE
b5.addEventListener('click', buttonColorChange5);
function buttonColorChange5(){
  if(colorContainerDifficulity !== 1) {
  b4.style.backgroundColor = 'black';
  b5.style.backgroundColor = '#3FE31C';
  b6.style.backgroundColor = 'black';
  b4.style.color='white';
  b5.style.color='black';
  b6.style.color='white';
  colorContainerDifficulity.push(1);
  //colorContainerDifficulity.shift();
  //console.log(colorContainerDifficulity);
  
  }
}
// Change color of button 6  ENABLE INSANE MODE
b6.addEventListener('click', buttonColorChange6);
function buttonColorChange6(){
  if(colorContainerDifficulity !== 2) {
  b5.style.backgroundColor = 'black';
  b4.style.backgroundColor = 'black';
  b6.style.backgroundColor = '#3FE31C';
  b4.style.color='white';
  b5.style.color='white';
  b6.style.color='black';
  colorContainerDifficulity.push(2);
  //colorContainerDifficulity.shift();
  //console.log(colorContainerDifficulity);
  
  }
}


// Change Card Front color to silver in Hard Mode
var cardColorHistory = []
var cardsFrontAll = document.getElementById('front1');
var cardsFront1 = document.getElementById('front1'); 
var cardsFront2 = document.getElementById('front2'); 
var cardsFront3 = document.getElementById('front3'); 
var cardsFront4 = document.getElementById('front4'); 
var cardsFront5 = document.getElementById('front5'); 
var cardsFront6 = document.getElementById('front6'); 
var cardsFront7 = document.getElementById('front7');
var cardsFront8 = document.getElementById('front8');
var cardsFront9 = document.getElementById('front9');
var cardsFront10 = document.getElementById('front10');
var cardsFront11 = document.getElementById('front11'); 
var cardsFront12 = document.getElementById('front12'); 
var cardsFront13 = document.getElementById('front13'); 
var cardsFront14 = document.getElementById('front14'); 
var cardsFront15 = document.getElementById('front15'); 
var cardsFront16 = document.getElementById('front16'); 
var cardsFront17 = document.getElementById('front17');
var cardsFront18 = document.getElementById('front18');
var cardsFront19 = document.getElementById('front19');
var cardsFront20 = document.getElementById('front20');

b4.addEventListener('click', cardColorChangeNormal);
b5.addEventListener('click', cardColorChangeHard);
b6.addEventListener('click', cardColorChangeInsane);

function cardColorChangeNormal(){
  if(cardColorHistory[cardColorHistory.length-1] !== 'normal') {
    cardsFront1.style.backgroundColor = '#267df4';
    cardsFront2.style.backgroundColor = '#9126f4';
    cardsFront3.style.backgroundColor = '#267df4';
    cardsFront4.style.backgroundColor = '#9126f4';
    cardsFront5.style.backgroundColor = '#267df4';
    cardsFront6.style.backgroundColor = '#9126f4';
    cardsFront7.style.backgroundColor = '#267df4';
    cardsFront8.style.backgroundColor = '#9126f4';
    cardsFront9.style.backgroundColor = '#267df4';
    cardsFront10.style.backgroundColor = '#9126f4';
    cardsFront11.style.backgroundColor = '#267df4';
    cardsFront12.style.backgroundColor = '#9126f4';
    cardsFront13.style.backgroundColor = '#267df4';
    cardsFront14.style.backgroundColor = '#9126f4';
    cardsFront15.style.backgroundColor = '#267df4';
    cardsFront16.style.backgroundColor = '#9126f4';
    cardsFront17.style.backgroundColor = '#267df4';
    cardsFront18.style.backgroundColor = '#9126f4';
    cardsFront19.style.backgroundColor = '#267df4';
    cardsFront20.style.backgroundColor = '#9126f4';
    cardColorHistory.push('normal');
  //console.log(cardColorHistory);
  }
}

function cardColorChangeHard(){
  if(cardColorHistory[cardColorHistory.length-1] !== 'hard') {
    cardsFront1.style.backgroundColor = 'silver';
    cardsFront2.style.backgroundColor = 'silver';
    cardsFront3.style.backgroundColor = 'silver';
    cardsFront4.style.backgroundColor = 'silver';
    cardsFront5.style.backgroundColor = 'silver';
    cardsFront6.style.backgroundColor = 'silver';
    cardsFront7.style.backgroundColor = 'silver';
    cardsFront8.style.backgroundColor = 'silver';
    cardsFront9.style.backgroundColor = 'silver';
    cardsFront10.style.backgroundColor = 'silver';
    cardsFront11.style.backgroundColor = 'silver';
    cardsFront12.style.backgroundColor = 'silver';
    cardsFront13.style.backgroundColor = 'silver';
    cardsFront14.style.backgroundColor = 'silver';
    cardsFront15.style.backgroundColor = 'silver';
    cardsFront16.style.backgroundColor = 'silver';
    cardsFront17.style.backgroundColor = 'silver';
    cardsFront18.style.backgroundColor = 'silver';
    cardsFront19.style.backgroundColor = 'silver';
    cardsFront20.style.backgroundColor = 'silver';
  cardColorHistory.push('hard');
  //console.log(cardColorHistory);
  }
}

function cardColorChangeInsane(){
  if(cardColorHistory[cardColorHistory.length-1] !== 'insane') {
    cardsFront1.style.backgroundColor = 'black';
    cardsFront2.style.backgroundColor = 'black';
    cardsFront3.style.backgroundColor = 'black';
    cardsFront4.style.backgroundColor = 'black';
    cardsFront5.style.backgroundColor = 'black';
    cardsFront6.style.backgroundColor = 'black';
    cardsFront7.style.backgroundColor = 'black';
    cardsFront8.style.backgroundColor = 'black';
    cardsFront9.style.backgroundColor = 'black';
    cardsFront10.style.backgroundColor = 'black';
    cardsFront11.style.backgroundColor = 'black';
    cardsFront12.style.backgroundColor = 'black';
    cardsFront13.style.backgroundColor = 'black';
    cardsFront14.style.backgroundColor = 'black';
    cardsFront15.style.backgroundColor = 'black';
    cardsFront16.style.backgroundColor = 'black';
    cardsFront17.style.backgroundColor = 'black';
    cardsFront18.style.backgroundColor = 'black';
    cardsFront19.style.backgroundColor = 'black';
    cardsFront20.style.backgroundColor = 'black';
  cardColorHistory.push('insane');
  //console.log(cardColorHistory);
  }
}



//var cardsBack = document.querySelectorAll('.back');
var cardsBackArray = [].slice.call(document.querySelectorAll('.back'));
//console.log(cardsBackArray);
//var randomNumber = numbersArrayHard[Math.floor(Math.random() * numbersArrayHard.length)];

//var card = document.getElementsByClassName("back");
//let cards = [...card];

//for(var i = 0; i < cards.length; i++){
  //cards[i].addEventListener('click', displayCard);
//};

//cardsBack.forEach(cardsBack <= cardsBack.addEventListener('click', flipCard));




// Print Words

var EasyWordsArrayAnimals = ['Cat', 'Cat', 'Dog', 'Dog', 'Rabbit', 'Rabbit', 'Cow', 'Cow', 'Pig', 'Pig', 'Sheep', 'Sheep', 'Bear', 'Bear', 'Deer', 'Deer', 'Tiger', 'Tiger', 'Lion', 'Lion']

b1.addEventListener('click', printWords);
      
function printWords(){
  for(var i = 0; i < cardsBackArray.length; i++) {
      cardsBackArray[i].textContent = EasyWordsArrayAnimals[i];
  };

function shuffle(EasyWordsArrayAnimals) {
  var c = EasyWordsArrayAnimals.length, t, i;
  // While there remain elements to shuffle…
  while (0 !== c) {
  // Pick a remaining element…
    i = Math.floor(Math.random() * c);
    c -= 1;
    // And swap it with the current element.
    t = EasyWordsArrayAnimals[c];
    EasyWordsArrayAnimals[c] = EasyWordsArrayAnimals[i];
    EasyWordsArrayAnimals[i] = t;
  }
  return EasyWordsArrayAnimals;
}
EasyWordsArrayAnimals = shuffle(EasyWordsArrayAnimals);
  //console.log(EasyWordsArrayAnimals);
}     




// PRINT NUMBERS

// Number Selections
var easyNumbersArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var hardNumbersArray = [53,53,76,76,24,24,89,89,98,98,42,42,67,67,35,35.65,65,56,56];
var insaneNumbersArray = [8065,8065,4272,4272,2666,2666,2870,2870,4025,4025,9063,9063,3634,3634,9441,9441,3179,3179,7241,7241];

// Adds the event listent to the 'NUMBERS' Button
b2.addEventListener('click', printNumbers);

// Prints the numbers to the back of cards
function printNumbers(){
  // PRINTS EASY NUMBER LIST

    function shuffle(easyNumbersArray) {
      var c = easyNumbersArray.length, t, i;
      // While there remain elements to shuffle…
      while (0 !== c) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * c);
        c -= 1;
        // And swap it with the current element.
        t = easyNumbersArray[c];
        easyNumbersArray[c] = easyNumbersArray[i];
        easyNumbersArray[i] = t;
      }
      //return easyNumbersArray;
    }
    easyNumbersArray = shuffle(easyNumbersArray);
    
    for(var i = 0; i < cardsBackArray.length; i++) {
    cardsBackArray[i].textContent = easyNumbersArray[i];
    };
    
} ;
  





