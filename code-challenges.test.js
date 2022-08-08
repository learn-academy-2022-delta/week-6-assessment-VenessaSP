// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//Pseudocode
// - First create a function 'problem1' and pass a parameter 'data'.    
// - Declare a variable within the function 'const result' to equal an empty array'[]'
// - Create a for loop defining the index (i=0), then a 'less than' operator and the .length method to iterate through the entire array beginning with the first index within the function.
// - Declare another variable 'const person' and have it equal to the function parameter of 'i' '(data)[i]' within the function.
// - Declare another variable 'const res' to equal to the function 'capitalizeName' thats created in the next function.
// - Create a variable and pass the variable 'person' and the property of the object 'const people' as a parameter (person.name). Use + to add a strings 'is' and '.' with the variable 'person' and the other property in the object 'person.occupation' to create the required output
// - Use '.push' method on variable 'result' and pass 'res' variable 
// - Then create a return statment 'result' to return the new array
// - Create second function called capitalizedName and pass a parameter 'str'
// - Create a variable within the function 'const nameArray' to equal to the parameter along with the method '.split(" ")' and pass an empty parameter with quotation marks in order to pass any string
// - Declare a variable within the function 'const result' to equal an empty array'[]'
// - Create a for loop defining the index (i=0), then a 'less than' operator and the .length method to iterate through the entire array beginning with the first index within the function.
// - Declare a variable 'const str2' and identify [i] and nest 3 methods on the newArray, charAt(0) for the index, .toUpperCase to capitalize the the [i] and .slice(1) to indentify specific part of an array and return a new one.
// - Use '.push' method on variable 'result' and pass 'str2' variable 
// - Make a return statement with 'result' with method .join("") to pass any string 




// a) Create a test with an expect statement using the variable provided.

describe("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
  it("test for outpu1", () => {
    const output = problem1(people);
    const expectedOutput = [
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ];

    expect(output).toEqual(expectedOutput);
  });
});



const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" },
];

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

function problem1(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    const res = capitalizeName(person.name) + " is " + person.occupation + ".";
    result.push(res);
  }
  return result;
}

function capitalizeName(str) {
  const nameArray = str.split(" ");
  const result = [];
  for(let i=0; i < nameArray.length; i++) {
    const str2 = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    result.push(str2)
  }
  return result.join(" ");
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//Pseudocode
// - First create a function 'problem2' and pass a parameter 'data'.    
// - Declare a variable within the function 'const result' to equal an empty array'[]'
// - Create a for loop defining the index (i=0), then a 'less than' operator and the .length method to iterate through the entire array beginning with the first index within the function.
// - Declare another variable 'const value' and have it equal to the method Number.isInteger to indentify/filter the numbers out then pass the parameter of the function of 'i' '(data)[i]' within the function.
// - Make a conditional statement with a variable declared to find the remainder(modulo) on declared variable 'rem'
// - Use '.push' method on variable 'result' and pass 'rem' variable 
// - Make a return statement  of 'result' 


// a) Create a test with an expect statement using the variables provided.

describe("function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. ", () => {
  it("test for output1", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    const expectedOutput = [2, 0, -1, 0];
    const output = problem2(hodgepodge1);
    expect(output).toEqual(expectedOutput);
  });

  it("test for output2", () => {
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    const expectedOutput = [2, 1, -1];
    const output = problem2(hodgepodge2);
    expect(output).toEqual(expectedOutput);
  });
});


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// // Expected output: [ 2, 1, -1 ]

// // b) Create the function that makes the test pass.

function problem2(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const value = Number.isInteger(data[i]);
    if (value) {
      const rem = data[i] % 3;
      result.push(rem);
    }
  }
  return result;
}

// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//Pseudocode
// - First create a function 'problem3' and pass a parameter 'array'.    
// - Define 'let' statements within the function to define length of the array and the sum (0)
// - Create a for loop defining the index (i=0), then a 'less than' operator and the .length method to iterate through the entire array beginning with the first index within the function.
// - Within the body of for loop declare a variable 'const cubed' to equal the method 'Math.pow' with function parameter of [index]
// - Use the 'sum' varable with operators += to add elements in the array and set it equal to the variable 'cubed.
// - Make a return statement of the variable sum.

// // a) Create a test with an expect statement using the variables provided.

describe("function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
  it("test for output1", () => {
    const cubeAndSum1 = [2, 3, 4];
    const expectedOutput = 99;
    const output = problem3(cubeAndSum1);
    expect(output).toEqual(expectedOutput);
  });

  it("test for output2", () => {
    const cubeAndSum2 = [0, 5, 10];
    const expectedOutput = 1125;
    const output = problem3(hodgepodge2);
    expect(output).toEqual(expectedOutput);
  });
});



// // b) Create the function that makes the test pass.

function problem3(array) {
  let length = array.length;
  let sum = 0;
  for (let index = 0; index < length; index++) {
    const cubed = Math.pow(array[index]);
    sum += cubed;
  }
  return sum;
}


