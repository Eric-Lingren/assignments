var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData =xhr.responseText;
        var data = JSON.parse(jsonData);
        //var pokemon = data.pokemon;
        console.log(data);

    }
};

xhr.open('GET', 'http://api.vschool.io:6543/pokemon.json', true);
xhr.send();

