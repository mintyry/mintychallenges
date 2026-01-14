// Given an integer x, return true if x is a palindrome, and false otherwise.
// eg: 121, -121, 10

// i learned when using typeof, it will always return a string ("number", etc)
// i learned that the quotes in .split('') means split every character in a string into an array

var isPalindrome = function(x) {
        if (typeof x === "number") {
            // enter logic
            let xString = x.toString();
            let xArr = xString.split('');
        }
        else {
            return "Enter a number instead!"
        }
};