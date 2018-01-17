function countWords(inputWords) {
 // SOLUTION GOES HERE
 return inputWords.reduce((count, word) => {
   if (count[word]) {
   count[word] += 1;
   } else {
     count[word] = 1;
   }
   return count;
 }, {});
}

//base case
const inputWords = [];
console.log('Base case of empty array ', countWords(inputWords).toString() === {}.toString());

// normal inputWords
//inputWords = ['Apple', 'Banana', 'Apple'];
//console.log('Base case of array ', JSON.stringify(countWords(inputWords)) === JSON.stringify({ Apple: 2, Banana: 1 }));
