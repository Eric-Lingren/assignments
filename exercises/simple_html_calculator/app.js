

//  Add 2 numbers
var addForm = document.addForm;

addForm.addEventListener('submit', function(event){
    event.preventDefault();
    var number1 = addForm.firstAdd.value;
    var number2 = addForm.secondAdd.value;
    var answer = parseFloat(number1) + parseFloat(number2);
    //alert(`Answer is ${answer} `);
    var resultBox = document.getElementById('resultAdd');
    resultBox.innerHTML = answer;

});


var subtractForm = document.subtractForm;

subtractForm.addEventListener('submit', function(event){
    event.preventDefault();
    var number1 = subtractForm.firstSubtract.value;
    var number2 = subtractForm.secondSubtract.value;
    var answer = parseFloat(number1) - parseFloat(number2);
    //alert(`Answer is ${answer} `);
    var resultBox = document.getElementById('resultSubtract');
    resultBox.innerHTML = answer;
});

var multiplyForm = document.multiplyForm;

multiplyForm.addEventListener('submit', function(event){
    event.preventDefault();
    var number1 = multiplyForm.firstMultiply.value;
    var number2 = multiplyForm.secondMultiply.value;
    var answer = parseFloat(number1) * parseFloat(number2);
    //alert(`Answer is ${answer} `);
    var resultBox = document.getElementById('resultMultiply');
    resultBox.innerHTML = answer;
});
