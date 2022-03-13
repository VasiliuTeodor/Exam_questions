# Exam_questions

## Client-server-database architecture

1. Client-server-database architecture

   It's the `architecture` of a `computer network` in which many `clients`(remote processors), request and receive service from a centralized `server` (a host computer). Many clients can acces the `server`'s informations simultaneously and at the same time, a client computer can perform other tasks.

   But while the `server` can comunicate with more `clients` at the same time, a `client` canno't comunicate with more `servers` at one time.

   Examples:  
   An `api` (meaning the server), gets a request from the `client`. The `api` will send the request further to the `database` and then a response will be sent back with a status depending on wether the request was succesful or not.

   ![alt.txt](/IMAGES/client-server-comunication.png)

   There are three different types of `clinet-server-database` architecture:

   - `1-Tier Architecture`, which is the simplest type of `database architecture` that has the `client`, the `server` and the `database` all on the same device. However, such architecture is rarely used in production.

     ![alt.txt](/IMAGES/1-tier.webp)

   - `2-Tier Architecture`, is a `database architecture` where the data is stored on a server called the `second tier`. On this type of architecture, the `client` device is different from the `server` and the `database`. This type of architecture provides direct and faster communication.

     ![alt.txt](/IMAGES/2-tier.webp)

- `3-Tier Architecture`, is the most popular architecture, in which the `client`, `server` and `databse` are all independent from each other. However, while the `2-Tier Architecture`, contained only the `presentation layer`(the client), and the `application layer`(the server/database), the `3-Tier Architecture`, has the following layers:

  1. Presentation layer(your PC, tablet, laptop, phone),
  2. Application layer(the server),
  3. Database Server.

  ![alt.txt](/IMAGES/3-tier.webp)

## JS - To learn: `ES6`

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
   // In comparison to the other one  where var was used, for let we will get an error and no line of code will be executed.
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
