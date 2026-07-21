// =====================================================================
// ES6 Lab — Part 1
// Uncomment أي مثال عشان تجربه في الـ console
// =====================================================================


// =====================================================================
// 1) "use strict"
// =====================================================================
// Strict mode يمنع أخطاء شائعة زي:
// - إنشاء متغيرات global بدون تصريح
// - حذف متغيرات محلية
// - تكرار أسماء الـ parameters
// - استخدام كلمات محجوزة كأسماء متغيرات


// ----- 1.1 Implicit Global (بدون strict) -----
// المشكلة: أي متغير بدون var/let/const يبقى global تلقائياً

// function withoutStrict() {
//     implicitGlobal = "I am global!"; // بدون تصريح
//     console.log("داخل الدالة:", implicitGlobal);
// }
// withoutStrict();
// console.log("خارج الدالة:", implicitGlobal); // لسه موجود!


// ----- 1.2 Implicit Global (مع strict) -----
// function withStrict() {
    // "use strict";
//     try {
//         strictImplicit = "test!"; // ReferenceError
//     } catch (error) {
//         console.log("strict mode error:", error.message);
//     }
// }
// withStrict();


// ----- 1.3 delete على متغير محلي -----
// بدون strict → delete يرجع false والمتغير يفضل موجود
// مع strict → يطلع TypeError

// function deleteWithoutStrict() {
//     var localVar = "local value";
//     console.log("delete localVar:", delete localVar); // false
//     console.log("بعد delete:", localVar);            // لسه موجود
// }
// deleteWithoutStrict();

// function deleteWithStrict() {
//     "use strict";
//     var localVar = "Local var";
//     try {
//         delete localVar; // TypeError
//     } catch (error) {
//         console.log("strict mode error:", error.message);
//     }

//     // delete المسموح: خصائص الـ object
//     var obj = { prop: "قيمة" };
//     delete obj.prop;
//     console.log("بعد حذف prop:", obj); // {}
// }
// deleteWithStrict();


// ----- 1.4 Duplicate Parameters -----
// بدون strict → آخر قيمة تفوز
// مع strict → SyntaxError
// "use strict";
// function duplicateParams(a, b, a) {
//     console.log("a:", a); // 3
//     console.log("b:", b); // 2
// }
// duplicateParams(1, 2, 3);

// "use strict";
// function duplicateParamsStrict(a, b, a) { } // SyntaxError


// ----- 1.5 Reserved Words -----
// كلمات زي implements / interface / package محجوزة في strict mode

// var implements = 5; // شغال بدون strict
// console.log(implements);

// "use strict";
// var implements = 5; // SyntaxError



// =====================================================================
// 2) Hoisting
// =====================================================================
// Hoisting = رفع التصريحات لأعلى الـ scope قبل التنفيذ
// var → يتحط undefined
// function declaration → الدالة كلها بتترفع
// let / const → في الـ TDZ (Temporal Dead Zone) لحد سطر التصريح


// ----- 2.1 Variable Hoisting (var) -----
// console.log(myVar); // undefined (مش Error)
// var myVar = 5;
// console.log(myVar); // 5

// نفس الفكرة مع أكتر من متغير:
// console.log(userName); // undefined
// console.log(userAge);  // undefined
// var userName = "Ahmed";
// var userAge = 25;
// console.log(userName); // "Ahmed"
// console.log(userAge);  // 25


// ----- 2.2 Function Declaration Hoisting -----
// تقدر تستدعي الدالة قبل تعريفها

// sayHello(); // "welcome"
// function sayHello() {
//     console.log("welcome");
// }


// ----- 2.3 Function Expression — مش بتتـ hoist كامل -----
// المتغير يتـ hoist كـ undefined، فالاستدعاء يفشل
// var sayGoodbye = undefined


// sayGoodbye(); // TypeError: sayGoodbye is not a function
// var sayGoodbye = function () {
//     console.log("bye");
// };
// var x = 5 ;
// x = 15 ;
// console.log(x);


// ----- 2.4 let / const و الـ TDZ -----
// console.log(myLet);   // ReferenceError (TDZ)
// let myLet = 5 ;
// myLet = 55
// console.log(myLet);


