console.log("####### 25 #######");
var students = [{
    name: "Omar",
    grade:80
},
    {
    name: "Mona",
    grade:90
    },
    {
    name: "Ali",
    grade:70
    }]
var std = students.forEach(function (student) {
    console.log("student name: ", student.name);
    console.log("it's grade: ", student.grade);
});

console.log("####### 26 #######");
var highStd = students.filter(function (student) {
    return student.grade >= 80;
}).map(function (student) {
    return student.name;
});
console.log(highStd);

console.log("####### 27 #######");
var products = [
    {
        name: "samsung s25",
        price: 70000
    },
    {
        name: "iphone 17",
        price: 100000
    },
    {
        name: "honor 400",
        price: 240000
    }
];

var totalPrice = products.reduce(function (acc, initPrice) {
    return acc + initPrice.price;
}, 0)
console.log("total price: ", totalPrice);

console.log("####### 28 #######");
var frontStack = ["js", "html", "css", "js", "react", "js"];
var jsCount = frontStack.reduce(function (counter, tech) {
    if (tech === "js") {
        counter++;
    }
    return counter;
}, 0);
console.log("js appear times: ", jsCount);

console.log("####### 29 #######");
var classroom = {
    teacher: "Mr.Ahmed",
    student:["Fares","Ali","Mona","Sara"]
}
console.log("teacher: ",classroom.teacher);
console.log("number of students: ",classroom.student.length);
console.log("the last student: ", classroom.student[students.length - 1]);

console.log("####### 30 #######");
var products = [{
    id: 1,
    title: "pen",
    price: 10
},
{
    id: 2,
    title: "book",
    price: 50
},
{
    id: 3,
    title: "bag",
    price: 25
    }];
var uppercaseTitle = products.map(function (uperTit) { return uperTit.title.toUpperCase()});
var cheapProduct = products.filter(function (prod) {
  return prod.price < 30
});
var totalPrice = products.reduce(function (acc, prod) { return acc + prod.price }, 0);
console.log("uppercase titles: ", uppercaseTitle);
console.log("product with price less than 30: ", cheapProduct);
console.log("total price: ", totalPrice);
