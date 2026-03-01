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



var romanToInt = function (s) {
      const romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

    let arabicArray = [];
// maybe check if it typeof does not equal string instead of undefined
    if ( typeof s !== 'string') {
        console.log('this isn\'t a roman numeral!')
    } else {
// IF THIS IS A ROMAN NUMERAL...

for (i = 0; i < s.length; i++) {
    // let character = s.charAt(s.length - i)
    // successfully found last character. need to loop to identify all characters, then check if they exist in the object.

    // start with first char
    let character = s.charAt(i);
    let num = romanNumerals[character];
    console.log(`this is a character: ${character}`);
    console.log(`this is a number: ${num}`);

    // romanArray.push(character);
    arabicArray.push(num);

    console.log('this is the array: ' + arabicArray);
}
    const lastNumIndex = arabicArray.length - 1; 
    let finalAnswer =  arabicArray[lastNumIndex];

    for (i = lastNumIndex - 1; i >= 0; i--) {
        if (arabicArray[i] >= arabicArray[i + 1]) {
        finalAnswer += arabicArray[i];
        } else {
            finalAnswer -= arabicArray[i];
        }
    };
console.log(finalAnswer);
return finalAnswer;
    }
};

romanToInt('XIV');





//other code
  // will turn array key,value pairs into object
        //   const romanNumerals = [
        //     ['I', 1],
        //     ['V', 5],
        //     ['X', 10],
        //     ['L', 50],
        //     ['C', 100],
        //     ['D', 500],
        //     ['M', 1000]
        //   ]

        // const romanObj = Object.fromEntries(romanNumerals);
        // romanObj['X'];
// fromEntries() turns an array of [key, value] pairs back into an object.
// entries() turns an object into an array of key, value pairs

    // if (!romanNumerals.includes(s)) {
    //     console.log('That\'s not a Roman numeral!');
    //     return 'That\'s not a Roman numeral!';
    // } else {
    //     // let I = romanNum[0];
    //     // let V = romanNum[1];
    //     // let X = romanNum[2];
    //     // let L = romanNum[3];
    //     // let C = romanNum[4];
    //     // let D = romanNum[5];
    //     // let M = romanNum[6];

    //     // console.log(I);


        
    //     console.log(romanNumerals.I);
    //     // maybe map through the array and assign number instead

    //     // make array of actual numbers and assign to roman array

    //     // if s === I then s = 1

    //     // maybe create an object
        
    // }