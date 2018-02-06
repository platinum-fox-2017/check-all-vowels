function vowel(str){
  var strkecil=str.toLowerCase();
  var key='aiueo'
  for(let i=0;i<str.length;i++){
    if(key.includes(strkecil[i])===false){
      return false
    }
  }
  return true
}

console.log(vowel('aiuuuuuueo'))
