console.log("####### 8 #######");
var stringNum = "45.8";
console.log(typeof stringNum);
var num = Number(stringNum);
console.log(typeof num);
console.log(num);

console.log("####### 9 #######");
var num2 = 7.6;
console.log("Rounded number: " + Math.round(num2));
console.log("Floored number: " + Math.floor(num2));
console.log("Ceiled number: " + Math.ceil(num2));

console.log("####### 10 #######");
console.log("Maximum number: " + Math.max(12, 5, 28, 9));
console.log("Minimum number: " + Math.min(12, 5, 28, 9));

console.log("####### 11 #######");
var randomNum = Math.floor(Math.random() * 20) + 1;
console.log("Random number between 1 and 20: " + randomNum);

console.log("####### 12 #######");
var price = 19.4567;
console.log(price.toFixed(2));

console.log("####### 13 #######");
let randoms = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 50) + 1;
    randoms.push(rand);
    sum += rand;
}
console.log("Max:" + Math.max(...randoms));
console.log("Min:" + Math.min(...randoms));
console.log("Average:" + (sum / 5).toFixed(2));
