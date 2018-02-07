function checkVowels(str) {
  var vowel = ['a','i','u','e','o'];

  for(let i=0; i<str.length; i++) {
    if(vowel.includes(str[i].toLowerCase()) == false) {
      return false
    }
  }
  return true
}

console.log(checkVowels('aiueo')); //true
console.log(checkVowels('aiuEO')); //true
console.log(checkVowels('aiubo')); //false
console.log(checkVowels('AIUEAIUeaiuebaiuebiauebaiueaib')); //false
console.log(checkVowels('eeeeeeio')); //true
