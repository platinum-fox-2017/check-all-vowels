const allVowels = (word)=>{
  let kamusVowel = ['a','i','u','e','o', ' ']

  let newWords = word.toLowerCase()

  // for(let i of newWords){
  //   if(kamusVowel.indexOf(i) === -1){
  //     return false
  //   }
  // }

  for(let i in newWords){
    if(kamusVowel.indexOf(newWords[i]) === -1){
      return false
    }
  }
  return true
}

console.log(allVowels('aaa'))
console.log(allVowels('AiuEo'))