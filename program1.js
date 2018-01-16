let counter=0;

function operation()
{
	counter++;

	
}

function repeat(operation, num) {
	if(num===counter)
		return counter;
	else if(num>0)
		{
		operation();
		return repeat(operation,num);
		}
	else
		return false;
} 
module.exports = repeat;
console.log("count display ",repeat(operation,10)===10);
console.log("Should not pass for negative number", repeat(operation,-1)===false);
