console.log("####### 1 #######");
var name = "fares abdulrahim";
console.log("length of name: " + name.length);

 console.log("####### 2 #######");
var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

console.log("####### 3 #######");
var email = "fares@example.com";
console.log(email.includes("@"));

console.log("####### 4 #######");
var word = "JavaScript";
console.log("First character of word: " + word[0]);
console.log("Last character of word: " + word[word.length - 1]);

console.log("####### 5 #######");
var sentence2 = "I love coding";
var splitSentence = sentence2.split(" ");
console.log("Split sentence into words: ", splitSentence);
console.log("Join words back into a sentence: ", splitSentence.join("-"));

console.log("####### 6 #######");
var text = " nti egypt training ";
var trimmedText = text.trim();
var uppercaseText = trimmedText.toUpperCase();
var replacedText = uppercaseText.replace("EGYPT", "CAIRO");
console.log("Final transformed text: ", replacedText);