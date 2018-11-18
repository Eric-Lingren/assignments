window.addEventListener('click', clicker);

let sessionCounter = sessionStorage.getItem('mySessionCounter');
let localCounter = localStorage.getItem('myLocalCounter');


//sessionStorage.setItem("mySessionCounter", counter);

function clicker(){
   
    localCounter++
    document.getElementById('result').innerHTML = localCounter;
    localStorage.setItem("myLocalCounter", localCounter);
    
    sessionCounter++
    document.getElementById('result2').innerHTML = sessionCounter;
    sessionStorage.setItem("MySessionCounter", sessionCounter);

    
   
}

