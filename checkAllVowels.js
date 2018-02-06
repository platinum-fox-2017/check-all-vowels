function isVowels(str) {
  var vowels = ["a", "i", "u", "e", "o"];

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) === -1) {
      return false;
    }
  }

  return true;
}

function boxedStrings(str) {
  str = str.replace(/,/g, "");
  var arrStr = str.split("");
  var box = [];
  var row = 3;
  var column = 5;
  var count = 0;
  for (var i = 0; i < row; i++) {
    box.push([]);
    for (var j = 0; j < column; j++) {
      box[i].push(arrStr[count]);
      count++;
    }
  }

  return box;
}

// TEST CASE

console.log(isVowels("aiueo")); // true
console.log(isVowels("abcde")); // false
console.log(isVowels("derftg")); // false
console.log(isVowels("eeieei")); // true
console.log(isVowels("ASNASNnn")); // false
console.log(isVowels("EIEIEOUE")); // true
console.log(isVowels("EAoeieiAE")); // true

console.log(boxedStrings("aqrst,ukaei,ffooo"));
