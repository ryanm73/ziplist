const arrOne = ['a', 'b', 'c', 'd'];
const arrTwo = [1, 2, 3, 4];

function zipList(x, y) {
  let zipArray = [];

  for (let i = 0; (i < x.length) || (i < y.length); i++) {
    if (x[i] !== undefined) {
      zipArray.push(x[i]);
    }
    if (y[i] !== undefined) {
      zipArray.push(y[i]);
    }
  }
  return zipArray;
}

function zipUS(x, y) {
  return _.flatten(_.zip(x, y));
}

console.log(zipList(arrOne, arrTwo));
console.log(zipUS(arrOne, arrTwo));