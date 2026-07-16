var users = [
  { name: "Ali", city: "CAI" },
  { name: "Sara", city: "GZA" },
  { name: "Mona", city: "CAI" }
];

var byCity = users.reduce(function (acc, u) {
  acc[u.city] = acc[u.city] || [];  
  acc[u.city].push(u);
  return acc;
}, {});
console.log("by using reduce: ", byCity);

console.log("#######################");

var categrieCountries = {};
for (let u of users) {
    categrieCountries[u.city] = categrieCountries[u.city] || [];
    categrieCountries[u.city].push(u);
}
console.log("without using reduce: ", categrieCountries)