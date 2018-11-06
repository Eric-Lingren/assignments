

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
        var completed = document.createElement('p');
            completed.classList.add ('completed');
        var image = document.createElement('img');

        image.setAttribute('src', listArray[i].imgUrl)

            //  Put the to-do items inside the div element
        title.textContent = listArray[i].title;
        description.textContent = listArray[i].description;
        completed.textContent = listArray[i].completed;

        
        
            // Put the element on the DOM
        toDoContainer.appendChild(title);
        toDoContainer.appendChild(description);
        toDoContainer.appendChild(completed);
        toDoContainer.appendChild(image);

        document.getElementById('list-container').appendChild(toDoContainer);

        console.log(completed.textContent);
            //  Check to see if the item has ben completed.  If so, it crosses off the item.
        if (completed.textContent === 'true'){
            title.style.textDecoration = 'line-through'
        }

    }
}

