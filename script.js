var num = 33721;
var digits = num.toString().split('');
var degree = digits[0] * digits[1] * digits[2] * digits[3] * digits[4];
console.log(digits);
console.log(degree);
var result = (degree ** 3).toString().split('');
document.write(result[0] + result[1] );