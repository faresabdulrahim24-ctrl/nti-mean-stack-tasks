console.log("####### 9 #######");
var cities = ["alexandria", "cairo", "ismailia", "portsaid", "suez"];
console.log(cities);
console.log("length of arraay: ", cities.length);

console.log("####### 10 #######");
console.log("the first city: ", cities[0]);
console.log("the second city: ", cities[1]);
console.log("the last city: ", cities[cities.length-1]);

console.log("####### 11 #######");
cities.push("new york");
console.log("after push", cities);
cities.unshift("new mexico");
console.log("after unshift: ", cities);

console.log("####### 12 #######");
cities.pop();
console.log("after pop", cities);
cities.shift();
console.log("after shift: ", cities);

console.log("####### 13 #######");
var progLang = ["HTML","CSS","JS","REACT"]
console.log("the index of JS: ", progLang.indexOf("JS"));
console.log(progLang.includes("Python")); //not exist

console.log("####### 14 #######");
var arr = ["pen", "book", "bag"];
arr.forEach(function (item) {
    console.log(item)
})
arr.forEach(function (item,index) {
    console.log(index + ": " +item)
})

console.log("####### 15 #######");
var colors = ["red", "green", "blue", "yellow"];
for (color of colors) {
    if (color === "blue")
        continue
    console.log(color);
}

console.log("####### 16 #######");
var alph = ["A", "B", "C"];
alph.push("D", "E");
alph.shift();
console.log(alph.length);
console.log(alph);
