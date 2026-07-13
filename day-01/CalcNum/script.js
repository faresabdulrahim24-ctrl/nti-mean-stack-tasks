var num1 = window.prompt("enter the first number :");
var num2 = window.prompt("enter the second number :");

var sum = Number(num1) + Number(num2);
var sub = Number(num1) - Number(num2);
var mul = Number(num1) * Number(num2);
var div = Number(num1) / Number(num2);

function showResult() {
    
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is : " + sum + "<br>" +
    "the substraction of " + num1 + " and " + num2 + " is : " + sub + "<br>" +
    "the multiplication of " + num1 + " and " + num2 + " is : " + mul + "<br>" +
    "the division of " + num1 + " and " + num2 + " is : " + div;
    
}