const sum = (arr) => {
  let s = 0;
  for (const element of arr) {
    if (element % 2 == 0) {
      s += element;
    }
  }
  return s;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(sum(arr));
