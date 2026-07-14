console.log("####### 14 #######");
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("####### 15 #######");
for (var i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

console.log("####### 16 #######");
var count = 10;
while (count >= 1) {
    console.log(count);
    count--; 
}

console.log("####### 17 #######");
let names = ["Sara", "Omar", "Mona", "Youssef"];
for (let name of names) {
    console.log(name);
}

console.log("####### 18 #######");
let output = "";
for (let i = 1; i <= 10; i++) {
    if (i === 7)
        break;
    output += i;
}
console.log(output);

console.log("####### 19 #######");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i * j = " + (i * j));
    }
}

console.log("####### 20 #######");
for (let i = 1; i <= 30; i++) {
    if (i === 25) {
        break;
    }
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}