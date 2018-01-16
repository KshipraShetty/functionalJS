function doubleAll(numArray)
{
        return numArray.map(function(arrayNum){
                                                return arrayNum*2;
                                                });

}
console.log("Should work for base case ", doubleAll([1,2,3,4]).toString()===[2,4,6,8].toString());
console.log("Should work for negative numbers ",doubleAll([-1,-2,-3,-4]).toString()===[-2,-4,-6,-8].toString());
