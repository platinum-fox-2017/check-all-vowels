const allVowels = (word)=>{
    let kamusVowel = ['a','i','u','e','o', ' ']

    for(let i = 0; i < word.length;i++){
      if(kamusVowel.indexOf(word[i]) === -1){
        return false
      }
    }
    return true
}
