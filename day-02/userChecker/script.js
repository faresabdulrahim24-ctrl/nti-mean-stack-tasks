var userName = prompt("Enter your name:");
var birthYear = Number(prompt("Enter your birth year (e.g., 2004):"));
let isStudent = confirm("Are you currently a student?");

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var category = "";
if (age < 13) {
    category = "Kid";
} else if (age >= 13 && age <= 17) {
    category = "Teen";
} else if (age >= 18 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior"; 
}

var finalMessage = "Hello " + userName + ", you are " + age + " years old.\nCategory: " + category + ".";
if (isStudent === true) {
    finalMessage += "\nDon't forget to study hard!";
}

console.log(finalMessage);

alert(finalMessage);

document.getElementById("userOutput").innerText = finalMessage;