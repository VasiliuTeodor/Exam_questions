// let objectJS = {
//   id: 1,
//   name: "Andrei",
// };

// fetch(objectJS)
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   }); // will not work

fetch("user.json")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  }); // will work
