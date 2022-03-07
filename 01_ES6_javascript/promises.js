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
