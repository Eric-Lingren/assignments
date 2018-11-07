
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//console.log("fruit: ", fruit);
//console.log("vegetables: ", vegetables);

// Remove the last item from the vegetable array.
vegetables.pop();
//console.log("fruit: ", fruit);
//console.log("vegetables: ", vegetables);

// Remove the first item from the fruit array.
fruit.shift();
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// Find the index of "orange."
var orangeIndex = fruit.indexOf('orange');
//console.log(orangeIndex);

// Add that number to the end of the fruit array.
fruit.push(orangeIndex);
//console.log("fruit: ", fruit);

// Use the length property to find the length of the vegetable array. Log that to the console.
//console.log(vegetables.length);
//console.log("vegetables: ", vegetables)

// Add that number to the end of the vegetable array.
var vegetablesLength = vegetables.length;
vegetables.push(vegetablesLength);
//console.log("vegetables: ", vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
//console.log(food);

// Remove 2 elements from your new array starting at index 4 with one method.
var splicedFood = food.splice(4,2);
//console.log(splicedFood);
//console.log(food);

// Reverse your array.
food.reverse();
console.log(food);

// Log your array as a string to the console.
console.log(food.join(','));

// If you've done everything correctly, the last step should print the following to the console:
// 3,pepper,1,watermelon,orange,apple

