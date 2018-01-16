let counter=0;

function operation()
{
	counter++;

	
}

function repeat(operation, num) {
	if(num===counter)
		return counter;
	else
		{
		operation();
		return repeat(operation,num);
		}
} 
module.exports = repeat
console.log("count display ",repeat(operation,10)===10)
