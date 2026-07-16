console.log("####### 17 #######");
var fruits = ["apple", "banana", "cherry"];
var upFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
})
console.log("original array: ",fruits);
console.log("after upperCase: ", upFruits);

console.log("####### 18 #######");
var numbers = [10, 55, 30, 80, 45, 90];
var numbers2 = numbers.filter(function (number) {
    return number > 50;
})
console.log(numbers2);

console.log("####### 19 #######");
var cities = ["Cario", "Giza", "Alex", "Aswan"];
var startA = cities.find(function (city) {
    return city.startsWith("A");
})
console.log("first city start with A is: " + startA +
    " and it's index is: " + cities.indexOf(startA));

console.log("####### 20 #######");
var alphapet = ["a", "b", "c", "d", "e"];
var slicedAlphapet = alphapet.slice(1, 4)
console.log("original: ", alphapet);
console.log("sliced copy: ", slicedAlphapet);

console.log("####### 21 #######");
var num = ["one", "two", "three", "four", "five"];
var splicedNum = num.splice(1, 2,);
console.log("removed numbers: ", splicedNum);
console.log("orignal numbers: ", num);

console.log("####### 22 #######");
var ages = [16, 21, 17, 19];
console.log(ages.some(function (age) { return age >= 18 }));
console.log(ages.every(function (age) { return age >= 18 }));

console.log("####### 23 #######");
var num = [5, 10, 15, 20];
var sum = num.reduce((acc,current) => {
    return acc + current;    
}, 0)
console.log(sum);



