let timeOfDay = "afternoon"; 

let greeting = 
    timeOfDay === "morning"   ? "Good morning!" :   
    timeOfDay === "afternoon" ? "Good afternoon!" : 
    timeOfDay === "night"     ? "Good night!" :    
    "Hello!";                                       
console.log(greeting);