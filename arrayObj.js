// ============================================================
// Objects & Arrays in JavaScript
// ============================================================


// ================== OBJECTS ==================

// ========== 1. Creating an Object ==========
// var person = {
//   name: "Ali",
//   age: 25,
//   job: "Software Developer",
//   city: "Cairo"
// };


// ========== 2. Accessing Object Properties ==========
// console.log(person.name);    // Ali
// console.log(person["age"]);  // 25


// ========== 3. Modifying Object Properties ==========
// person.age = 26;
// person.city = "Alexandria";
// console.log(person.age);   // 26
// console.log(person.city);  // Alexandria


// ========== 4. Adding New Properties ==========
// person.country = "Egypt";
// console.log(person);
// person.first-name = "Ali";
// person["ss-ss"] = "ffffff" ;
// var newProperty = "email";
// person[newProperty] = "ali@example.com";
// console.log(person.email); // ali@example.com


// ========== 5. Deleting Properties ==========
// delete person.job;
// console.log(person);
// console.log(person.job); // undefined


// ========== 6. Dot (.) vs Bracket [] ==========
// Use [] when the key has special characters (like -)
// var student = {
//   "student-name": "Ahmed",
//   age: 22
// };
// console.log(student["student-name"]); // Ahmed
// console.log(student.age);             // 22
// console.log(student.student-name);    // ERROR — do not use . with -


// ========== 7. Nested Objects ==========
// var company = {
//   name: "Tech Solutions",
//   location: {
//     city: "Cairo",
//     country: "Egypt",
//     "street-details": {
//       name: "abas",
//       boxNo: "123"
//     }
//   }
// };

// console.log(company.location["street-details"].boxNo);
// console.log(company.location.country);     // Egypt


// ========== 8. Object Methods ==========
// var person = {
//   name: "Ali",
//   age: 25,
//   job: "Developer"
// };


// console.log(Object.keys(person));   // ["name", "age", "job"]
// console.log(Object.values(person)); // ["Ali", 25, "Developer"]
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("job"));  // true
// console.log(person.hasOwnProperty("city")); // false


// ========== 9. Mutable vs Immutable ==========
// Mutable   = can be changed after creation
// Immutable = cannot be changed after creation

// Most objects and arrays in JS are mutable by default:
// var user = { name: "Ali", age: 25 };
// user.age = 26;           // change existing property
// user.city = "Cairo";     // add new property
// console.log(user);       // { name: "Ali", age: 26, city: "Cairo" }

// Strings and numbers are immutable:
// var text = "Hello";
// text[0] = "h";           // does nothing
// console.log(text);       // still "Hello"
// text = text.toUpperCase(); // this creates a NEW string
// console.log(text);       // "HELLO"

// Tip: changing a variable value (re-assign) is different
// from mutating the same object/array in memory.


// ========== 10. Object.freeze (make object immutable) ==========
// freeze = cannot change, add, or delete properties
// var person = { name: "Ali", age: 25 };
// Object.freeze(person);

// person.age = 30;         // ignored
// person.city = "Cairo";   // ignored
// delete person.name;      // ignored
// console.log(person);     // { name: "Ali", age: 25 }


// ========== 11. Object.seal ==========
// seal = can change existing properties
//      = cannot add or delete properties
// var person = { name: "Ali", age: 25 };
// Object.seal(person);

// person.age = 30;         // works
// person.city = "Cairo";   // ignored
// delete person.name;      // ignored
// console.log(person);     // { name: "Ali", age: 30 }


// ========== 12. Objects in a Real Scenario ==========
// var user = {
//   username: "johnDoe",
//   password: "password123",
//   lastLogin: "2023-05-01",
//   isLoggedIn: false
// };

// function displayUserInfo(userObj) {
//   console.log("Username:", userObj.username);
//   console.log("Last Login:", userObj.lastLogin);
//   console.log("Status:", userObj.isLoggedIn ? "Logged In" : "Not Logged In");
// }
// displayUserInfo(user);


// ================== ARRAYS ==================

// ========== 1. Creating an Array ==========
// var fruits = ["Apple", "Banana", "Orange", "Grapes"];
// console.log(fruits);
// console.log(fruits.length); // 4


