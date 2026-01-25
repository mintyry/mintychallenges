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
        let midpoint = (xArr.length) / 2;
        // not correct; try to make condition stop when we reach middle... but how?
        for (let i = 0; i < midpoint; i++) {
            // some logic
            if (xArr[i] === xArr[lastChar]) {
                // eg: number is 12221
                // update lastChar and keep looping to check if xArr[i] === xArr[updated lastChar]
                lastChar = lastChar - 1;
            }
            else {
                return false;
            }

        }
        // only returns true if loop completes
        return true;
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

// do this without converting to a string

var isPalindrome = function (x) {
    if (typeof x === "number") {
        if (x < 0) {
            return false
        } else {
            let arr = [];
            do {
                // pretend x = 19991
                arr.push(x % 10);
                // modulo would be 1
                // how to compare 1 to 1999? remove the 1. how? use math.floor
                // 12/10 = 1.2 math.floor = 1
                x = Math.floor(x / 10);
                // x is now 1999
                // at this point, the array will be filled with each digit of the number backwards, then we can check the array with a for loop
            } while (x > 0);
            let lastChar = arr.length - 1;
            let midpoint = arr.length / 2;
            for (let i = 0; i < midpoint; i++) {
                if (arr[i] === lastChar) {
                    lastChar--;
                } else {
                    return false;
                }
            }
            return true;
        }
    }
    else {
        return "Enter a number instead!"
    }
};