// console.log(myConst); // ReferenceError (TDZ)
// const myConst = 15;
// myConst = 20; // syntax error
// console.log(myConst);


// ----- 2.5 Hoisting جوّا الدالة (shadowing) -----


// var x = 1;
// var y = 3; 

// function testHoist() {
    
    
//     console.log("1",x); 
//     var x = 2;
//     console.log("2",x); 
//     console.log("y = ",y);  
    
// }

// testHoist();
// console.log("3",x);  


// =====================================================================
// 3) var vs let vs const
// =====================================================================


// ---------------------------------------------------------------------
// 3.1 Scope — Function Scope (var) vs Block Scope (let / const)
// ---------------------------------------------------------------------

// ----- var: Function Scope -----
// الـ var جوّا if أو for يفضل متاح في كل الدالة

// function varScopeExample() {


    
    // var functionVar = "في بداية الدالة";

    // if (true) {
        // console.log("داخل if - functionVar:", functionVar); // 
        // console.log("داخل if - anotherVar:", anotherVar); // 
        // var functionVar ; // نفس المتغير!
        // var anotherVar = "متغير جديد جوّا if";

        // console.log("داخل if - functionVar:", functionVar); // 
        // console.log("داخل if - anotherVar:", anotherVar); // 
    // }

    // console.log("خارج if - functionVar:", functionVar); // "اتغيّر جوّا الـ if"
    // console.log("خارج if - anotherVar:", anotherVar);   // متاح! >> yes

    // for (var i = 0; i < 2; i++) {
    //     var loopVar = "متغير في الـ loop";
    //     console.log("i = ",i);
        
    // }
    // console.log("خارج loop - i:", i);           // 2
    // console.log("خارج loop - loopVar:", loopVar); // متاح!
// }
// varScopeExample();




// ----- let / const: Block Scope -----
// المتغير موجود بس جوّا الـ { } اللي اتعرّف فيها

// function blockScopeExample() {
    // let functionLet = "let في بداية الدالة";
    // const functionConst = "const في بداية الدالة";

    // if (true) {
    //     let functionLet = "let جديد جوّا الـ if"; // متغير مختلف (shadowing)
    //     const functionConst = "const جديد جوّا الـ if";
    //     let blockOnlyLet = "موجود في الـ if فقط";

    //     // console.log("داخل if - functionLet:", functionLet);
    //     // console.log("داخل if - functionConst:", functionConst);
    //     // console.log("داخل if - blockOnlyLet:", blockOnlyLet);
    // }

    // console.log("خارج if - functionLet:", functionLet);     // القيمة الأصلية
    // console.log("خارج if - functionConst:", functionConst); // القيمة الأصلية
    // console.log(blockOnlyLet); // ReferenceError

    // for (let j = 0; j < 2; j++) {
    //     const loopConst = "const في الـ loop";
        // console.log("داخل loop - j:", j, "| loopConst:", loopConst);
    // }
    // console.log(j); // ReferenceError — j مش موجود برّا الـ loop
// }
// blockScopeExample();


// ----- مثال سريع: block scope منفصل -----
// {
//     let blockScoped = "I'm inside a block";
//     const constantVar = "I'm constant inside a block";
//     console.log(blockScoped);
//     console.log(constantVar);
// }
// console.log(blockScoped); // ReferenceError


// ---------------------------------------------------------------------
// 3.2 Re-declaration — إعادة التصريح
// ---------------------------------------------------------------------

// ----- var: يسمح بإعادة التصريح -----
// var userName = "أحمد";
// console.log("أول إعلان:", userName);

// var userName = "محمد"; // OK
// console.log("بعد إعادة الإعلان:", userName);

// var userName; // بدون قيمة → القيمة القديمة تفضل
// console.log("بعد إعلان فاضي:", userName); // "محمد"

// var userName = "علي";
// console.log("إعادة إعلان بقيمة جديدة:", userName);


