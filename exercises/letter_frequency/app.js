


// Find the frequency of all characters in a given word or phrase, and print them to the console.

// Contain the characters and their counts within an object.
// Each character will be its own key
// Each value will be the character's frequency.
// Example:

const phrase = 'slimy smelly solution';

arrayIndex = (str) => {
    let letters = str.split('');
    //console.log(letters)
    const obj = {};
    obj['s'] = 0;
    obj['l'] = 0;

    letters.forEach(function(item){
        if(item === 's'){
            obj['s'] += 1
        } else if (item === 'l'){
            obj['l'] += 1
        }
    });
    return obj
}

console.log(arrayIndex(phrase));

// //Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }

// Hint:

// function hint() {
//     const obj = {}
//     obj["s"] = 1
//     return obj
// }

// console.log(hint());

// //Output: {s: 1}




const animals = ['dog', 'cat', 'mouse']
const birds = ['falcon', 'parrot', 'pidgeon']

newAnimals = [...animals, ...birds]

console.log(newAnimals)