
function upperCase(input) {
	if(input!='')
		return input.toUpperCase();
	else
		return false;	

}


module.exports = upperCase;
console.log("This should return upper case: ",upperCase("Hello World")==="HELLO WORLD");
console.log("Check for empty string", upperCase('')===false);