// ----- let: ممنوع إعادة التصريح في نفس الـ scope -----
// let userAge = 25;
// console.log("let userAge:", userAge);
//  let userAge = 30; // SyntaxError
// var userAge = 35; // SyntaxError


// ----- const: ممنوع إعادة التصريح -----
// const PI = 3.14;
// console.log("const PI:", PI);
// const PI = 3.14159; // SyntaxError
// // let PI = 3.14159;   // SyntaxError
// // var PI = 3.14159;   // SyntaxError


// ----- Mixed declarations في نفس الـ scope -----
// var mixedVar = "var first";
// // let mixedVar = "let second"; // SyntaxError: already been declared


// ---------------------------------------------------------------------
// 3.3 Re-assignment — إعادة التعيين
// ---------------------------------------------------------------------

// ----- var: مسموح (حتى تغيير النوع) -----
// var varValue = "القيمة الأولى";
// console.log("var قبل:", varValue);

// varValue = "القيمة الثانية";
// console.log("var بعد:", varValue);

// varValue = 123;
// console.log("var بعد تغيير النوع:", varValue);

// varValue = { name: "كائن" };
// console.log("var بعد تعيين object:", varValue);


// ----- let: مسموح -----
// let letValue = "قيمة let الأولى";
// console.log("let قبل:", letValue);

// letValue = "قيمة let الثانية";
// console.log("let بعد:", letValue);

// letValue = 456;
// console.log("let بعد تغيير النوع:", letValue);

// letValue = [1, 2, 3];
// console.log("let بعد تعيين array:", letValue);


// ----- const: ممنوع إعادة التعيين -----
// const constValue = "قيمة const";
// console.log("const value:", constValue);

// try {
//     constValue = "قيمة جديدة"; // TypeError
// } catch (e) {
//     console.log("خطأ:", e.message);
// }

// const constNumber = 100;
// try {
//     constNumber = 200; // TypeError
// } catch (e) {
//     console.log("خطأ:", e.message);
// }


// ---------------------------------------------------------------------
// 3.4 const مع Objects و Arrays
// ---------------------------------------------------------------------
// مهم: const بيمنع تغيير الـ binding (المرجع)
// مش بيمنع تعديل محتويات الـ object / array

// primitive >> stack


// nonprimitive (reference types) >> 1 ) reference   >> stack         2) value >> heap

// ----- Object -----
// const person = {
//     name: "أحمد",
//     age: 30,
//     city: "القاهرة"
// };
// console.log("قبل:", person);

// person.name = "محمد";          // OK — تعديل خاصية
// person.age = 35;               // OK
// person.email = "m@example.com"; // OK — إضافة خاصية
// delete person.city;            // OK — حذف خاصية
// console.log("بعد التعديلات:", person);

// try {
//       person = { name: "علي" }; // TypeError — إعادة تعيين المرجع
// } catch (e) {
//        console.log("خطأ:", e.message);
// }


// ----- Array -----
// const numbers = [1, 2, 3];
// console.log("قبل:", numbers);

// numbers.push(4, 5); // OK
// numbers[0] = 100;   // OK
// numbers.pop();      // OK
// console.log("بعد التعديلات:", numbers);

// try {
//     numbers = [6, 7, 8]; // TypeError
// } catch (e) {
    
//     console.log("خطأ:", e.message);
// }


// ----- Nested Object -----
// const config = {
//     api: {
//         url: "https://api.example.com",
//         timeout: 5000
//     },
//     features: ["feature1", "feature2"]
// };

// console.log("قبل:", JSON.stringify(config));
// config.api.url = "https://newapi.example.com"; // OK
// config.api.retries = 3;                        // OK
// config.features.push("feature3");              // OK
// console.log("بعد:", JSON.stringify(config));



// ----- for...of مع const -----
// الـ const هنا بيربط عنصر جديد في كل لفة — مش بيعيد تعيين نفس المتغير
// const arr = [1, 2, 3, 4, 5, 6];

// for (const i = 0 ; i<arr.length ; i++){
//     console.log(i , arr[i]);
    
// }

// for (const item of arr) {
//     console.log("item =", item);
// }
// console.log(item); // ReferenceError — item مش موجود برّا الـ loop
// arr.unshift(55);
// console.log("بعد unshift:", arr);


