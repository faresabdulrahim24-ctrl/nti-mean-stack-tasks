// ========== 1. Creating a String ==========
// var str1 = "Hello, World!";
// var str2 = "JavaScript is awesome!";
// var str3 = "This is a template string with variable: " + str2;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// ========== 2. Getting the length of a String ==========
// console.log("Length of str1:", str1.length); 
// console.log("Length of str2:", str2.length);

// ========== 3. Accessing String Characters ==========
// console.log("First character of str1:", str1[str1.length - 1]);      
// console.log("Character at index 4 of str2:", str2.charAt(4)); 

// ========== 4. Converting to Lowercase and Uppercase ==========
// console.log("str1 in lowercase:", str1.toLowerCase()); 
// console.log("str2 in uppercase:", str2.toUpperCase()); 

// ========== 5. Finding a substring in a String ==========
// console.log("Index of 'World' in str1:", str1.indexOf("World"));
// console.log("Index of 'Python' in str2:", str2.indexOf("Python")); 

// ========== 6. Extracting a part of the String using slice ==========
// var sliced = str2.slice(5, 15); 
// console.log("Extracted part of str2:", sliced);

// ========== 7. Replacing part of the String ==========
// var replacedStr = str1.replace("World", "Universe");
// console.log("Replaced str1:", replacedStr); 
// console.log(str1);


// ========== 8. Splitting a String into an Array ==========
// var sentence = "I love JavaScript";
// var words = sentence.split(" "); 
// console.log("Words array:", words); 

// ========== 9. Trimming Whitespaces ==========
// var paddedStr = "    Hello, JavaScript!    ";
// console.log("Trimmed String:", paddedStr.trim());     

// ========== 10. Checking if a String starts or ends with a substring ==========
// console.log("Does str1 start with 'Hello'? ", str1.startsWith("Hello")); 
// console.log("Does str2 end with 'awesome'? ", str2.endsWith("awesome!"));

// ========== 11. Repeating a String ==========
// var repeatedStr = "Hi! ".repeat(3);
// console.log("Repeated String:", repeatedStr); 

// ========== 13. Checking if String includes a substring ==========
// console.log("Does str1 include 'World'? ", str1.includes("World"));  
// console.log("Does str2 include 'Python'? ", str2.includes("Python"));  

// ========== 14. Getting the Unicode value of a character ==========
// var char = "ABC";
// console.log("Unicode of 'C':", char.charCodeAt(2));  // Output: 65 (Unicode of "A")

// ========== 15. Joining an Array back into a String ==========
// var wordArray = ["Java", "Script", "is", "fun"];
// var sentenceFromArray = wordArray.join(" ");
// console.log("Sentence from array:", sentenceFromArray);




// ================================ Number Methods ============================

// ========== 1. Converting to a Number (Number(), parseInt(), parseFloat) ==========
// var str = "123.45";
// var num1 = Number(str); 
// console.log(num1); 

// var intStr = "456";
// var num2 = parseInt(intStr);
// console.log(num2); 

// var floatStr = "456.78abc";
// var num3 = parseFloat(floatStr); 
// console.log(num3);  // return 456.78 not NaN because parseFloat can parse until it encounters a non-numeric character

// ========== 2. Checking if a value is NaN (Not a Number) ==========
// var notANumber = "abc";
// console.log(isNaN(notANumber)); 

// var validNumber = "123";
// console.log(typeof validNumber);

// console.log(isNaN(validNumber));  //  check on only value
// console.log(isNaN(NaN));  // true

// ========== 3. Getting the absolute value (Math.abs) ==========
// var negativeNumber = -42;
// console.log(Math.abs(negativeNumber)); 

// ========== 4. Rounding numbers (Math.round, Math.floor, Math.ceil) ==========
// var floatNum = 5.17;

// console.log(Math.round(floatNum));  // 6

// console.log(Math.floor(floatNum));  // 5 
// console.log(Math.ceil(floatNum));   

// ========== 5. Finding the maximum and minimum number (Math.max, Math.min) ==========
// console.log(Math.max(1, 5, 10, -3));   
// console.log(Math.min(1, 5, 10, -3));  

// ========== 6. Generating random numbers (Math.random) ==========
// var randomNum = Math.random();
// console.log(randomNum);  

// var randomInt = Math.floor(Math.random() * 10);
// console.log(randomInt);  
// ========== 7. Calculating the square root (Math.sqrt) ==========
// var number = 16;
// console.log(Math.sqrt(number));  

// ========== 8. Power of a number (Math.pow) ==========
// console.log(Math.pow(2, 3));  

// ========== 9. Rounding numbers to a fixed number of decimals (toFixed) ==========
// var decimalNumber = 5.6789;
// console.log(decimalNumber.toFixed(2)); 

// ========== 10. Checking if the number is an integer (Number.isInteger) ==========
// console.log(Number.isInteger(10));  
// console.log(Number.isInteger(10.5)); 

// ========== 11. Checking if the number is finite (Number.isFinite) ==========
// console.log(Number.isFinite(123));    // true
// console.log(Number.isFinite(Infinity));  // false
// console.log(Number.isFinite(-50));        // true
// console.log(Number.isFinite(10.5));       // true
// console.log(Number.isFinite(NaN));        // false
// console.log(Number.isFinite(-Infinity));  // false
// console.log(Number.isFinite("123"));      // false

// ========== 12. Converting number to string (toString) ==========
// var numToStr = 12345;
// console.log(numToStr.toString());  
// console.log(typeof numToStr.toString());  // Output: "string"

// ================================ Math Methods ============================

// ========== 13. Random number in a range (Math.random with range) ==========
// var minimumNumber = 1;
// var maximumNumber = 10;

// // بيطلع رقم عشوائي من 0 لحد أقل من 1
// var randomNumber = Math.random();

// // بنحوّل الرقم العشوائي لرقم من 1 إلى 10
// var randomInRange =
//   Math.floor(randomNumber * (maximumNumber - minimumNumber + 1))
//   + minimumNumber;

// console.log(randomInRange);

// ========== 15. Generating a random integer between two numbers (custom range) ==========
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(5, 15)); 

// ========== 16. Converting a string to a number (parseInt, parseFloat) ==========
// var strNum = "123.45";
// var intValue = parseInt(strNum);  
// console.log(intValue);  

// var floatValue = parseFloat(strNum);  // Converts string to float
// console.log(floatValue);  

// ========== 17. Using Number.isInteger() to check if a number is an integer ==========
// console.log(Number.isInteger(12));  
// console.log(Number.isInteger(12.34)); 
