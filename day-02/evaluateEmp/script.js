var name = window.prompt("Enter your name:");
var age = window.prompt("Enter your age:");
var yearOfExperience = Number(window.prompt("Enter your years of experience:"));
var selfRating = Number(window.prompt("Enter your self-rating (1-10):"));
var jopTitle = " ";

if (yearOfExperience < 2) {
    jopTitle = "Junior Developer";
}else if (yearOfExperience >= 2 && yearOfExperience < 5) {
    jopTitle = "Mid-level Developer";
}   else if (yearOfExperience >= 5 && yearOfExperience < 10) {
    jopTitle = "Senior Developer";
} else {
    jopTitle = "Expert Developer";
}

var performanceLevel = " ";
switch (true) {
    case (selfRating >= 9):
        performanceLevel = "Excellent";
        break;
    case (selfRating >= 7 && selfRating <= 8):
        performanceLevel = "Good";
        break;
    case (selfRating >= 5 && selfRating <= 6):
        performanceLevel = "Average";
        break;
    default:
        performanceLevel = "Needs Improvement"; // أقل من 5 [cite: 17]
}

var bonusPercentage = 0;
var baseSalary = 50000;

if (yearOfExperience >= 0 && yearOfExperience <= 2) {
    bonusPercentage = 0.10;
} else if (yearOfExperience >= 3 && yearOfExperience <= 5) {
    bonusPercentage = 0.15;
} else if (yearOfExperience > 5) {
    bonusPercentage = 0.20;
}

var bonusAmount = baseSalary * bonusPercentage;
var finalSalary = baseSalary + bonusAmount; 

var currentHour = new Date().getHours(); 
var shift = "";

if (currentHour >= 9 && currentHour < 18) {
    shift = "Day Shift";
} else {
    shift = "Night Shift";
}

let reportMessage =
    "name: " + name + "\n" +
    "age: " + age + "\n" +
    "experience: " + yearOfExperience + " years\n" +
    "job title: " + jopTitle + "\n" +
    "performance: " + performanceLevel + "\n" +
    "Final Salary: $" + finalSalary + "\n" +
    "Current Shift: " + shift;

console.log(reportMessage);

alert(reportMessage);

document.getElementById("reportOutput").innerHTML = reportMessage.replace(/\n/g, "<br>");