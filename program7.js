function reduce(inputWords, countFunction, initial) {
if (inputWords.length > 0) {
  const eleOne = inputWords[0];
  return reduce(inputWords.slice(1), countFunction, countFunction(eleOne, initial));
}

  return initial;
}
function countFunction(eleOne, initial) {
  return eleOne + initial;
}

//base case
const inputWords = [1, 2, 3];
const initial = 0;

console.log('The base case is: ', reduce(inputWords, countFunction, initial) === 6);
