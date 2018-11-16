
const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];




// Warm up
// Create an array of pets' names.

const petNames =[]

for (let i = 0; i < peopleAndPets.length; i++){
    const petArr = peopleAndPets[i].pets;
    for (let j = 0; j<petArr.length ;j++){
        petNames.push(`<li>${petArr[j].name} </li>`)
    }
}

//console.log(petNames)


// Display the pets' names in <li>s.

const mappedPets = petNames.map(pet => `<li>${pet}</li>`)

console.log(mappedPets)
// Only display names of pets if their owners are older than 20.


// Only display pets who have nicknames.
// Create an array of everyone that has at least one dog and sort them by age.

const people =[]

for (let i = 0; i < peopleAndPets.length; i++){
    const petArr = peopleAndPets[i].pets;
    for (let j = 0; j<petArr.length ;j++){
        if (petArr[j].type === 'dog'){
            people.push(peopleAndPets[i])
        }
        
    }
}
