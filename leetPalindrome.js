// Given an integer x, return true if x is a palindrome, and false otherwise.
// eg: 121, -121, 10

// i learned when using typeof, it will always return a string ("number", etc)
// i learned that the quotes in .split('') means split every character in a string into an array
// second part of for loop is condition; loop will run as long this is true

var isPalindrome = function (x) {
    if (typeof x === "number") {
        // num to string
        let xString = x.toString();
        // split up each character of the string and put into an array
        let xArr = xString.split('');
        for (let i = 0; i < xArr.length; i++) {
            // target the last digit/char
            let lastChar = xArr.length - 1;
            // start at last index; run as long as j is more than or equal to 0, the first index; decrement by 1
            for (let j = lastChar; j >= 0; j--) {
                if (xArr[i] === xArr[j]) {
                    return x + "is a palindrome!"
                }
            }
        }
    }
    else {
        return "Enter a number instead!"
    }
};