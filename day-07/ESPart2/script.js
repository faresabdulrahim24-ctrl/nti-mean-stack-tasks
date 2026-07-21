console.log("part A 'for...in vs for...of' q1");
const fruits = ["apple", "banana", "cherry"]; 
// for in prints index
for (const index in fruits) {
    console.log(index, fruits[index]);
}
// for of prints value
for (const value of fruits) {
    console.log(value);
}

console.log("part A 'for...in vs for...of' q2");
for (const [index, value] of fruits.entries()) { 
    console.log(`${index} -> ${value}`);
}

console.log("part A 'for...in vs for...of' q3");
const str = "NTI";
for (const index in str) {
    console.log(index, str[index]);
}
for (const char of str) {
    console.log(char);
}
// Reason: for...in iterates over enumerable keys (indexes), while for...of iterates over iterable values.

console.log("part A 'for...in vs for...of' q4");
const user = { name: "Ali", age: 25 };
/*
for (const x of user) {
    console.log(x); // output => TypeError: user is not iterable
}
*/
// Fix it using Object.entries
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

console.log("part A 'for...in vs for...of' q5");
const numbersArr = [1, 2, 3, 4, 5, 6]; 
for (const num of numbersArr) {
    if (num === 3) continue; // skip 3
    if (num === 5) break; // stop before 5
    console.log(num); // Output => 1, 2, 4 
}

console.log("part B 'Map' q6");
const myMap = new Map(); 
myMap.set("name", "Ahmed"); 
myMap.set(100, "ID"); 
const objKey = { id: 1 }; 
myMap.set(objKey, "UserObject"); 
console.log(typeof myMap); // output => object
console.log(myMap.size); // output => 3

console.log("part B 'Map' q7");
console.log(myMap.get("name")); // Ahmed
console.log(myMap.has("age")); // false
myMap.delete(100); //
console.log(myMap.size); // 2

console.log("part B 'Map' q8");
for (const [key, value] of myMap) { 
    console.log("Entry:", key, value);
}
for (const key of myMap.keys()) { 
    console.log("Key:", key);
}
for (const value of myMap.values()) { 
    console.log("Value:", value);
}

console.log("part B 'Map' q9");
// 1. Keys can be any type (objects, functions), not just strings.
// 2. Map maintains the exact insertion order.
// 3. Easy to get the size using the .size property.

console.log("part B 'Map' q10");
myMap.clear(); //
console.log(myMap.size); // output => 0

console.log("part C 'Set' q11");
const mySet = new Set([10, 21, 2, 3, 2, 10]);
console.log(mySet);
console.log(mySet.size); // output => 4
// Reason: Set automatically removes duplicate values, so the extra '2' and '10' are ignored.

console.log("part C 'Set' q12");
console.log(mySet.has(2)); // output => true
mySet.delete(3); //
console.log(mySet.has(3)); // output => false

console.log("part C 'Set' q13");
for (const value of mySet.values()) { 
    console.log(value);
}
for (const entry of mySet.entries()) { 
    console.log(entry);
}

console.log("part C 'Set' q14");
const duplicateNums = [1, 2, 2, 3, 4, 4, 5]; //
const uniqueNums = [...new Set(duplicateNums)]; //
console.log(uniqueNums); // output => [1, 2, 3, 4, 5]

console.log("part C 'Set' q15");
// 1. Set does not allow duplicates, Array does.
// 2. Set doesn't have indexes (can't do set[0]), Array is index-based.
// 3. Checking existence (has) in Set is generally faster than Array (includes).

console.log("part D 'Enhanced Object Literals' q16");
const nameStr = "Ahmed"; //
const ageNum = 25; //
const oldWayObj = { nameStr: nameStr, ageNum: ageNum };
const shorthandObj = { nameStr, ageNum }; 
console.log(oldWayObj, shorthandObj);

console.log("part D 'Enhanced Object Literals' q17");
const calculator = {
    add(a, b) { return a + b; },
    multiply(a, b) { return a * b; }
};
console.log("Add:", calculator.add(5, 5));
console.log("Multiply:", calculator.multiply(5, 5));

console.log("part D 'Enhanced Object Literals' q18");
const key1 = "email";
const key2 = "phone";
const builtObj = {
    [key1]: "test@test.com", 
    [key2]: "012345678",
    user_99: "special user"
};
console.log(builtObj);

