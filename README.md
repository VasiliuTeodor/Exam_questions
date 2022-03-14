# Exam_questions

| No. | Questions                                                                   |
| :-- | :-------------------------------------------------------------------------- |
| 1   | [Client-server-database architecture](#client-server-database-architecture) |
| 2   | [Window and Document objects](#window-and-document)                         |
| 3   | [JavaScript operators](#js---to-learn-operators)                            |
| 4   | [JavaScript ES6](#js---to-learn-es6)                                        |

## Client-server-database architecture

1. Client-server-database architecture

   It's the `architecture` of a `computer network` in which many `clients`(remote processors), request and receive service from a centralized `server` (a host computer). Many clients can acces the `server`'s informations simultaneously and at the same time, a client computer can perform other tasks.

   But while the `server` can comunicate with more `clients` at the same time, a `client` canno't comunicate with more `servers` at one time.

   Examples:  
   An `api` (meaning the server), gets a request from the `client`. The `api` will send the request further to the `database` and then a response will be sent back with a status depending on whether the request was successful or not.

   ![alt.txt](/IMAGES/client-server-comunication.png)

   There are three different types of `clinet-server-database` architecture:

   - `1-Tier Architecture`, which is the simplest type of `database architecture` that has the `client`, the `server` and the `database` all on the same device. However, such architecture is rarely used in production.

     ![alt.txt](/IMAGES/1-tier.webp)

   - `2-Tier Architecture`, is a `database architecture` where the data is stored on a server called the `second tier`. On this type of architecture, the `client` device is different from the `server` and the `database`. This type of architecture provides direct and faster communication.

     ![alt.txt](/IMAGES/2-tier.webp)

- `3-Tier Architecture`, is the most popular architecture, in which the `client`, `server` and `database` are all independent from each other. However, while the `2-Tier Architecture`, contained only the `presentation layer`(the client), and the `application layer`(the server/database), the `3-Tier Architecture`, has the following layers:

  1. Presentation layer(your PC, tablet, laptop, phone),
  2. Application layer(the server),
  3. Database Server.

  ![alt.txt](/IMAGES/3-tier.webp)

## Window and Document

1. Window object

   The `window object` is the top of the object hierarchy, which means that every other object falls inside the `window object`. The `window object` contains the `document`, the `screen`, the `location` and every other elements of the current website. Every website has it's own `window object`.

2. Document object

   The `document object`(the HTML of the website), contains every single `markup` element inside that is specifically in the HTML code or as an HTML code. A javascript object, array, function, etc..., will not be considered part of the `document object` untill is defined as such.

![alt.txt](/IMAGES/windowobject.png)

## JS - To learn: `operators`

1. JavaScript `Arithmetic Operators`

   This type of `operators` are used to perform `arithmetic` on `numbers`, like so:

   ```javascript
   let a = 5;
   let b = 5;
   let c = a + b;
   // Output: 10
   ```

   This `operators` are:

   | Operator | Description    |
   | -------- | -------------- |
   | +        | Addition       |
   | -        | Substraction   |
   | \*       | Multiplication |
   | \*\*     | Exponentiation |
   | /        | Division       |
   | %        | Modulus        |
   | ++(+1)   | Increment      |
   | --(-1)   | Decrement      |

2. JavaScript `Assignment Operators`

   Assignment operators assign values to javascript variables

   | Operator | Example    | Same as      |
   | -------- | ---------- | ------------ |
   | =        | x = y      | x = y        |
   | +=       | x += y     | x = x + y    |
   | -=       | x -= y     | x = x - y    |
   | \*=      | x \*= y    | x = x \* y   |
   | /=       | x /= y     | x = x/y      |
   | %=       | x %= y     | x = x%y      |
   | \*\*=    | x \*\* = y | x = x \*\* y |

   Example:

   ```javascript
   let a = 10;
   a += 5;
   // Output: 15
   ```

   You can also use this types of operators to concatenate `strings`. For example:

   ```javascript
   let a = "My name is";
   a += "Andrew";
   // Output: "My name is Andrew"
   ```

   Adding a number to another number will return a sum, but adding a number to a string will always return a string.

   ```javascript
   let a = 1 + 2;
   let b = 1 + 2 + "3";
   let c = "string" + 1;

   // Output a: 3
   // Output b: "33"
   // Output c: "string1"

   let d = "3" + 2 + 1;
   // Output d: this one will return a string of "321", because javascript will always add the values starting from the first one.
   ```

3. JavaScript `Comparison Operators`

   This `operators` compare the _value_ and _type_ of a `variable`.

   | Operator | Description             |
   | -------- | ----------------------- |
   | ==       | equal to                |
   | ===      | equal value and type    |
   | !=       | not equal (different)   |
   | !==      | not equal value or type |
   | >        | greater than            |
   | <        | less than               |
   | >=       | greater or equal        |
   | <=       | less or equal           |
   | ?        | ternary operator        |

4. JavaScript `Ternary Operators`

   The `ternary operators` takes three operands: a `condition` followed by a question mark (`?`), which usually ask if the given variable or function exists, then an expression to ask if the condition is `true`, which is (`:`), then another condition to ask if the condition is `false`. This operator is used an as alterative to an `if...else` statement.

   For example:

   ```javascript
   function myFunction(isNumber) {
     return isNumber ? "2.00" : "10.00";
   }

   console.log(myFunction(true));
   // Output: '2.00'
   console.log(myFunction(false));
   // Output: '10.00'
   ```

   The code above can also be written like so:

   ```javascript
   function myFunction2(isNumber2) {
     if (isNumber2) {
       return "2.00";
     } else {
       return "10.00";
     }
   }

   console.log(myFunction2(true));
   console.log(myFunction2(false));
   ```

## JS - To learn: `ES6`

- JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015. ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.

1. ES6 new features: `variables`

The `let` keyword for defining variables, in comparison to the keyword `var`, has a block scope, which means that a `let variable` cannot be called before initialization.

For example:

```javascript
// For var
console.log(x); // This line will return 'undefined'.
var x = 5;
console.log(x); // While this line will return the value of 'x'.

//For let
console.log(y);
let y = 5;
console.log(y);
// In comparison to the other one where var was undefined, for let we will get an error and no line of code will be executed.
```

This is also the case for `const`, but while the value of let can be changed, like so:

```javascript
let x = 5;
x = 10;
console.log(x); // Output: 10
```

the value of a `const` variable cannot.

```javascript
const z = 10;
z = 15;
console.log(z); //Output: 'TypeError'
```

2. ES6 new features: `arrow functions`

   Arrow functions allow a short syntax for writing functions

   ```javascript
   (x, y) => {
     // x and y are the parameters of the function
     let calc = 0;
     calc = x * y;
   };
   ```

   However, an `arrow function` is not hoisted, meaning that we cannot call it to execute the code. This type of functions must be declared before used, like so:

   ```javascript
   const func = (x, y) => {
     //We are using const because the variable's value cannot be changed after. Life is safer with const :)
     x = 10;
     y = 10;
     console.log(x * y);
   };
   func();
   //Output: 100
   ```

   While normal functions have their own `this` keyword, arrow functions do not. In a normal function, the `this` keyword represents the object that called the function, while in an `arrow function`, `this` represents that defined it.

3. ES6 new features: `for/of` loop

   The `for/of` statements loops through the values of an object, such as: Arrays, Strings, Maps and more.

   A `for/of` loop is written like so:

   ```javascript
   for (let variableName of variableWithMoreValues) {
     //code to be executed
   }
   ```

   Looping over an array:

   ```javascript
   const arrayOfNumbers = [1, 2, 3];

   for (let newValue of arrayOfNumbers) {
     console.log(newValue);
   }
   //Output: 1 2 3
   ```

4. ES6 new features: `classes`

   JavaScript `classes` are templates for javascript objects. To create a `class` in javascript, use the keyword `class`. However, a method named `constructor` must always be added inside the `class`. The constructor holds the parameters of the class.

   ```javascript
   class NewClass {
     constructor(parameter) {
       //code
     }
   }
   ```

   ```javascript
   class Phones {
     constructor(name, price) {
       this.name = name;
       this.price = price;
     }
   }

   let myPhone = new Phones("Samsung", 2500);
   console.log(myPhone);
   ```

5. ES6 new features: `promises`

   A `promise` is a javascript object that links a code that `produces something` to a code that `consumes the producing code`

   For example:

   ```javascript
     const myPromise = new Promise(function(myResolve, myReject) {
       // code that produces
       //myResolve - if code is successful
       //myReject - if code is code is not successful
     });

     myPromise.then(
       // code that consumes
       function(value) {//if code is successful}
       function(error) {//if code is not successful}
     );
   ```

   Example of a `Promise`:

   ```javascript
   const myPromise = new Promise(function (res, rej) {
     setTimeout(function () {
       res("Hello, awesome person!");
     }, 1000);
     setTimeout(function () {
       rej("An error occured");
     }, 1000);
   });

   myPromise.then(
     function (value) {
       console.log(value);
     },
     function (error) {
       console.log(error);
     }
   );
   ```

   A javascript `promise` can be:

   - Pending
   - Fulfilled
   - Rejected

   While a `promise` is `pending`, it means it is `undefined`.

   While a `promise` is `fullfilled`, it means it returns a result `value`.

   While a `promise` is `rejected`, it means an `error` occured.

6. ES6 new features: `rest parameter` and `Array.from()`

   The `rest parameter` allows to treat an indefinite number of arguments as an array.

   For example:

   ```javascript
   let numbers = [1, 2, 3, 4];

   function showArray() {
     let newNumber = 5;
     console.log(...numbers, newNumber);
   }
   showArray();
   //Output: 1 2 3 4 5
   ```

   The `rest parameter` keeps the value of the first variable and adds the value of the second one.

   The `Array.from()` property returns an array of objects from any object with a length property or any iterable object.

   For example:

   ```javascript
   let name = "Andrei";
   let array = Array.from(name);

   console.log(array);
   //Ouptut: Array["A", "n", "d", "r", "e", "i"]
   ```
