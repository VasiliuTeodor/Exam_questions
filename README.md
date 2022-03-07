# Exam_questions

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

JvasaScript `classes` are templates for javascript objects. To create a `class` in javascript, use the keyword `class`. However, a method named `constructor` must always be added inside the `class`. The constructor holds the parameters of the class.

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
