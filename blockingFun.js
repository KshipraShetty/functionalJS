function repeat(operation, num) {
   // modify this so it can be interrupted

   if (num <= 0) {
    return operation();
  }
    //operation();
    setTimeout(operation, 100);
   return repeat(operation, --num);
}


function operation() {
  console.log('hello ');
}
repeat(operation, 10);

 module.exports = repeat;
