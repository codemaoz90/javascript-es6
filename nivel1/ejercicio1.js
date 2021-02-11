const multiply = (num1, num2) => {
	return num1 * num2;
};

const toCelsius = (fahrenheit) => {
	return (5 / 9) * (fahrenheit - 32);
};

// This function returns a string padded with leading ceros
const padZeros = (num, totalLen) => {
	var numStr = num.toString();
	var numZeros = totalLen - numStr.length;
	for (var i = 1; i <= numZeros; i++) {
		numStr = "0" + numStr;
	}
	return numStr;
};

const power = (base, exponente) => {
	var result = 1;
	for (var i = 0; i < exponente; i++) {
		result *= base;
	}
	return result;
};

const greet = (who) => console.log("Hello" + who);
