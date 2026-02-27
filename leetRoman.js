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

    let romanArray = [];
    let arabicArray = [];
//index number (eg: 10, 1, 5, length is 3; 3 - 1 is index 2, so lastNum is 5)
// check if s exists in object, use bracket notation and it will look is s is any of the keys; it it does not, it will be undefined
// NEXT: how about if multiple characters like XIV?
// maybe check if it typeof does not equal string instead of undefined
    if ( typeof s !== 'string') {
        console.log('this isn\'t a roman numeral!')
    } else {
// IF THIS IS A ROMAN NUMERAL...


 // corredctly evaluates inidividual roman numerals from object
        // console.log(romanNumerals[s]);

// next, calculate multiple digit roman nums

// from right to left, if value is bigger than character to the left, subtract; if smaller, add.
// need to access character specifically. example: XIV
// how do i target V?

//     const lastChar = s.charAt(s.length - 1);
// console.log(`this is the last character: ${lastChar}`);

// successfully found last character. need to loop to identify all characters, then check if they exist in the object.

for (i = 0; i < s.length; i++) {
    // start at 1, because we want to first find the last character first, which would be length - 1
    // need <= because otherwise, this loop only runs while i is < 3, but on loop 3, i = 3 and is not less than 3 anymore.

    // start with last char
    // let character = s.charAt(s.length - i)

    // start with first char
    let character = s.charAt(i);
    let num = romanNumerals[character];
    console.log(`this is a character: ${character}`);
    console.log(`this is a number: ${num}`);

    romanArray.push(character);
    arabicArray.push(num);

    console.log('this is the array:');
    console.log(romanArray);
    console.log(arabicArray);

    // maybe dont need to use array of characters anymore
    const lastNumeral = romanArray.length - 1; //index number 
    const lastChar = romanArray[lastNumeral];
    console.log(lastChar); //logs V
    console.log(`${lastChar} : ${romanNumerals[lastChar]}`);

    // now i need to fhceck


const lastNumIndex = arabicArray.length - 1; 
    const lastNumber = arabicArray[lastNumIndex];

    // if (romanArray[lastNumeral] > romanArray[lastNumeral - 1]) {
    //     let subtracted = romanArray[lastNumeral] - romanArray[lastNumeral -1];
    //     console.log(subtracted);
    // }

}
 console.log (`second loop has the arabic array: ${arabicArray}`)
    // need to loop through arabic array, backwards? maybe not
    // try to loop forward
   
    for (i = lastNumIndex; i >= 0; i--) {
       
    
        if (arabicArray[i] > arabicArray[i - 1]) {

            console.log(arabicArray[i] - arabicArray[i - 1])

        } else if (arabicArray[i] < arabicArray[i - 1]){

            console.log(arabicArray[i] + arabicArray[i - 1])

        }
    };

// if the string entered has more than one character, follow logic
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