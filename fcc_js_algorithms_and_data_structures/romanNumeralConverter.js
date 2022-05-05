/*
# Free Code Camp, JavaScript Algorithms and Data Structures
# 
# Roman Numeral Converter
# 
# Convert the given number into a roman numeral.
#
# All roman numerals answers should be provided in upper-case.
#
# See https://www.mathsisfun.com/roman-numerals.html for the symbols.
*/

const numerals = new Map([
  ["1", "I"],
  ["2", "II"],
  ["3", "III"],
  ["4", "IV"],
  ["5", "V"],
  ["6", "VI"],
  ["7", "VII"],
  ["8", "VIII"],
  ["9", "IX"],
  ["10", "X"],
  ["20", "XX"],
  ["30", "XXX"],
  ["40", "XL"],
  ["50", "L"],
  ["60", "LX"],
  ["70", "LXX"],
  ["80", "LXXX"],
  ["90", "XC"],
  ["100", "C"],
  ["200", "CC"],
  ["300", "CCC"],
  ["400", "CD"],
  ["500", "D"],
  ["600", "DC"],
  ["700", "DCC"],
  ["800", "DCCC"],
  ["900", "CM"],
  ["1000", "M"],
  ["2000", "MM"],
  ["3000", "MMM"]
]);

function convertToRoman(num) {
  //console.log(num);
  let input = num.toString();
  let convertedNum = "";
  // get length of input
  let inputLength = input.length;
  console.log(inputLength);
  // set a counter related to the input length
  let counter = inputLength;
  // check each digit and record its value
  while (counter > 0) {
    switch (counter) {
      case 0:
        break;
      case 4:
        if (input.slice(1) == "000") {
          var ths = numerals.get(input);
          console.log(ths);
          convertedNum += ths;
          counter = 0; // terminate counting
        } else if (input.substring(0, 1) == "0") {
          counter--; // skip to next digit
          input = input.slice(1);
          console.log(input);
        } else {
          var ths = numerals.get(input.substring(0, 1) + "000");
          console.log(ths);
          convertedNum += ths;
          counter--; // move to next digit
          input = input.slice(1);
          console.log(input);
        }
        break;
      // add additional digits
      case 3:
        if (input.slice(1) == "00") {
          var hundred = numerals.get(input);
          convertedNum += hundred;
          counter = 0; // terminate counting
        } else if (input.substring(0, 1) == "0") {
          counter--; // skip to next digit
          input = input.slice(1);
          console.log(input);
        } else {
          var hundred = numerals.get(input.substring(0, 1) + "00");
          console.log(hundred);
          convertedNum += hundred;
          counter--; // move to next digit
          input = input.slice(1);
          console.log(input);
        }
        break;
      case 2:
        if (input.substring(0, 1) == "0") {
          counter--; // skip to last digit
          input = input.slice(1);
          console.log(input);
        } else if (input.slice(1) == "0") {
          var ten = numerals.get(input);
          convertedNum += ten;
          counter = 0; // terminate counting
        } else {
          var ten = numerals.get(input.substring(0, 1) + "0");
          console.log(ten);
          convertedNum += ten;
          counter--; // move to next digit
          input = input.slice(1);
          console.log(input);
        }
        break;
      case 1:
        var digit = numerals.get(input);
        convertedNum += digit;
        counter--; // terminate counting
        break;
    }
  }
  return convertedNum;
}

/*
# Tests
*/
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(30));
console.log(convertToRoman(36));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