// ---------------------------------------------------------------------
// 3.5 Initialization — التهيئة
// ---------------------------------------------------------------------

// ----- var: التهيئة اختيارية → undefined -----
// var uninitializedVar;
// console.log("var بدون تهيئة:", uninitializedVar); // undefined
// uninitializedVar = "تم التهيئة لاحقاً";
// console.log("var بعد التهيئة:", uninitializedVar);


// ----- let: التهيئة اختيارية → undefined -----
// let uninitializedLet;
// console.log("let بدون تهيئة:", uninitializedLet); // undefined
// uninitializedLet = "تم تهيئة let لاحقاً";
// console.log("let بعد التهيئة:", uninitializedLet);


// ----- const: التهيئة إجبارية -----
// const uninitializedConst; // SyntaxError: Missing initializer
// const initializedConst;
// console.log(initializedConst);


// ---------------------------------------------------------------------
// 3.6 Global Object (window / global)
// ---------------------------------------------------------------------
// في المتصفح: window
// في Node.js: global

// ----- var: بيتضاف للـ Global Object -----
// var globalVar1 = "متغير عام مع var";
// var globalVar2 = 123;
// console.log("globalVar1:", globalVar1);
// console.log("window.globalVar1:", window.globalVar1); // "متغير عام مع var"
// // console.log("global.globalVar1:", global.globalVar1); // في Node.js

// var globalFunction = function () {
//     return "دالة عامة مع var";
// };
// console.log(globalFunction);
// console.log("window.globalFunction:", typeof window.globalFunction); // "function"

// // Function Declaration كمان بتتحط على window
// function fun1() {
//     console.log("test global object with declaration function");
// }
// window.fun1();


// ----- let: مش بيتضاف للـ Global Object -----
// let globalLet1 = "متغير عام مع let";
// let globalLet2 = 456;
// console.log("globalLet1:", globalLet1);
// console.log("window.globalLet1:", window.globalLet1); // undefined

// let globalLetFunction = function () {
//     return "دالة مع let";
// };
// console.log(globalLetFunction());
// console.log("window.globalLetFunction:", typeof window.globalLetFunction); // "undefined"


// ----- const: مش بيتضاف للـ Global Object -----
// const globalConst1 = "متغير عام مع const";
// const globalConst2 = 789;
// console.log("globalConst1:", globalConst1);
// console.log("window.globalConst1:", window.globalConst1); // undefined

// const globalConstFunction = function () {
//     return "دالة مع const";
// };
// console.log(globalConstFunction());
// console.log("window.globalConstFunction:", typeof window.globalConstFunction); // "undefined"


// ---------------------------------------------------------------------
// 3.7 أمثلة عملية — متى تستخدم إيه؟
// ---------------------------------------------------------------------

// ----- const لإعدادات التطبيق -----
// const APP_CONFIG = {
//     name: "MyApp",
//     version: "1.0.0",
//     api: {
//         baseUrl: "https://api.myapp.com",
//         timeout: 30000
//     },
//     features: ["auth", "notifications"]
// };

// console.log("إعدادات:", APP_CONFIG.name, APP_CONFIG.version);
// APP_CONFIG.api.timeout = 60000;       // تعديل محتوى OK
// APP_CONFIG.features.push("dark-mode"); // OK
// console.log(APP_CONFIG);
// // APP_CONFIG = {}; // TypeError


// ----- let لحالة قابلة للتغيير -----
// let currentUser = null;
// let isLoggedIn = false;
// let sessionToken = null;

// currentUser = { id: 1, name: "أحمد" };
// isLoggedIn = true;
// sessionToken = "abc123";
// console.log({ currentUser, isLoggedIn, sessionToken });


// ----- مشكلة var في الـ loops (closures) -----
// كل الـ handlers بتشير لنفس المتغير eventType → آخر قيمة

// const eventHandlers = {};

