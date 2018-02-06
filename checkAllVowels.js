function checkVowels(str) {
  var vowel = ['a','i','u','e','o'];
  var lowerCaseStr = str.toLowerCase();
  var result = true

  for(var i=0; i<lowerCaseStr.length; i++) {
    var vowelTest = true
    for(var j=0; j<vowel.length; j++) {
      if(vowelTest) {
        if(lowerCaseStr[i] == vowel[j]) {
        }
      }
      if(j == vowel.length-1) {
        result = false
      }
    }
  }
  return result
}

console.log(checkVowels('aiueo')); //true
console.log(checkVowels('aiuEO')); //true
console.log(checkVowels('aiubo')); //false
console.log(checkVowels('AIUEAIUeaiuebaiuebiauebaiueaib')); //false
console.log(checkVowels('eeeeeeio')); //true
