console.log('hello')

var form = document.travelerInfo;

form.addEventListener('submit', function(event){
    event.preventDefault(); 
    var fName = form.firstName.value;
    //var fName2 = form.firstName.value ;
    var lName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var destination = form.destination.value;
    var checkedDiet = [];
    var diet = form.querySelectorAll('input[name=diet]:checked');
    for(var i = 0; i < diet.length; i++){
        checkedDiet.push(diet[i].value);
    }
    //alert('First Name 1:' + fName +  '\n First Name2:' + fName2);
    alert(`First Name: ${fName}\n Last Name: ${lName}\n Age: ${age}\n Gender: ${gender}\n Destination: ${destination}\n Dietary Restrictions: ${checkedDiet}\n `);
});