// try replace let by var
// for (let eventType = 0; eventType < 3; eventType++) {
//     eventHandlers["handler" + eventType] = function () {
//         return "Handler for event: " + eventType;
//     };
// }
// console.log(eventHandlers.handler0()); // "Handler for event: 3" ← غلط!
// console.log(eventHandlers.handler2()); // "Handler for event: 3" ← غلط!


// ----- الحل بـ let -----
// كل لفة ليها نسخة مستقلة من eventType

// const correctHandlers = {};
// for (let eventType = 0; eventType < 3; eventType++) {
//     correctHandlers["handler" + eventType] = function () {
//         return "Handler for event: " + eventType;
//     };
// }
// console.log(correctHandlers.handler0()); // "Handler for event: 0" ✓
// console.log(correctHandlers.handler2()); // "Handler for event: 2" ✓


// ----- مثال: database بسيط (const للبيانات الثابتة المرجع + let للحالة المؤقتة) -----
// const database = {
//     users: [],
//     products: [],
//     orders: []
// };

// let tempData = null;
// let processingStatus = "idle";

// function addUser(userData) {
//     processingStatus = "adding user";
//     tempData = { ...userData, id: Date.now() };

//     database.users.push(tempData);

//     processingStatus = "completed";
//     tempData = null;

//     return database.users[database.users.length - 1];
// }

// console.log("قبل الإضافة:", database);
// addUser({ name: "A", email: "aa@example.com" });
// addUser({ name: "S", email: "ss@example.com" });
// console.log("بعد الإضافة:", database);
// console.log("status:", processingStatus);


// ---------------------------------------------------------------------
// 3.8 مقارنة سريعة: counter بـ var / let / const
// ---------------------------------------------------------------------

// ----- var: Function Scope → الـ if بيكتب فوق الـ counter -----
// var counter = 0;

// function incrementCounter() {
//     counter++;
//     console.log("Counter (var):", counter);
// }
// console.log(incrementCounter); // الـ function declaration اتعمل لها hoist
// incrementCounter(); // 1
// incrementCounter(); // 2

// if (true) {
//     var counter = 10; // نفس المتغير!
// }
// console.log("بعد الـ if:", counter); // 10


// ----- Function Expression مع var -----
// console.log(printFun);   // undefined (hoisted كـ var)
// // console.log(printFun()); // TypeError: printFun is not a function
// var printFun = function () {
//     console.log("ex");
// };
// printFun(); // "ex"


// ----- let: Block Scope → الـ if مش بيأثر على الـ count الخارجي -----
// let count = 0;

// function incrementCount() {
//     count++;
//     console.log("Count (let):", count);
// }
// incrementCount(); // 1
// incrementCount(); // 2

// if (true) {
//     let count = 10; // متغير مختلف جوّا البلوك
//     console.log("داخل البلوك:", count); // 10
// }
// console.log("بعد البلوك:", count); // 2


// ----- const: قيمة ثابتة -----
// const pi = 3.14159;
// console.log("pi:", pi);
// try {
//     pi = 5;
// } catch (error) {
//     console.log("Error:", error.message);
// }


// =====================================================================
// 4) Arrow Functions
// =====================================================================
// صيغة مختصرة للدوال — مفيدة خصوصاً كـ callbacks
// ملاحظة: الـ arrow function ملهاش this خاص بيها (بتاخد this من الـ scope المحيط)


const greet = (name) => `Hello, ${name}!`;  
// console.log(greet("Ali")); // "Hello, Ali!"

// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(5, 3)); // 8

// // أكتر من سطر → لازم { } و return صريح
// const greetFull = (fname, lname) => {
//     console.log(`hello ${fname} ${lname}`);
//     return `hi ${fname} ${lname}`;
// };
// console.log(greetFull("zeyad", "mo"));

// // مقارنة مع function عادية
// function test(name, lname) {
//     return `Hello ${name} ${lname}`;
// }
// console.log(test("Ahmed", "Salem"));


// =====================================================================
// 5) Template Literals
// =====================================================================
// Strings بـ backticks `` تسمح بـ:
// - تضمين متغيرات بـ ${ }
// - نصوص متعددة الأسطر بسهولة

// let firstName = "Ali";
// let lastName = "Hassan";
// let age = 25;

