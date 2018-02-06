function checkVowel(str){
  let vowel = 'AIUEO'
  strArray = str.split('')
  let i = 0
  while(i < str.length ){
    if(vowel.indexOf(str[i].toUpperCase()) === -1){
      return false
    }
    i ++
  }
  return true
}


console.log(checkVowel('aaIuysa'))
console.log(checkVowel('AUIOE'))
