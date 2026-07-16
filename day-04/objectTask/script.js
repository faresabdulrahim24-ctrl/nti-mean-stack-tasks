console.log("####### 1 #######");
var car = {
    brand: "BMW",
    model: "G6",
    year: "2026",
    color: "red"
}
console.log(car);

console.log("####### 2 #######");
console.log("barnd by dot: ", car.brand);
console.log("year by bracket: ", car["year"]);

console.log("####### 3 #######");
car.color = "black";
car.price = 30000000;
console.log("car after changes: ", car);

console.log("####### 4 #######");
delete car.year;
console.log(car.year); // output is undefined bec. year key is not exist (deleted)
 
console.log("####### 5 #######");
var student = {
    "student-name": "sara",
    age: 20,
}
console.log(student["student-name"]);

console.log("####### 6 #######");
var book = {
    title: "avengers",
    name :{
        firstName: "stann",
        lastName:"lee"
    }
}
console.log(book.name.lastName)

console.log("####### 7 #######");
var person = {
    name: "ali",
    age: "25",
    city:"Cairo"
}
console.log("keys: ", Object.keys(person));
console.log("values: ", Object.values(person));
console.log(Object.hasOwnProperty(person, "job"));

console.log("####### 8 #######");
var setting = {
    theme: "dark",
    lang: "en"
}
console.log("object before freeze: ", setting);
Object.freeze(setting);
setting.theme = "light";
setting.fontSize = 16;
console.log("object after freeze: ", setting); //obj dosen't change bec. it is freezed

