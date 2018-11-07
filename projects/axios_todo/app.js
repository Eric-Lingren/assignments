
// var axios = require('axios');

axios.get('https://api.vschool.io/ericlingren/todo').then(function(response){
    var listArray = response.data
    pullArray(listArray)
   
    }).catch(function(error){
        console.log(error);
    });

function pullArray (listArray){
 
    for (let i = 0; i < listArray.length; i++) {
        let toDoId = listArray[i]._id
        const toDoContainer = document.createElement('div');
        toDoContainer.classList.add ('todo');
        toDoContainer.setAttribute('id', toDoId[i]);
       
        //console.log(toDoId)

        //container.setAttribute('id', toDoId)

            //  Create HTML elements
        var title = document.createElement('h3');
            title.classList.add ('title');
        var description = document.createElement('p');
            description.classList.add ('description');
        var price = document.createElement('p');
            price.classList.add ('price');
        var isCompleted = document.createElement('p');
            isCompleted.classList.add ('completed');

            //Created a complete item button
        var completeButton = document.createElement('img');
        completeButton.setAttribute('src', './complete.png');
        completeButton.classList.add ('completeButton');
        var completeText = document.createTextNode('Complete');
        completeButton.appendChild(completeText);
        completeButton.id = toDoId;

        
        //creates a function to change record between completed and not completed
        completeButton.addEventListener('click', function(){
            console.log(listArray[i].completed)
            if(listArray[i].completed === false) {
            axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, { completed: true} ).then(function(response){
            console.log(response.data);
                });
            } else {
                axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, { completed: false} ).then(function(response){
            console.log(response.data);
                });
            }
        });
    

         //  Creates an edit item button
         var editButton = document.createElement('img');
         editButton.setAttribute('src', './edit.png');
         editButton.classList.add ('editButton');
         var editText = document.createTextNode('edit');
         editButton.appendChild(editText);
         editButton.id = toDoId;

        //  Creates an publish item button
        var publishButton = document.createElement('img');
        publishButton.setAttribute('src', './publish.png');
        publishButton.classList.add ('publishButton');
        var publishText = document.createTextNode('publish');
        publishButton.appendChild(publishText);
        publishButton.id = toDoId;
        publishButton.style.visibility = 'hidden';

        //////////////////////////
        //To Create the edit fields for the to do list item
        //////////////////////////
        

        // Creates a form in the div
        let editForm = document.createElement('form');
        //Sets the name for the new form
        editForm.setAttribute('editForm', '');
        toDoContainer.appendChild(editForm);

        //  Creates the edit fields for title
        let editTitle = document.createElement('input');
        //Sets the name for the new title input field
        editTitle.setAttribute('editTitle', '');
        //  Sets the placeholder in the new title input
        editTitle.setAttribute('placeholder', listArray[i].title);
        editTitle.classList.add ('editField');
        editTitle.value = listArray[i].title;
        //  Hide the element when it is created
        editTitle.style.display = 'none';

        //  Creates the edit fields for description
        let editDescription = document.createElement('input');
        //Sets the name for the new description input field
        editDescription.setAttribute('editDescription', '');
        //  Sets the placeholder in the new description input
        editDescription.setAttribute('placeholder', listArray[i].description);
        editDescription.classList.add ('editField');
        editDescription.value = listArray[i].description;
         //  Hide the element when it is created
        editDescription.style.display = 'none';

        //  Creates the edit fields for price
        let editPrice = document.createElement('input');
        //Sets the name for the new Price input field
        editPrice.setAttribute('editPrice', '');
        //  Sets the placeholder in the new Price input
        editPrice.setAttribute('placeholder', listArray[i].price);
        editPrice.classList.add ('editField');
        editPrice.value = listArray[i].price;
         //  Hide the element when it is created
        editPrice.style.display = 'none';


        //  Creates the edit fields for Image
        let editImage = document.createElement('input');
        //Sets the name for the new Image input field
        editImage.setAttribute('editImage', '');
        //  Sets the placeholder in the new Image input
        editImage.setAttribute('placeholder', listArray[i].imgUrl);
        editImage.classList.add ('editField');
        editImage.value = listArray[i].imgUrl;
         //  Hide the element when it is created
        editImage.style.display = 'none';

        //  Adds the newly created form elements into the form
        editForm.appendChild(editTitle);
        editForm.appendChild(editDescription);
        editForm.appendChild(editPrice);
        editForm.appendChild(editImage);

    
        //  creates a function to change the text to an input box
         editButton.addEventListener('click', function(){
            this.style.display = 'none'; 
            this.parentNode.children[1].style.display = 'none';
            this.parentNode.children[2].style.display = 'none';
            this.parentNode.children[3].style.display = 'none';
            this.parentNode.children[4].style.display = 'none';
            //  Show the elements when the edit button is clicked
            editTitle.style.display = 'block';
            editDescription.style.display = 'block';
            editPrice.style.display = 'block';
            editImage.style.display = 'block';
            publishButton.style.visibility = 'visible';
            //  Hide the title element when clicked
            console.log(listArray[i].title);
           // let myTitle = listArray[i].title
            // console.log(listArray[i]);
            // console.log(myTitle);
            //console.log(toDoContainer)
            console.log(title)

            
            //  axios.put(`https://api.vschool.io/ericlingren/todo/${this.id}`, { completed: true} ).then(function(response){
            //  console.log(response.data);
            //      });
         });
 

        
            // Creates a delete button
        var deleteButton = document.createElement('img');
        deleteButton.setAttribute('src', './delete.png');
        deleteButton.classList.add ('deleteButton');
        var deleteText = document.createTextNode('delete');
        deleteButton.appendChild(deleteText);
        deleteButton.id = toDoId;
            //creates a function to delete record when clicked
        deleteButton.addEventListener('click', function(){
            // console.dir(this)
            axios.delete(`https://api.vschool.io/ericlingren/todo/${this.id}`).then(function(response){
            console.log(response.data);
                });
        });

            //  Adds an image to the div element
        var image = document.createElement('img');
        image.setAttribute('src', listArray[i].imgUrl);
        image.classList.add('urlimage');
            //  doesnt display the broken image link if the image has no image.
        if(!listArray[i].imgUrl) {
            image.style.display='none';
        } 


            //  Put the to-do items inside the div element
        title.textContent = listArray[i].title;
        description.textContent = listArray[i].description;
        price.textContent = (`Price: ${listArray[i].price}`);
        isCompleted.textContent = (`Completed: ${listArray[i].completed}`);

       

            // Put the element on the DOM
        toDoContainer.appendChild(title);
        toDoContainer.appendChild(description);
        toDoContainer.appendChild(price);
        toDoContainer.appendChild(isCompleted);
        toDoContainer.appendChild(completeButton);
        toDoContainer.appendChild(editButton);
        toDoContainer.appendChild(deleteButton);
        toDoContainer.appendChild(image);
        toDoContainer.appendChild(publishButton);
      
      

        // toDoContainer.appendChild(image);

        document.getElementById('list-container').appendChild(toDoContainer);

            //  Check to see if the item has been completed.  If so, it crosses off the item.
        if (isCompleted.textContent === 'Completed: true'){
            title.style.textDecoration = 'line-through'
            title.style.color = 'black'
            isCompleted.style.color = 'black'
        }  
    }
}

var form = document.listForm;
   
form.addEventListener('submit', function(event){
    event.preventDefault();
    var inputTitle = form.title.value;
    var inputDescription = form.description.value;
    var inputPrice = form.price.value;
    var inputImage = form.image.value;
    var inputComplete = form.complete.checked;
 
var newToDo = {};
    newToDo.title =  inputTitle;
    newToDo.description =  inputDescription;
    newToDo.price =  inputPrice;
    newToDo.imgUrl =  inputImage;
    newToDo.completed =  inputComplete;
          
axios.post('https://api.vschool.io/ericlingren/todo', newToDo).then(function(response){
    console.log(response.data);
    });
});











