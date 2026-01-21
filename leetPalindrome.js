// Given an integer x, return true if x is a palindrome, and false otherwise.
// eg: 121, -121, 10

// i learned when using typeof, it will always return a string ("number", etc)
// i learned that the quotes in .split('') means split every character in a string into an array
// second part of for loop is condition; loop will run as long this is true
// dont need a nested loop because it will create a grid comparison; you dont need to compare one digit to every digit



// initial attempt: compare character to character
var isPalindrome = function (x) {
    if (typeof x === "number") {
        // num to string
        let xString = x.toString();
        // split up each character of the string and put into an array
        let xArr = xString.split('');
        let lastChar = xArr.length - 1;
        // not correct; try to make condition stop when we reach middle... but how?
        for (let i = 0; i < xArr.length; i++) {
            // some logic
            if (xArr[i] === xArr[lastChar]) {
                // eg: number is 12221
                lastChar = lastChar - i - 1;
            }
            else {
                return false;
            }
        }
    }
    else {
        return "Enter a number instead!"
    }
};

// just compare the reverse of the array since it should be the same backwards bc its a palindrome
var isPalindrome = function (x) {
    if (typeof x === "number") {
        // num to string
        let xString = x.toString();
        // split up each character of the string and put into an array
        console.log('this is a string: ' + xString)
        let reverseString = xString.split('').reverse().join('');
        // found out .reverse() doesn't return a new array, so this is ineffective since original and reversed array will always be the same
        //    array is reversed, no make it a string to compare to original string
        // use .join to turn array back to string; .toString would include the commas; cannot remove them
        console.log('this is the string reversed: ' + reverseString)

        if (xString === reverseString) {
            console.log('palindrome')
            return true
        }
        else {
            console.log('not palindrome')
            return false
        }
    }
    else {
        return "Enter a number instead!"
    }
};

isPalindrome(1221);