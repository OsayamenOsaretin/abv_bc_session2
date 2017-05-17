'use strict';

module.exports = {
	/** fizzBuzz() is a function that returns 'Fizz' or 'Buzz' or 'FizzBuzz'
	* 	if @param: number is divisible by 3, 5, or both 3 and 5 respectively
	*/
	fizzBuzz: (number) => {

		let remainder;

		// since lowest common factor of 3 and 5 is 15, divide by 15 to test for both
		remainder = number % 15;

		//test for empty parameter
		if(number === undefined){
			return "Please enter a Number to the FizzBuzz calculator";
		}

		// test for float, the point is fizzBuzz should work for integers
		if((number % 1) != 0){
			return "Please enter an Integer, instead of a float";
		}

		// test for FizzBuzz, then Fizz and then Buzz;
		if(remainder === 0){
			return "FizzBuzz";
		}else if((remainder % 3) === 0){
			return "Fizz";
		}else if((remainder % 5) === 0){
			return "Buzz";
		}else{
			return number;
		}

		 
	}
}