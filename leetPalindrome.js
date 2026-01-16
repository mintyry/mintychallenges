// Given an integer x, return true if x is a palindrome, and false otherwise.
// eg: 121, -121, 10

// i learned when using typeof, it will always return a string ("number", etc)
// i learned that the quotes in .split('') means split every character in a string into an array
// second part of for loop is condition; loop will run as long this is true
// dont need a nested loop because it will create a grid comparison; you dont need to compare one digit to every digit

var isPalindrome = function (x) {
    if (typeof x === "number") {
        // num to string
        let xString = x.toString();
        // split up each character of the string and put into an array
        let xArr = xString.split('');
        let lastChar = xArr.length - 1;
        // not correct; try to make condition stop when we reach middle... but how?
        for (let i = 0; xArr[i] === xArr[lastChar]; i++) {
            // some logic
        }
    }
    else {
        return "Enter a number instead!"
    }
};