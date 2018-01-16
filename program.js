
function upperCase(input) {
	if(input!='' && typeof(input)==='string')
		return input.toUpperCase();
	else
		return false;	

}


module.exports = upperCase;
console.log("This should return upper case: ",upperCase("Hello World")==="HELLO WORLD");
console.log("Check for empty string:", upperCase('')===false);
console.log("Check for numbers:", upperCase(12345)===false); 
