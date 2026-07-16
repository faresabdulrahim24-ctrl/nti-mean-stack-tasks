console.log("####### 1 #######");
function greetUser() {
    setTimeout(() => {
        console.log("Hello, User!");
    }, 3000); 
}
greetUser();

console.log("####### 2 #######");
function countdown() {
    var count = 10;
    var timerId = setInterval(() => {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(timerId);
            console.log("Time's up!");
        }
    }, 1000);
}
countdown();

console.log("####### 3 #######");
setTimeout(() => {
        clearInterval(timerId);
}, 5000);
countdown();

console.log("####### 4 #######");
var cancelTimer = setTimeout(() => {
    console.log("This will be cleared!"); 
}, 5000);
clearTimeout(cancelTimer);