(x) => {
  x = "hello";
  console.log(x);
};

const func = (x = 10, y = 10) => {
  console.log(x * y);
};

func();
