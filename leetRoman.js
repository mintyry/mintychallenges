/**
 * @param {string} s
 * @return {number}
 */

// constraints
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// use .map 
// Problem is simpler to solve by working the string from back to front and using a map.

//learned:
// if (Array.isArray(value)) {
//   console.log("It's an array");
// } 
// else if (typeof value === "string") {
//   console.log("It's a string");
// }
// else if (typeof value === "number") {
//   console.log("It's a number");
// }
// else if (typeof value === "boolean") {
//   console.log("It's a boolean");
// }

// charAt checks value of index in a string
// fromEntries() turns an array of [key, value] pairs back into an object.
// entries() turns an object into an array of key, value pairs
// try establishing a baseline first to add to the finalAnswer

// you can deconstruct a string into an array
//.every() method like map, but for checks, returns boolean; .map() transforms

// regarding finalAnswer: So instead of trying to compute everything from zero, you can ask: “What value is definitely correct no matter what? -- WHAT IS GUANRATEED?” The last numeral will always be added, so start with that.



var romanToInt = function (s) {
    // establish key value pairs for roman numeral
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    // make array to eventually add numeric values into
    let arabicArray = [];
    // make sure we are even receiving a roman numeral
    // ...s deconstructs the string eg: X, I, V into an array
    //.every() executes a function for each element in an array
    // the function here is checking if character exists in romanNumerals
    if ([...s].every(char => char in romanNumerals)) {

        // IF THIS IS A ROMAN NUMERAL...

        // loop through the string
        for (i = 0; i < s.length; i++) {

            // find each character of the string, starting with the first one
            let character = s.charAt(i);
            // find the character in the romanNumerals object and find its numeric value
            let num = romanNumerals[character];
            // console.log(`this is a character: ${character}`);
            // console.log(`this is a number: ${num}`);

            // add number to the array (push adds to the end of array)
            arabicArray.push(num);
            //  console.log('this is the array: ' + arabicArray);
        }
        // this is the index of the last number
        const lastNumIndex = arabicArray.length - 1;
        // establish baseline value, which will be the last number in the array (eg: XIV, lastNumIndex is 2, 5 is the value at index 2)
        // from here, we will add or subtract from this value
        let finalAnswer = arabicArray[lastNumIndex];
        // start by checking second to last index, keep running until the first index, go backwards with i--
        for (i = lastNumIndex - 1; i >= 0; i--) {
            // if the current index value is greater or equal to the value of the index after it, add this value to finalAnswer
            if (arabicArray[i] >= arabicArray[i + 1]) {
                finalAnswer += arabicArray[i];
            } else {
                // if current index is less than the value to its right, subtract from the finalAnswer
                finalAnswer -= arabicArray[i];
            }
        };
        console.log(finalAnswer);
        return finalAnswer;
    } else {
         console.log('this isn\'t a roman numeral!')
    }
};

romanToInt('XIV');