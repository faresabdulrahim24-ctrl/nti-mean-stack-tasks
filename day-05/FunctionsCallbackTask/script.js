console.log("####### 1 #######");
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3));

console.log("####### 2 #######");
function calculate(a, b, operator) {
    return operator(a, b);
}
console.log(calculate(5, 2, multiply));

console.log("####### 3 #######");
function displayResult(result) {
    console.log(result);
}
displayResult(calculate(5, 5, multiply));

console.log("####### 4 #######");
var calcResult = calculate(10, 5, multiply);
displayResult(calcResult);
