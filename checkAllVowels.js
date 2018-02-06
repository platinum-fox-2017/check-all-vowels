function checkVowels(str) {
  var vowel = ['a','i','u','e','o'];
  var lowerCaseStr = str.toLowerCase();
  var result = true

  for(var i=0; i<lowerCaseStr.length; i++) {
    for(var j=0; j<vowel.length; j++) {
      if(lowerCaseStr[i] == vowel[j]) {
        // console.log(j);
        break;
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
console.log(checkVowels('eeeeeeio')); //false
