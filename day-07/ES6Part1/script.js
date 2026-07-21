console.log("part A 'use strict' q1");

function withoutStrict() {
    mySecretVar = "Hello World!"; 
}
withoutStrict();
console.log(mySecretVar);

console.log("part A 'use strict' q2");
function withStrict() {
    "use strict";
    try {
        strictVar = "Hello Strict!";
    } catch (error) {
        console.log("Error from Q2:", error.message);
    }
}
withStrict();

console.log("part A 'use strict' q3");
function testDelete() {
    "use strict";
    try {
        var localvar = "test";
        eval('delete localvar;');
    } catch (error) {
        console.log("Error from Q3:", error.message);
    }
    var myObject = {
        name: "Fares",
        role: "Backend Developer"
    };
    console.log("Before delete:", myObject);
    delete myObject.role;
    console.log("After delete:", myObject);
}
testDelete();

console.log("part B 'hoisting' q4");
console.log(x); //undefined
var x = 10;
console.log(x); //10

console.log("part B 'hoisting' q5");
// Case 1
sayHi();
function sayHi() {
    console.log("Hi");  //case 1 work print hi
}

// Case 2
sayBye();
var sayBye = function () {
    console.log("Bye"); // case 2 not work error => reason function expression not hoisted like function declaration  
};

console.log("part B 'hoisting' q6");
console.log(a);
let a = 5; // output => error

console.log("part B 'hoisting' q7");
var n = 1;
function demo() {
    console.log(n); // undefined
    var n = 2;
    console.log(n); // 2
}
demo();
console.log(n); // 1

console.log("part C 'var vs let vs const' q8");
function testVarScope() {
    if (true) {
        var message = "from if";
    }
    console.log(message);  // from if //
}
testVarScope();

console.log("part C 'var vs let vs const' q9");
function testLetScope() {
    if (true) {
        let blockLet = "let in if";
        const blockConst = "const in if";
    }
    // console.log(blockLet); // error
    // console.log(blockConst); // error 
}
testLetScope();

console.log("part C 'var vs let vs const' q10");
var a = 1;
var a = 2; 

let b = 1;
// let b = 2; //  SyntaxError: Identifier 'b' has already been declared

console.log("part C 'var vs let vs const' q11");
const student = { name: "Fares", age: 21, city: "Ismailia" };

student.age = 22; 
console.log("After age change:", student);

student.grade = "A"; 
console.log("After adding grade:", student);

delete student.city; 
console.log("After deleting city:", student);

try {
    student = { name: "Ahmed" }; 
} catch (error) {
    console.log("Error reassigning object:", error.message);
}

console.log("part C 'var vs let vs const' q12");
const nums = [1, 2, 3];

nums.push(4); //ok
nums[0] = 99; //ok

// nums = [5, 6]; //(TypeError: Assignment to constant variable)

console.log("part C 'var vs let vs const' q13");
var a; //undefined
let b; //undefined
const c; //SyntaxError: Missing initializer

console.log("part C 'var vs let vs const' q14");
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
window.g1 //var global 
window.g2 //undefined
window.g3 //undefined

console.log("part C 'var vs let vs const' q15");
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i; 
    }
};
console.log(handlers.fn0()); // "index: 0"
console.log(handlers.fn2()); // "index: 2"

console.log("part D 'Arrow Functions & Template Literals' q16");
const welcome = name => `Welcome, ${name}!`;
console.log(welcome("Ahmed"));

console.log("part D 'Arrow Functions & Template Literals' q17");
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

console.log("part D 'Arrow Functions & Template Literals' q18");
const multiply = (a, b) => a * b;
const sumAndPrint = (a, b) => {
    console.log(`The numbers are: ${a} and ${b}`);
    return a + b;
};
console.log("Product:", multiply(5, 4));
console.log("Sum:", sumAndPrint(5, 4));

console.log("part E 'Destructuring, Default, Rest, Spread' q19");
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title, price, inStock);

console.log("part E 'Destructuring, Default, Rest, Spread' q20");
const tools = ["HTML", "CSS", "JS", "React"];
const [firstSkill, secondSkill] = tools;

console.log(firstSkill, secondSkill);

console.log("part E 'Destructuring, Default, Rest, Spread' q21");
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Fares", "Welcome")); // Welcome, Fares!
console.log(greet("Fares")); // Hello, Fares!
console.log(greet()); // Hello, Guest!

console.log("part E 'Destructuring, Default, Rest, Spread' q22");
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

console.log("part E 'Destructuring, Default, Rest, Spread' q23");
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const merged = [...arr1, ...arr2]; 
console.log("Merged Array:", merged);

const original = [10, 20, 30];
const copy = [...original];
copy.push(40);

console.log("Original:", original); // [10, 20, 30]
console.log("Copy:", copy); // [10, 20, 30, 40]

console.log("part E 'Destructuring, Default, Rest, Spread' q24");
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };

const mergedUser = { ...user, ...contact };
console.log(mergedUser); //age = 23

console.log("part E 'Destructuring, Default, Rest, Spread' q25");
const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));

console.log("part F 'Memory & Copying' q26");
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);

console.log("part F 'Memory & Copying' q27");
const original = {
    name: "Mona",
    details: { city: "Cairo" }
};
const shallowCopy = { ...original };

shallowCopy.name = "Fares";
shallowCopy.details.city = "Alex";

console.log("Original:", original); 
// Output: { name: 'Mona', details: { city: 'Alex' } }
console.log("Copy:", shallowCopy); 
// Output: { name: 'Fares', details: { city: 'Alex' } }

console.log("part F 'Memory & Copying' q28");
const originalObj = {
    name: "Mona",
    details: { city: "Cairo" }
};

const deepCopy = structuredClone(originalObj);

deepCopy.details.city = "Aswan";

console.log("Original City:", originalObj.details.city); // Cairo
console.log("Deep Copy City:", deepCopy.details.city); // Aswan

console.log("part F 'Memory & Copying' q29");
const userData = { name: "Ahmed", age: 26, city: "Alex" };

localStorage.setItem("userdata", JSON.stringify(userData));
const retrievedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(retrievedData);

console.log("Type:", typeof parsedData); 
console.log("Values:", parsedData);

localStorage.removeItem("userdata");

console.log("part G 'Memory & Copying' q30");
const APP_CONFIG = {
    name: "MyApp",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.myproject.com",
        timeout: 5000
    },
    features: []
};

APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("Dark Mode");
console.log("Config before reassign:", APP_CONFIG);
try {
    APP_CONFIG = { name: "NewApp" };
} catch (error) {
    console.log("Reassignment Error:", error.message);
}

console.log("part G 'Memory & Copying' q31");
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "tech", "sale", "new");
const card2 = createCard("Mouse");

console.log("Card 1:", card1);
console.log("Card 2:", card2);

console.log("part G 'Memory & Copying' q32");
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}
console.log("--- Using Map ---");
students.map(({ name, grade }) => {
    console.log(`${name} scored ${grade}`);
});