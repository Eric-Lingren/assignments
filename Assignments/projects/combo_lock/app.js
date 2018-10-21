//Generates 3 random numbers for the suitcase side
function getRandomIntSuitcase(){
  document.getElementById('randomoutputsuitcase1').innerHTML = Math.floor(Math.random()*10);
  document.getElementById('randomoutputsuitcase2').innerHTML = Math.floor(Math.random()*10);
  document.getElementById('randomoutputsuitcase3').innerHTML = Math.floor(Math.random()*10);

}

document.getElementById('generatesuitcase').addEventListener('click', getRandomIntSuitcase);

//Generates 3 random numbers for the locker side
function getRandomIntLocker(){
  document.getElementById('randomoutputlocker1').innerHTML = Math.floor(Math.random()*100);
  document.getElementById('randomoutputlocker2').innerHTML = Math.floor(Math.random()*100);
  document.getElementById('randomoutputlocker3').innerHTML = Math.floor(Math.random()*100);

}

document.getElementById('generatelocker').addEventListener('click', getRandomIntLocker);



