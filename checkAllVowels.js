function checkAllVowels(words){
  const vowels = ['a', 'i', 'u', 'e', 'o'];

  for(let i=0; i<words.length; i++){
    // console.log(`vowels ${vowels.indexOf(words[i])}`);
    if(vowels.indexOf(words[i]) === -1){
      return false
    }
  }
  return true
}

console.log(checkAllVowels('qwerty'));
console.log(checkAllVowels('aiueo'));
