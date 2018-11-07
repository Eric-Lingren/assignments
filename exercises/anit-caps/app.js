
var i = 0;
var character = '';
string = 'bAnANa';
var newString = [];

function antiCaps(string){
    while (i < string.length ){
        character = string.charAt(i);
        if (character == character.toUpperCase()) {
            console.log(`letter is UPPER CASE`);
            var character2 = character.toLowerCase()
            newString.push(character2);
        } else {
            console.log(`Letter is lowercase`);
            var character3 = character.toUpperCase()
            newString.push(character3);
        }
        i++ ;
    }
}

antiCaps(string);
//console.log(newString);

var finalString = newString.join('');
console.log(`The new and improved string is: ${finalString}`);