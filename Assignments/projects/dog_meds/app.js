



var list = document.getElementById('entryList');
var button = document.getElementById('button');



// console.log(fullDate);
// console.log(hours);
// console.log(minutes);

var today = new Date;
var hours = today.getHours();

button.addEventListener('click', addEntry);

function addEntry(){
    var today = new Date;
    var fullDate = today.toLocaleString();
    
    var minutes = today.getMinutes();
    list.innerHTML += 
    `<div class='list'>
        <h3> Last medicine received3: </h2>
        <p class='para'> ${fullDate} </p>
    </div>`;

    changeBackgroundColor();
}


function changeBackgroundColor(){
    var myDiv = document.getElementById('entryList');
    var ptags = myDiv.getElementsByClassName('para');
    console.log(ptags);

    for(i = 0; i < ptags.length; i++){
        if (hours > 12){
        ptags[i].style.backgroundColor = 'lightgreen';
        } else if (hours < 12) {
            ptags[i].style.backgroundColor = 'red';
        }
    } 
}