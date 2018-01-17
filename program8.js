function duckCount() {
  //array= Array.from(arguments)
   array = Array.prototype.slice.call(arguments);
   return array.filter((element) => Object.prototype.hasOwnProperty.call(element, 'quack')).length;
}

module.exports = duckCount;

// base case
const duckOne = {
  quack() {
    console.log('quack');
  }
};

const duckTwo = Object.create({ quack: true });
console.log('The base case with one quack and one no quack: ', duckCount(duckOne, duckTwo) === 1);

/*
//two quacks
duckOne = {
  quack() {
    console.log('xgsh');
  }
};

duckTwo = {
  quack: true
};
console.log('The base case: ', duckCount(duckOne, duckTwo) === 2);

//zero case
duckOne = Object.create({ quack: true });
duckTwo = Object.create({ quack: true });
console.log('The base case: ', duckCount(duckOne, duckTwo) === 0);
*/
