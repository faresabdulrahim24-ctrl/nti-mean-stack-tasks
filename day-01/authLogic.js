let hasAccount = false;
let isVerified = false;

if (hasAccount && isVerified) {
    console.log("Welcome back!");
} else if (hasAccount && !isVerified) {
    console.log("Please verify your account.");
} else {
    console.log("Please sign up.");
}