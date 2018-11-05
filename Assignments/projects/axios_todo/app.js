

// var axios = require('axios');

axios.get('https://api.vschool.io/ericlingren/todo').then(function(response){
    var listArray = response.data
    pullArray(listArray)
    }).catch(function(error){
        console.log(error);
    });


function pullArray (listArray){
   // console.log(listArray);
    //  Pulls the title from each item in the array
    
    // listArray.forEach(function(heading) {
    //     var title = heading.title;
    //     console.log(title)
    //     var node = document.createElement('h3');
    //     var textnode = document.createTextNode(title);
    //     node.appendChild(textnode);
    //     document.getElementById('listDiv').appendChild(node);
        
    // });
    // //  Pulls the description from each item in the array
    // listArray.forEach(function(about) {
    //     var description = about.description;
    //     console.log(description)
    //     var node = document.createElement('h3');
    //     var textnode = document.createTextNode(description);
    //     node.appendChild(textnode);
    //     document.getElementById('listDiv').appendChild(node);
    // });
    // //  Pulls the price from each item in the array
    // listArray.forEach(function(cost) {
    //     var price = cost.price
    //     console.log(price)
    // });

    for (var i = 0; i < listArray.length; i++) {
        //console.log(listArray[i]);
        var node = document.createElement('h3');
        var textnode = document.createTextNode(listArray[i].title);
        node.appendChild(textnode);
        document.getElementById('listDiv').appendChild(node);
        
        //console.log(listArray);
        var node2 = document.createElement('p');
        var textnode2 = document.createTextNode(listArray[i].description);
        //console.log(textnode2)
        node2.appendChild(textnode2);
        document.getElementById('listDiv').appendChild(node2);

        var node3 = document.createElement('p');
        var textnode3 = document.createTextNode(listArray[i].price);
        //console.log(textnode3)
        node3.appendChild(textnode3);
        document.getElementById('listDiv').appendChild(node3);
    }
    

}



