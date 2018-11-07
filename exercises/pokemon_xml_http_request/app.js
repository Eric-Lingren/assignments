var xhr = new XMLHttpRequest();

var myArray = [];

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
         var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        myArray.push(data)
        sortPokemon();
    }
};

xhr.open('GET', 'https://vschool-cors.herokuapp.com?url=http://api.vschool.io/pokemon', true);
xhr.send();

function sortPokemon (data){

    var pokemonOnly = myArray[0].objects[0].pokemon
    //var pokemonObjects = myArray[0].objects[0]
    //console.log(pokemonOnly);

    pokemonOnly.forEach(function(character){
        //console.log(name.name);
        var pokemonName = character.name

        var node = document.createElement('p');
        var textnode = document.createTextNode(pokemonName);
        node.appendChild(textnode);
        document.getElementById('pokemon').appendChild(node);
        
    });
}