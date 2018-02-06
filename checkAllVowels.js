function isVowels(str) {
  var vowels = ["a", "i", "u", "e", "o"];

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) === -1) {
      return false;
    }
  }

  return true;
}

// TEST CASE

console.log(isVowels("aiueo")); // true
console.log(isVowels("abcde")); // false
console.log(isVowels("derftg")); // false
console.log(isVowels("eeieei")); // true
console.log(isVowels("ASNASNnn")); // false
console.log(isVowels("EIEIEOUE")); // true
console.log(isVowels("EAoeieiAE")); // true
