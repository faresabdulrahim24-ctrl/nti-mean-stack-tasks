// ==================== For...of vs For...in ====================

// For...in → iterates over KEYS (indixes in arrays, property names in objects)
// For...of → iterates over VALUES (works with Iterables: Arrays, Strings, Maps, Sets)


// -------------------- Arrays --------------------
// const arr = [10, 20, 30];

// for...in → indixes

// for (const i in arr) {
//   console.log("for...in index:", i, "value:", arr[i]);
// }

// for...of → values

// for (const val of arr) {
//   console.log("for...of value:", val);
// }

// entries() → index + value ( arr.entries() returns an iterator (not a normal array) >> [...fruits.entries()] )
// for (const [i, val] of arr.entries()) {
//   console.log("entries:", i, val);
// }


// -------------------- Strings --------------------
// const str = "ASA";

// for...in → indixes 

// for (const i in str) {
//   console.log("for...in:", i, str[i]);
// }

// for...of → actual characters

// for (const ch of str) {
//   console.log("for...of:", ch);
// }


// -------------------- Maps (Map = advanced Object)--------------------
// Why use Map instead of Object?

// If your keys are not just strings (like objects, arrays, or functions).

// If you need reliable iteration order (Map keeps insertion order).

// If you need .size directly instead of Object.keys(obj).length.

//If you need built-in methods like .set(), .get(), .has(), .delete().

// const user = { id: 1 };
// const map = new Map();
// console.log(typeof map);

// set(key, value) → add or update
// map.set("name", "Ahmed");
// map.set(100, "ID");
// map.set(user, "UserObject");

// get(key) → retrieve value
// console.log("get name:", map.get("name"));

// has(key) → check existence
// console.log("has age:", map.has("age")); 

// delete(key) → remove key
// map.delete(100);
// console.log("has 100:", map.has(100)); 

// size → number of entries
// console.log("map size:", map.size);

// iterate all entries
// for (const [x,v] of map) {
//   console.log("map entry:", k, v);

// }

// keys only
// for (const k of map.keys()) console.log("map key:", k);

// values only
// for (const v of map.values()) console.log("map value:", v);


// clear() → remove everything
// map.clear();
// console.log("map after clear:", map.size);


// -------------------- Sets --------------------
// Why use Set instead of Arr?
// Store unique values only → no duplicates allowed.

// Order is preserved by insertion.

// No index access (set[0] doesn’t work).

// Provide useful methods: .add(), .delete(), .has(), .clear().

// Great for checking membership and removing duplicates.

// const set = new Set();

// add(value) → add unique value
// set.add(10);
// set.add(21);
// set.add(2); 
// set.add(3);
// console.log(set);

// has(value) → check existence

// console.log("set has 2:", set.has(2)); 

// delete(value) → remove value

// set.delete(3);
// console.log("set has 3:", set.has(3)); 

// size → number of values

// console.log("set size:", set.size);

// keys(), values(), entries() → in Set keys = values

// console.log("set values:");
// for (const v of set.values()) console.log(v);

// console.log("set entries:");
// for (const [k, v] of set.entries()) console.log(k, v);

// clear() → remove all values

// set.clear();
// console.log("set size after clear:", set.size);


// -------------------- Objects {} --------------------
// const obj = { a: 1, b: 2 };

// for...in works on keys

// for (const k in obj) {
//   console.log("for...in key:", k, "value:", obj[k]);
// }

// for...of does NOT work directly on objects
// for (const x of obj) {} // TypeError

// solution: Object.keys / Object.values / Object.entries

// for (const [k, v] of Object.entries(obj)) {
//   console.log("Object.entries:", k, v);
// }


// -------------------- break / continue --------------------

// for (const n of [1, 2, 3, 4, 5,6]) {
//   if (n === 3) continue; // skip 3
//   if (n === 5) break;    // stop at 5 , 6
//   console.log("loop value:", n);
// }


// ==================== PRACTICAL USE CASES ====================

// 1) Remove duplicates from an array using Set
// const nums = [1, 2, 2, 3, 4, 4, 5];
// A
// const uniqueNums = [...new Set(nums)];
// console.log("unique numbers:", uniqueNums); // [1,2,3,4,5]

// ==================== Enhanced Object Literals ====================

// 1) Shorthand property names
// If the variable name and the property name are the same,
// you can just write the name once.


// const name = "Ahmed";
// const age = 25;

// const user1 = {
//   name: name,
//   age: age
// };
// console.log("normal object:", user1);

// Shorthand
// const user2 = { name , age  };
// console.log("shorthand object:", user2);


// 2) Shorthand method definitions
// You can define methods without the "function" keyword.