// // الطريقة القديمة
// let fullName = firstName + " " + lastName + ", Age: " + age;
// console.log(fullName);

// // Template Literals
// let modernFullName = ` ${firstName} ${lastName}, Age: ${age}`;
// console.log(modernFullName);


// =====================================================================
// 6) Destructuring
// =====================================================================
// استخراج قيم من objects / arrays في متغيرات بسهولة


// ----- 6.1 Object Destructuring -----
// let person = {
//     name: "Ali",
//     age: 25,
//     job: "Developer",
//     child : {isStudent : true , sister : {name:"sara"}} 
// };
// let copiedPerson = JSON.parse(JSON.stringify(person));
// copiedPerson.child.sister.name = "aya";

// console.log("person" , person);
// console.log("copiedPerson" , copiedPerson);


// // الطريقة القديمة
//  var name = person.name;
//  var age = person.age;
//  let job = person.job;

// // الطريقة الحديثة
// const { name, job, age } = person;
// console.log(name); // "Ali"
// console.log(age);  // 25
// console.log(job);  // "Developer"


// ----- 6.2 Array Destructuring -----
// let colors = ["Red", "Green", "Blue"];
// let [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor);  // "Red"
// console.log(secondColor); // "Green"
// console.log(thirdColor);  // "Blue"


// =====================================================================
// 7) Default Parameters
// =====================================================================
// قيم افتراضية للـ parameters لو مش اتبعتت (أو اتبعت undefined)

// const greetWithMessage = (name = "Guest", greeting = "Hello") =>
//     `${greeting}, ${name}!`;

// console.log(greetWithMessage("Ali", "Hi")); // "Hi, Ali!"
// console.log(greetWithMessage("Sara"));     // "Hello, Sara!"
// console.log(greetWithMessage());           // "Hello, Guest!"


// =====================================================================
// 8) Rest Parameter (...args)
// =====================================================================
// بيجمع باقي الـ arguments في array
// لازم يكون آخر parameter

// const sumAllNumbers = (...numbers) => {
//     console.log("الأرقام:", numbers); // Array
//     return numbers.reduce((acc, num) => acc + num, 0);
// };

// console.log(sumAllNumbers(1, 2, 3, 4, 5)); // 15
// console.log(sumAllNumbers(10, 20, 30));    // 60
// console.log(sumAllNumbers(100));          // 100


// =====================================================================
// 9) Spread Operator (...)
// =====================================================================
// بيعمل "فرد" لعناصر الـ array أو خصائص الـ object





// ----- 9.1 Spread مع Arrays -----

// // فرد عناصر الـ array
// let arr = [1, 2, 4, 5, 6];
// console.log(...arr); // 1 2 4 5 6

// // دمج arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// // نسخ array (shallow copy)
// const originalArray = [10, 20, 30];
// const copiedArray = [...originalArray];
// copiedArray.push(40);
// console.log("copied:", copiedArray);     // [10, 20, 30, 40]
// console.log("original:", originalArray); // [10, 20, 30] — متأثرش


// ----- 9.2 Spread مع Objects -----

// const person = {
//     name: "Ali",
//     email: "eman@example.com",
//     child: {
//         isStudent: true
//     }
// };

// // دمج objects
// const contactInfo = {
//     email: "ali@example.com", // هيعمل overwrite لو المفتاح موجود
//     phone: "123456789"
// };
// const mergedObject = { ...person, ...contactInfo };
// console.log(mergedObject);

// // نسخ object (shallow copy)
// const copiedPerson = { ...person };
// copiedPerson.name = "Ahmed";
// console.log("copy name:", copiedPerson.name); // "Ahmed"
// console.log("original name:", person.name);   // "Ali" — المستوى الأول مستقل

// // تحذير: الـ nested objects مشتركة (shallow)!
// copiedPerson.child.isStudent = false;
// console.log("copy child:", copiedPerson.child.isStudent); // false
// console.log("original child:", person.child.isStudent);   // false — اتأثر!


// ----- 9.3 Spread مع Functions -----
// بيبعت عناصر الـ array كـ arguments منفصلة

