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

var romanToInt = function (s) {
    let romanNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    if (!romanNum.includes(s)) {
        console.log('That\'s not a Roman numeral!');
        return 'That\'s not a Roman numeral!';
    } else {
        let I = romanNum[0];
        let V = romanNum[1];
        let X = romanNum[2];
        let L = romanNum[3];
        let C = romanNum[4];
        let D = romanNum[5];
        let M = romanNum[6];

        console.log(I);
        // maybe map through the array and assign number instead

        // make array of actual numbers and assign to roman array

        // if s === I then s = 1
        
    }
};

romanToInt('V');