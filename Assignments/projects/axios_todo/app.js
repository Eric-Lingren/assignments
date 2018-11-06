

// var axios = require('axios');

axios.get('https://api.vschool.io/ericlingren/todo').then(function(response){
    var listArray = response.data
    pullArray(listArray)
   
    }).catch(function(error){
        console.log(error);
    });

function pullArray (listArray){
 
    for (var i = 0; i < listArray.length; i++) {
        var toDoContainer = document.createElement('div');
        toDoContainer.classList.add ('todo');

            //  Create HTML elements
        var title = document.createElement('h2');
            title.classList.add ('description');
        var description = document.createElement('p');
            description.classList.add ('description');
        var isCompleted = document.createElement('p');
            isCompleted.classList.add ('completed');
        var image = document.createElement('img');

        image.setAttribute('src', listArray[i].imgUrl)

            //  Put the to-do items inside the div element
        title.textContent = listArray[i].title;
        description.textContent = listArray[i].description;
        isCompleted.textContent = listArray[i].isCompleted;

        
        
            // Put the element on the DOM
        toDoContainer.appendChild(title);
        toDoContainer.appendChild(description);
        toDoContainer.appendChild(isCompleted);
        toDoContainer.appendChild(image);

        document.getElementById('list-container').appendChild(toDoContainer);

        //console.log(completed.textContent);
            //  Check to see if the item has ben completed.  If so, it crosses off the item.
        if (isCompleted.textContent === 'true'){
            title.style.textDecoration = 'line-through'
        }  
    }
}

var form = document.listForm
   
        form.addEventListener('submit', function(event){
            event.preventDefault();
            var inputTitle = form.title.value;
            var inputDescription = form.description.value;
            var inputPrice = form.price.value;
            var inputComplete = form.complete.value;
            // alert('hey!');
        var newToDo = {};
            newToDo.title =  inputTitle;
            newToDo.description =  inputDescription;
            newToDo.price =  inputPrice;
            newToDo.completed =  inputComplete;

             
        axios.post('https://api.vschool.io/ericlingren/todo', newToDo).then(function(response){
            console.log(response.data);
            })


        })

