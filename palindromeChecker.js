String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

function palindrome(str) {
    // Remove non-alphanumeric characters and set to lowercase
    let temp = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    console.log(temp);
    console.log(temp);
    
    // Split array on middle
    // Check first chunk is equal to reverse of second chunk
    let tempLength = temp.length;
    console.log(tempLength);
    let middle = Math.floor(tempLength / 2);
    console.log(middle);
    console.log(temp[middle]);
    if (tempLength % 2 !== 0) { // odd lengths
        var first = temp.slice(0, middle);
        console.log(first);
        var second = temp.slice(middle+1, tempLength);
        console.log(second);
        if (first == second.reverse()) {
            return true;
        }
    }
    else { // even lengths
        var first = temp.slice(0, middle);
        console.log(first);
        var second = temp.slice(middle, tempLength);
        console.log(second);
        if (first == second.reverse()) {
            return true;
        }
    }
    return false;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("nope"));
  console.log(palindrome("five|\_/|four"));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("strut"));
  console.log(palindrome("boob"));
  console.log(palindrome("bobob"));
  console.log(palindrome("ABBA"));

  /*
  * Instructions
  *
  * Palindrome Checker
  *
  * Return true if the given string is a palindrome. Otherwise, return false.
  *
  * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  *
  * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
  *
  * We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
  *
  * We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
  *
  */