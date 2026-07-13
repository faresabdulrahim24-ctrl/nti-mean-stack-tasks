var username = "admin";
var password = "12345678";

if (username == " ") {
    console.log("Username is required");
} else if (password.length < 8) {
    console.log("Password must be at least 8 characters");
} else {
    console.log("username: " + username);
    console.log("password: " + password);
}