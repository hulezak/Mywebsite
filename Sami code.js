document.getElementsByClassName("search-btn")[0].onclick = function() { var sI = document.getElementById("search").value; // call the search function here and redirect to the other htnl file  where you display results.

  
};


//Impure Function:
let author = "Alonzo";

function greet() {
    console.log(`Hello, ${author}!`);
}

greet();
author = "Alan";
greet();

//Pure Function:
function greet(author) {
  console.log(`Hello, ${author}!`);
}

greet("Alonzo");
greet("Alan");

//Imperative code
let name = "Alonzo";
let greeting = "Hi";

console.log(`${greeting}, ${name}!`);

greeting = "Howdy";

console.log(`${greeting}, ${name}!`);

//Functional code
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

greet("Hello", "Alonzo");
greet("Howdy", "Alan");

//Side-effects
let thesis = { name: "Church", date: 1936 };

function renameThesis(newName) {
    thesis.name = newName;
    console.log("Renamed");
}

renameThesis('Church-Turing');
thesis;

//No Side-effects
const thesis = { name: "Church", date: 1936 };

function renameThesis(oldThesis, newName) {
    return { name: newName, date: oldThesis.date };
}

const thesis2 = renameThesis(thesis, 'Church-Turing');
thesis;
thesis2;

//
//look at which functions are pure and which are not and why
//Remember: A pure function has 2 characteristics
//No Side-effects: A pure function has no effect on the program or the world
//Deterministic: Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters and not on any other information. (e.g. Global program state)
//
/* Example 1 */
function getDate() {
  return new Date().toDateString();
}
// Impure
// A function is not pure if its output depends on anything except its inputs (including the state of the world), or if calling the function at different times with the same inputs can give different outputs (e.g. if called on different days).

/* Example 2 */
function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString();
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same inputs (in this case, no inputs).

/* Example 3 */
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 4 */
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 5 */
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById("color-me");
  colorMe.setAttribute("style", "color: " + hex);
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, changing the properties of an HTML element on the page).

/* Example 6 */
async function readJsonFile(filename) {
  const file = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  return await file.json();
}
// Impure
// A function is not pure if its output depends on the state of the world (in this case, the contents of web-hosted file), or if calling the function at different times with the same inputs can give different outputs.

/* Example 7 */
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same input. In this case, calling it on the same object will always return the same string.

/* Example 8 */
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 9 */
function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 10 */
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, logging information to the console).

//Example of iteration
function sum(numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
sum([0, 1, 2, 3, 4]);

//Example of recursion
function sum(numbers) {
    if (numbers.length === 0) {
        // non-recursive case
        return 0;
    } else if (numbers.length === 1) {
        // non-recursive case
        return numbers[0];
    } else {
        // recursive case
        return numbers[0] + sum(numbers.slice(1));
    }
}

sum([0, 1, 2, 3, 4]);

//Iterative Factorial
function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

//Recursive Factorial
function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
}

recursiveFactorial(10);

//Iterative Fibonacci
function iterativeFibonacci(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
    return fibArr[n];
}

iterativeFibonacci(20);

//function iterativeFibonacci(n) {
//    let fibArr = [0, 1];
//    for (let i = 2; i < n + 1; i++) {
//        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//    }
//    return fibArr[n];
//}
//
//iterativeFibonacci(20);
function recursiveFibonacci(n) {
    if (n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

recursiveFibonacci(19);

//The filter function takes a "predicate" function (a function that takes in a value and returns a boolean) and an array, applies the predicate function to each value in the array, and returns a new array with only those values for which the predicate function returns true.
var wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(isEven, tail(array)));
}

filter(isEven, wholes);

function map(operationalFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const doubledFirst = [operationalFn(firstItem)];
  return concat(doubledFirst, map(doubled, tail(array)));
}

map(doubled, wholes);

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reduceFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array))
}

reduce(sum, 0, wholes);

// a predicate function for filter
function isEven(n) {
    return n % 2 === 0;
}

// a operational function for map
function doubled(n) {
  return n*2;
}

// a reducer function
function sum(a, b) {
  return a+b;
}

// Return the first item in an array
function head(array) {
  return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}

// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
  return array.length;
}

//
//Take away of the idea is important
//Function can define functions i.e. return inner functions and remember scope
//Inner function has access to outer function scope
//If a function is defined which returns inner function, the inner function can remember the scope of outer function even if its not passed
//In functional programming we say we dont work with state, in closure there is a small loop hole
//
function makeAdjectifier(adjective) {
    return function (noun) {
        return adjective + " " + noun;
    }
}

const coolify = makeAdjectifier("cool");
coolify("workshop");
coolify("drink");

//
//Takes a multi-argument function and breaks up into a series of single argument functions which successively remembers outer scopes
//
function greet(greeting, name) {
    return `${greeting}, ${name}`;
}

function curryGreet(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    }
}

const greetItalian = curryGreet('Ciao');
greetItalian('Alonzo');

const greetSpanish = curryGreet("Hola");
greetSpanish("Alonzo");

//Examples of Closure and Currying
function writeMessage(message, salutation, name) {
  return md`<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

const writeFriendlyNote = signMessageFrom("Your best bud");
const writeBusinessMemo = signMessageWith("Best");

const curriedQuote = (name) => (year) => (text) => quote(name, year, text);

function quote(name, year, text) {
  return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}

//
//Flow the data through the series of functions to get the output what I want
//
var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(", y'all");
var exclaim = ender("!");

var hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp('JS'); // JS rocks, y'all!

//
//Avoid mutability for happier programming
//dont change in-place, replace/make a new copy
//how to use the map function to copy an array to prevent mutation. Although the new copy has prevented mutating the original Array, creating copies can increase the amount of memory required to run a program. Immutable or persistent data structures allow unchanged parts of the data to be reused throughout a program.
//Can use map to create a new copy of array
//
const oldCities = ["Delhi", "Bombay", "Bangalore"];

const newCities = oldCities.map((city) => {
    if (city === "Bombay") return "Mumbai";
    if (city === "Bangalore") return "Bengaluru";
    return city;
})

oldCities; // ["Delhi", "Bombay", "Bangalore"]
newCities; // ["Delhi", "Mumbai", "Bengaluru"]
 





