// ========== 2. Accessing Array Elements ==========
// console.log(fruits[0]);                 // Apple
// console.log(fruits[1]);                 // Banana
// console.log(fruits[fruits.length - 1]); // Grapes (last item)


// ========== 3. Adding Elements (mutable) ==========
// fruits.push("Pineapple"); // add at the end
// console.log(fruits);

// fruits.unshift("Mango");  // add at the start
// console.log(fruits);


// ========== 4. Removing Elements (mutable) ==========
// fruits.pop();   // remove last item
// console.log(fruits);

// fruits.shift(); // remove first item
// console.log(fruits);


// ========== 5. Finding an Element ==========
// console.log(fruits.indexOf("Banana"));    // 1
// console.log(fruits.indexOf("Pineapple")); // -1 (not found)
// console.log(fruits.includes("Orange"));   // true


// ========== 6. forEach vs for...of ==========
// forEach = array method (runs a function for each item)
// for...of = loop (can use break / continue)

// Example 1: forEach — print each fruit
// fruits.forEach(function (item, index) {
//     console.log(item, "index = ", index);
// })

// Example 2: forEach also gives the index
// fruits.forEach(function (fruit, index) {
//   console.log(index, fruit);
// });

// Example 3: for...of — same idea, but it is a loop
// for (var fruit of fruits) {
//   console.log(fruit);
// }

// Example 4: stop early with break (works in for...of only)
// for (var fruit of fruits) {
//   if (fruit === "Orange") {
//     break;
//   }
//   console.log(fruit); // Apple, Banana
// }

// fruits.forEach(function (fruit) {
//   if (fruit === "Orange") {
//     // break; // ERROR — break does not work inside forEach
//   }
//   console.log(fruit);
// });


// ========== 7. map (returns a NEW array) ==========
// var upperCaseFruits = fruits.map(function (fruit) {
//   return fruit.toUpperCase();
// });
// console.log(upperCaseFruits); // new array
// console.log(fruits);          // original not changed


// ========== 8. filter (returns a NEW array) ==========
// var inputusersearch = "AN"; // Example search term
// var filteredFruits = fruits.filter(function (fruit) {
//   return fruit.toLowerCase().includes(inputusersearch.toLowerCase());
// }); 
// console.log("result = ", filteredFruits);


// var longNamedFruits = fruits.filter(function (fruit) {
//   return fruit.length > 5;
// });
// console.log(longNamedFruits); // ["Banana", "Orange", "Grapes"]
// console.log(fruits);          // original not changed


// ========== 9. find / findIndex / lastIndexOf ==========
// var fruits = ["Apple", "Orange1", "Banana", "Orange2", "Grapes", "Banana"];

// var found = fruits.find(function (f) {
//   return f.startsWith("O");
// });
// console.log(found); // Orange1

// var foundIndex = fruits.findIndex(function (f) {
//   return f.length > 5;
// });
// console.log(foundIndex); // 1 (Banana)

// console.log(fruits.lastIndexOf("Banana")); // 5 (last occurrence of "Banana")


// ========== 10. Mutable vs Immutable Array Methods ==========
// Mutable methods change the original array (push, splice, sort, reverse...)
// Immutable methods return a new array and keep the original (map, filter, toSorted...)

// Example: mutable sort (changes original)
// var nums = [3, 1, 2];
// var originalCopy = [...nums]; // make a copy of the original
// nums.sort(function (a, b) { return a - b; });
// console.log(nums); // [1, 2, 3]  ← original changed
// console.log(originalCopy); // [3, 1, 2]  ← original copy unchanged

// Example: immutable toSorted (keeps original)
// var nums2 = [3, 1, 2];
// var sortedCopy = nums2.toSorted(function (a, b) { return a - b; });
// console.log(sortedCopy); // [1, 2, 3]
// console.log(nums2);      // [3, 1, 2]  ← original same


// ========== 11. Immutable methods: toSorted / toReversed / toSpliced / with ==========
// var nums = [3, 1, 2];

// console.log(nums.toSorted(function (a, b) { return a - b; })); // [1, 2, 3]
// console.log(nums.toReversed()); // [2, 1, 3]
// console.log(nums);              // still [3, 1, 2]

