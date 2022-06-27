// Write your code in this file!

// Test 1: create variable defined as currentUser
let currentUser = "Andrianna Odell";

// Test 2: create variable welcomeMessage
// Test 3: welcomeMessage concats currentUser into the value
// Test 4: welcomeMessage value ends with an exclamation point
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Test 5: create variable named excitedWelcomeMessage
// value contains "WELCOME TO FLATBOOK, "
// Test 6: excitedWelcomeMessage contains the value of currentUser
// Test 7: excitedWelcomeMessage variable ends with an exclamation point
let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";

// Test 8: create variable named shortGreeting
// Test 9: shortGreeting contains the first initial of the name stored in the currentUser variable
// Test 10: shortGreeting ends with an exclamation point
let shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;