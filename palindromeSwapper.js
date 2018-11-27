/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  debugger
  
  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    if(isPalindrome(str)) return true;
    else{
    for (var j = 0; j < str.length; j++) {
      //console.log(i,j)
      if (i === j ) {
        if(str[j+1]!=undefined){
        newStr += str[j+1];
        }
        newStr += str[j];
        //console.log(newStr,'inFor')
        j++;
      
      } else {
        newStr += str[j];
        //console.log(newStr,'inForElse')
      }
    }
    console.log(newStr)
    if (isPalindrome(newStr)) return true;
    }
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