// const numbers = [1, 2, 3, 4, 5];

// function sum(a, b, c, d, e) {
//     return a + b + c + d + e;
// }

// const result = sum(...numbers); // زي sum(1, 2, 3, 4, 5)
// console.log(result); // 15


// ----- 9.4 فرد Nested Array (مثال يدوي) -----
// const nestedArray = [1, [2, 3], 4, [5, 6]];
// // ملاحظة: العنصر الأول والثالث أرقام — مش arrays
// // عشان كده بنفرد العناصر اللي هي arrays بس:
// const flattenedArray = [
//     nestedArray[0],
//     ...nestedArray[1],
//     nestedArray[2],
//     ...nestedArray[3]
// ];
// console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
// // أو أسهل:
// // console.log(nestedArray.flat()); // [1, 2, 3, 4, 5, 6]


// =====================================================================
// 10) الذاكرة والنسخ — Reference / Shallow / Deep Copy
// =====================================================================
// Primitives (number, string, boolean...) → نسخ بالقيمة
// Objects / Arrays → نسخ بالمرجع (reference) إلا لو عملت copy صريح


// ----- 10.1 Reference Copy (نفس المكان في الذاكرة) -----
// let person1 = {
//     name: "SSSSSSS",
//     son: {
//         age: 5
//     }
// };

// let person2 = person1; // نفس المرجع!
// person2.name = "Changed";
// console.log("person1:", person1.name); // "Changed" — اتأثر!
// console.log("person2:", person2.name); // "Changed"


// ----- 10.2 Shallow Copy بـ Spread -----
// // المستوى الأول مستقل، الـ nested مشتركة
// let personShallow = { ...person1 };
// personShallow.name = "Shallow";
// personShallow.son.age = 99;
// console.log("person1.name:", person1.name);       // الأصلي (مش اتأثر)
// console.log("person1.son.age:", person1.son.age); // 99 — اتأثر!


// ----- 10.3 Deep Copy بـ JSON -----
// // مناسب لبيانات بسيطة (مش بيتعامل كويس مع Date / undefined / functions / circular)
// let personJson = JSON.parse(JSON.stringify(person1));
// personJson.son.age = 4;
// console.log("person1.son.age:", person1.son.age); // القيمة الأصلية
// console.log("personJson.son.age:", personJson.son.age); // 4


// ----- 10.4 Deep Copy بـ structuredClone -----
// // الطريقة الحديثة والأفضل في أغلب الحالات
// let personClone = structuredClone(person1);
// personClone.son.age = 4;
// console.log("p1:", person1);
// console.log("p3:", personClone); // مستقل تماماً


// ----- 10.5 localStorage + JSON (parse / stringify) -----
// // الـ localStorage بيخزّن strings فقط → لازم نحوّل الـ object

// let objBased = {
//     name: "s",
//     age: 26,
//     city: "cai"
// };

// let objString = JSON.stringify(objBased);
// localStorage.setItem("userdata", objString);
// localStorage.setItem("userdata2", objString);
// console.log(JSON.parse(localStorage.getItem('userdata')) );
// localStorage.clear();

// console.log("نوع المخزّن:", typeof localStorage.getItem("userdata")); // "string"

// let parsed = JSON.parse(localStorage.getItem("userdata"));
// console.log("بعد parse:", typeof parsed, parsed); // "object"

// localStorage.removeItem("userdata");
// // localStorage.clear(); // بيمسح كل حاجة


// =====================================================================
// ملخص سريع: var vs let vs const
// =====================================================================
// |                 | var            | let              | const            |
// |-----------------|----------------|------------------|------------------|
// | Scope           | Function       | Block            | Block            |
// | Hoisting        | نعم (undefined)| TDZ              | TDZ              |
// | Re-declaration  | نعم            | لا               | لا               |
// | Re-assignment   | نعم            | نعم              | لا               |
// | Initialization  | اختياري        | اختياري          | إجباري           |
// | على window      | نعم            | لا               | لا               |
// | استخدمها لـ     | كود قديم       | قيم بتتغير       | قيم/مراجع ثابتة |