// const calculator1 = {
//   add: function (a, b) {
//     return a + b;
//   }
// };
// console.log("normal add:", calculator1.add(2, 3));

// Shorthand
// const calculator2 = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   }
// };
// console.log("shorthand add:", calculator2.add(5, 7));
// console.log("shorthand multiply:", calculator2.multiply(3, 4));


// 3) Computed property names
// You can use [] to create property names dynamically.

// let obj1 ={}
// obj1.name = "sssssssssss";
// const key1 = "email";
// const key2 = "phone";

// const contact = {
//   [key1]: "ahmed@example.com",
//   [key2]: "123456789",
//   ["user_" + 99]: "special user"
// };
// console.log("contact object:", contact);


// ==================== PRACTICAL USE CASES ====================

// Example: Build dynamic object for API payload
// function buildPayload(type, value) {
//   return {
//     type,            // shorthand property
//     value,           // shorthand property
//     createdAt: new Date().toISOString(),
//     print() {        // shorthand method
//       console.log(`${type}: ${value}`);
//     },
//     [type + "_flag"]: true  // computed property
//   };
// }

// const payload = buildPayload("order", 12345);
// console.log("payload object:", payload);
// payload.print(); // "order: 12345"


// ===================== JS Memory: Stack vs Heap, Value vs Reference =====================
//
// - Primitives (number, string, boolean, null, undefined) are copied by VALUE.
// - Objects/Arrays/Functions/Map/Set/Date/RegExp/etc. live on the HEAP; variables hold a REFERENCE.
// - Assigning an object to another variable copies the REFERENCE (both names point to the same object).
// - Spread/Object.assign make SHALLOW copies (nested objects still shared).
// - structuredClone makes a DEEP copy for most built-ins (not functions).
// - JSON stringify/parse is a deep-ish copy with important caveats (loses functions, undefined, dates → strings).
//


// -------------------- 1) Primitives: copied by value (stack) --------------------
// let a = 10;
// let b = a;   // copy the VALUE
// b++;
// console.log("primitives:", a, b); // 10 11


// -------------------- 2) Objects: variables hold references (heap) --------------------
// const person1 = { name: "SSS", child: { age: 5 } };
// const person2 = person1;          
// person2.name = "AAA";
// console.log("same reference → person1.name:", person1.name); 
// console.log( person1 , person2);   


// -------------------- 3) Shallow copies (spread / Object.assign) --------------------
// const original = { x: 1, nested: { y: 2 } };

// Spread (shallow)
// const copySpread = { ...original };
// copySpread.x = 99;
// copySpread.nested.y = 123; 
// console.log("spread shallow:", original.nested.y);

// Object.assign (shallow)
// const copyAssign = Object.assign({}, original);
// copyAssign.nested.y = 456; 
// console.log("assign shallow:", original.nested.y); 


// -------------------- 4) Deep copy with structuredClone (modern, safe for most built-ins) --------------------
// const deepSrc = {
//   n: 1,
//   d: new Date(),
//   arr: [1, { k: 2 }],
//   set: new Set([1, 2, 3]),
// };

// const deepClone = structuredClone(deepSrc);
// deepClone.arr[1].k = 999;

// console.log(deepSrc);

// console.log(deepClone);


// -------------------- 5) Deep-ish copy with JSON.stringify/parse --------------------


// -------------------- 6) Arrays: shallow copies vs deep --------------------
// const arr1 = [1, [2, 3]];   
// const arr3 = [...arr1];
// arr1[1][0] = 99;                               
// console.log( arr3[1][0]);    

// const arr4 = structuredClone(arr1); 
// arr4[1][0] = 2;
// console.log("arr1 unaffected by arr4:", arr1[1][0], arr4[1][0]); 






// -------------------- 9) Map/Set cloning nuances --------------------
// const m1 = new Map([["k", { v: 1 }]]);
// const m2 = new Map(m1);                 // SHALLOW: values are same references
// m2.get("k").v = 42;
// console.log("m1 shared value changed:", m1.get("k").v); // 42

// const m3 = structuredClone(m1);         // DEEP for supported types
// m3.get("k").v = 7;
// console.log("m1 unaffected by m3:", m1.get("k").v);     // 42



// --------------------  --------------------
// let no = 10;
// let isSuccess = true;

// let personA = {
//   name: "SSSSSSS",
//   son: { age: 5 }
// };

// let personB = personA;                  // reference copy
// personB.name = "CHANGED";
// console.log("personA.name (same ref):", personA.name); // "CHANGED"

// // Deep copy with structuredClone
// let personC = structuredClone(personA);
// personC.son.age = 4;
// console.log("personA.son.age (deep copy safe):", personA.son.age); // 5
// console.log("personC.son.age:", personC.son.age);                  // 4
