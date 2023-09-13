// Functions

// Data Types?
// Strings  --- > "sequence of characters or numbers denoted by usally quotes"
// Booleans --- > true or false values
// Numbers  --- > 1,2,3

// Arrays   --- > collections ["beef", "checking", 1, {}]
// Objects  --- > have methods and attributes. Human. Shape.

// casting data types

// Function Definition
// Function Declaration
function doSomething() {
  console.log("hello world");
}

// parameters or arguments
// variables you can pass in to function
function dashawnsFavoriteQuote(param1) {
  console.log(param1);
}

// doSomething();
// doSomething();
// doSomething();
// doSomething();
// doSomething();

dashawnsFavoriteQuote("Just Keep Going!");

function addTwoNums(param1, param2) {
  console.log(param1 + param2);
}

addTwoNums("Dashawna:", " Master Full Stack Dev");
// --------------------------------------------------

// --------------------------------------------------
//
//

function lowerCaseAndRemoveApostrophes(word) {
  let wordLowerCased = word.toLowerCase();
  wordLowerCased = wordLowerCased.replace(/'/, "s")
  console.log(wordLowerCased);
}

lowerCaseAndRemoveApostrophes("SO'ME WO'RD NEE'DING LOWER''CASING");

