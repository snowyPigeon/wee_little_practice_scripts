/*
# Free Code Camp, JavaScript Algorithms and Data Structures
# 
# Caesars Cipher
#
# One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
# In a shift cipher the meanings of the letters are shifted by some set amount.
#
# A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
# 
# Write a function which takes a ROT13 encoded string as input and returns a decoded string.
# 
# All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
#
*/
const cipher = new Map([
  ["A", "N"],
  ["B", "O"],
  ["C", "P"],
  ["D", "Q"],
  ["E", "R"],
  ["F", "S"],
  ["G", "T"],
  ["H", "U"],
  ["I", "V"],
  ["J", "W"],
  ["K", "X"],
  ["L", "Y"],
  ["M", "Z"],
  ["N", "A"],
  ["O", "B"],
  ["P", "C"],
  ["Q", "D"],
  ["R", "E"],
  ["S", "F"],
  ["T", "G"],
  ["U", "H"],
  ["V", "I"],
  ["W", "J"],
  ["X", "K"],
  ["Y", "L"],
  ["Z", "M"],
]);

function decode(value, index, array) {
  var current = cipher.get(value);
  console.log(array);
  if (current != undefined) {
    console.log(current);
    // replace inputArray[value] with decoded value
    array[index] = current;
    current = "";
  }
}

function rot13(str) {
  const inputArray = str.split("");
  console.log(inputArray);
  inputArray.forEach(decode);
  // convert inputArray back into a string.
  console.log(inputArray);
  str = inputArray.join("");
  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");

/*
# Tests
*/
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
