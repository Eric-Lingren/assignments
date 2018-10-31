


// 1a) Write a function that returns the sum of two numbers. T
// hrow an error if either argument is not of the data type number:

function sum(x, y){
    //check data types first and throw error
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('you must provide a valid number')
    }
    return x + y;
};



try {
    sum(1, 2);
}

catch (error){
    console.log(error);
}



// 2a) Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them don't match. 
// Otherwise, log to the console a message saying "login successful!"


var user = {username: "sam", password: "123abc"};

function login(username, password){
  //check credentials
  if(username !== user.username || password !== user.password){
      throw new Error('username or password dont match.')
  }
  console.log(username, password)
}


try {
    login('sam', '123abc');
}

catch (error){
    console.log(error);
}