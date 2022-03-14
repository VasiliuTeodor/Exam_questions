function myFunction(isNumber) {
  return isNumber ? "2.00" : "10.00";
}

console.log(myFunction(true));
// Output: '2.00'
console.log(myFunction(false));
// Output: '10.00'

function myFunction2(isNumber2) {
  if (isNumber2) {
    return "2.00";
  } else {
    return "10.00";
  }
}

console.log(myFunction2(true));
console.log(myFunction2(false));