console.log("part D 'Enhanced Object Literals' q19");
function buildPayload(type, value) { 
    return {
        type, // shorthand
        value, // shorthand
        createdAt: new Date().toISOString(), 
        print() { // shorthand method
            console.log(`${this.type}: ${this.value}`); 
        },
        [`${type}_flag`]: true // computed property
    };
}
const payloadObj = buildPayload("order", 12345); 
console.log(payloadObj);
payloadObj.print(); 

console.log("part E 'Memory: Value vs Reference' q20");
let aVar = 10; 
let bVar = aVar; 
bVar++; 
console.log(aVar, bVar); // output => 10, 11
// Reason (stack/value copy): Primitive values are copied by value. They live independently in the stack. Changing bVar doesn't affect aVar.

console.log("part E 'Memory: Value vs Reference' q21");
const person1E = { name: "SSS", child: { age: 5 } }; //
const person2E = person1E; 
person2E.name = "AAA"; 
console.log(person1E.name); // output => AAA

console.log("part E 'Memory: Value vs Reference' q22");
const originalE = { x: 1, nested: { y: 2 } }; 
const shallowCopyE = { ...originalE }; 
shallowCopyE.x = 99; 
shallowCopyE.nested.y = 100; 
console.log("Original:", originalE); // output => { x: 1, nested: { y: 100 } }

console.log("part E 'Memory: Value vs Reference' q23");
const assignCopy = Object.assign({}, originalE); 
assignCopy.nested.y = 500; 
console.log("Original nested y:", originalE.nested.y); // output => 500
// Does the original change? Yes. Object.assign also creates a shallow copy just like spread.

console.log("part E 'Memory: Value vs Reference' q24");
const deepSrc = {
    n: 1,
    d: new Date(),
    arr: [1, { k: 2 }],
    set: new Set([1, 2, 3])
}; 
const deepClone = structuredClone(deepSrc); 
deepClone.arr[1].k = 999; 
console.log("Clone arr[1].k:", deepClone.arr[1].k); // output => 999
console.log("Original arr[1].k:", deepSrc.arr[1].k); // output => 2 (original was not affected)

console.log("part E 'Memory: Value vs Reference' q25");
const arr1 = [1, [2, 3]]; 
const arr3 = [...arr1]; 
arr1[1][0] = 99; 
console.log(arr3[1][0]); // output => 99

// Fix using structuredClone:
const fixedDeepArr = structuredClone(arr1); 
fixedDeepArr[1][0] = 500;
console.log("Fixed deep clone:", fixedDeepArr[1][0], "| Original stays at:", arr1[1][0]); // 500 | 99

console.log("part F 'Map Cloning & Challenge' q26");
const m1 = new Map([["k", { v: 1 }]]);
const m2 = new Map(m1); 
m2.get("k").v = 42; 
console.log(m1.get("k").v); // output => 42

console.log("part F 'Map Cloning & Challenge' q27");
const m3 = structuredClone(m1); //
m3.get("k").v = 7; //
console.log("m1 stayed at:", m1.get("k").v); // output => 42 (Proof that m1 stayed at 42)

console.log("part F 'Map Cloning & Challenge' q28");
const idsArray = [101, 102, 101, 103, 102, 104]; //
const uniqueIds = new Set(idsArray); 
const idsMap = new Map();
for (const id of uniqueIds) { 
    idsMap.set(id, "available"); 
}
console.log("Map size:", idsMap.size); // output => 4
for (const entry of idsMap.entries()) { 
    console.log(entry); 
}

console.log("part F 'Map Cloning & Challenge' q29");
const subjectTitle = "Computer Science";
const courseObj = {
    subjectTitle,
    info() { 
        return `This is ${this.subjectTitle}`;
    },
    [`${subjectTitle}_Code`]: "CS101"
};
for (const [key, value] of Object.entries(courseObj)) { 
    console.log(key, ":", typeof value === 'function' ? 'function' : value); 
}

console.log("part F 'Map Cloning & Challenge' q30");
let personA = { name: "SSSSSSS", son: { age: 5 } }; 

let personB = personA;
personB.name = "Updated_Name";
let personC = structuredClone(personA);
personC.son.age = 99;

console.log("personA:", personA); 
console.log("personB:", personB); 
console.log("personC:", personC); 