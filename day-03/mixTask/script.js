console.log("####### 21 #######");
var wordToLoop = "HELLO";
for (var i = 0; i < wordToLoop.length; i++) {
    console.log(wordToLoop[i]);
}

console.log("####### 22 #######");
var numsArr = [10, 20, 30, 40];
var totalSum = 0;
for (var n of numsArr) {
    totalSum += n;
}
console.log(totalSum);
var aSentence = "JavaScript is amazing and awesome";
var aCount = 0;
for (var char of aSentence) {
    if (char.toLowerCase() === 'a') {
        aCount++;
    }
}
console.log(aCount);

console.log("####### 23 #######");
var grades = [70, 85, 92, 60, 77, 88];
for (var grade of grades) {
    if (grade % 2 === 0) {
        console.log(grade);
    }
}

console.log("####### 24 #######");
for (var i = 1; i <= 4; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("####### 25 #######");
var studentsList = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchedCount = 0;
for (var student of studentsList) {
    var upperStudent = student.toUpperCase();
    if (upperStudent.startsWith("A") || upperStudent.startsWith("S")) {
        console.log(upperStudent);
        matchedCount++;
    }
}
console.log("Matched:", matchedCount);