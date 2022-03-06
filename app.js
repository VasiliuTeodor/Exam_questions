// function difference() {
//   console.log(x);
//   var x = 5;
//   console.log(x);

//   console.log(y);
//   let y = 5;
//   console.log(y);
// }
// difference();

// const z = 10;
// z = 15;
// console.log(z);

const func = (x = 10, y = 10) => {
  console.log(x * y);
};

func();

const arrayOfNumbers = [1, 2, 3];

for (let newValue of arrayOfNumbers) {
  console.log(newValue);
}
