let numbers = [1, 2, 3, 4];

function showArray() {
  let newNumber = 5;
  console.log(...numbers, newNumber);
}
showArray();

let name = "Andrei";
let array = Array.from(name);

console.log(array);
