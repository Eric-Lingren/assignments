// You should use multiple array methods to solve these problems. Don't use for loops!

// Using the provided peopleArray (bottom of this article), write a function that:
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// 1.  Returns a list of everyone older than 18, which is
let over18 = []
function sortedOfAge(arr){
    arr.forEach(function (person){
        if (person.age > 18) {
            over18.push(person)
        }
    })
    //console.log(over18)
 }
 
sortedOfAge(peopleArray);

let alphabetical =[]; 
// 2.  Sorted alphabetically by last name, and where
function sortedOfName(arr){
    //console.log(arr)
    arr.sort(function(a, b){
        // var nameA = a.lastName;
        // var nameB = b.lastName;
        // let nameZ = ( (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0 );
        // alphabetical.push(nameZ);
        //console.log(over18.lastName)
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;

    });
    // console.log(alphabetical);
 }
 
console.log(sortedOfName(over18));

// 3.  Each name and age is embedded in a string that looks like an HTML <li> element.


/////////////////////////////
//  Example
// ////////////////////////////
// function sortedOfAge(arr){
//     // Your code here
//  }
 
//  console.log(sortedOfAge(peopleArray));
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */



 ///////////////////////
 //   Extra Credit
 //////////////////////
// Create another array of one or more individuals and add it to the original array.
// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// Remove the second individual from the array.
// Return the array in reverse order.


