function checkVowel(str){
  var vowel = [ 'a', 'i', 'u', 'e', 'o' ];
  var mark = 0;
  for (var i = 0; i < str.length; i++) {
    var lowerCaseStr = str[i].toLowerCase();
    for (var j = 0; j < vowel.length; j++) {
      if (lowerCaseStr === vowel[j]) {
        mark += 1;
        if (mark === str.length) {
          return true;
        }
      }
    }
  }
  return false;
}


console.log(checkVowel('test'));  // FALSE
console.log(checkVowel('aiUe'));  // TRUE
console.log(checkVowel('Welp'));  // FALSE
console.log(checkVowel('aaaauAAuueeeooooeEuuaaa')); // TRUE