// toSpliced(startIndex, deleteCount, ...itemsToAdd)
// console.log(nums.toSpliced(1, 1)); // [3, 2]
// console.log(nums);                   // still [3, 1, 2]

// // with(index, newValue) — update one item in a copy
// console.log(nums.with(0, 99)); // [99, 1, 2]
// console.log(nums);            // still [3, 1, 2]


// ========== 12. slice vs splice ==========
// slice  = immutable (copy part of array)
// splice = mutable (change original array)

var letters = ["a", "b", "c", "d", "e"];

// // slice(startIndex, endIndex) — endIndex is not included
// var sliced = letters.slice(1, 4);
// console.log(sliced);  // ["b", "c", "d"]
// console.log(letters); // original same

// // splice(startIndex, deleteCount, ...itemsToAdd)
// var removed = letters.splice(2, 2);
// console.log(removed); // ["c", "d"]
// console.log(letters); // ["a", "b", "e"]  ← original changed


// ========== 13. sort ==========
// sort is mutable (changes the original array)

// var nums = [100, 3, 20, 5];
// nums.sort(); // as strings by default → wrong for numbers
// console.log(nums);

// nums.sort(function (a, b) { return a - b; }); // correct for numbers
// console.log(nums);

// var cities = ["cairo", "Alex", "giza"];
// var sortedcities=cities.toSorted();
// console.log(sortedcities);
// console.log(cities);


// ========== 14. some / every ==========
// both return true or false
// var ages = [22,18, 30];
// console.log(ages.some(function (a) { return a >= 30; }));  // true
// console.log(ages.every(function (a) { return a >= 20; })); // false (not all are >= 20)


// ========== 15. reduce ==========
// array.reduce(function (accumulator, currentValue) {
//   return newAccumulator;
// }, initialValue);

// var nums = [1, 2, 3, 4];
// var sum = nums.reduce(function (acc, n) {
//   return acc + n;
// }, 0);
// console.log(sum); // 10

// // Group by city
// var users = [
//   { name: "Ali", city: "CAI" },
//   { name: "Sara", city: "GZA" },
//   { name: "Mona", city: "CAI" }
// ];

// var byCity = users.reduce(function (acc, u) {
//   acc[u.city] = acc[u.city] || [];  
//   acc[u.city].push(u);
//   return acc;
// }, {});


// console.log(byCity);



// ========== 16. flat / flatMap ==========
// var nested = [1, [2, [3]], 4];
// console.log(nested.flat());  // [1, 2, [3], 4]
// console.log(nested.flat(2)); // [1, 2, 3, 4]

// var deepNested = [1, [2, [3, [4]]]];
// console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4]



// var phrases = ["a b", "c d"];
// var words = phrases.flatMap(function (s) {
//     console.log("s = ",s);
//     console.log("s.split(' ') = ",s.split(" "));
//   return s.split(" ");
// });
// console.log(words); // ["a", "b", "c", "d"]


// ========== 17. concat & spread ==========
// var a = [1, 2];
// var b = [3, 4];
// console.log(a.concat(b));       // [1, 2, 3, 4]
// console.log([].concat(a, b, 5)); // [1, 2, 3, 4, 5]


// ========== 18. at() ==========
// var nums = [10, 20, 30, 40];
// console.log(nums.at(0));              // 10
// console.log(nums.at(-1));             // 40 (last item)
// console.log(nums[nums.length - 1]);   // 40 (same idea)


// ========== 19. keys (index) / values / entries ==========
// var arr = ["x", "y", "z"];
// for (var k of arr.keys()) { console.log("key:", k); }
// for (var v of arr.values()) { console.log("val:", v); }
// for (var entry of arr.entries()) { console.log(entry); }


// ========== 20. join / toString ==========
// var nums = [1, 2, 3];
// console.log(nums.join("")); // "123"
// console.log(String(nums));   // "1,2,3"


// ========== 21. Array.of / Array.from ==========
// console.log(Array.of(7, 8, 9));     // [7, 8, 9]
// console.log(Array.from("ABC"));    // ["A", "B", "C"]

// var squares = Array.from([1, 2, 3], function (n) {
//   return n * n;
// });
// console.log(squares); // [1, 4, 9]
