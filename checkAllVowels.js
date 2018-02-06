function cekString(str){
  var bukanVokal = 'bcdfghjklmnpqrstvwxyz123456789'
  for(var i=0; i<str.length; i++){
    for(var j=0; j<bukanVokal.length; j++){
      if(str[i]===bukanVokal[j]){
        return false;
      }
    }
  }
  return true;
}

console.log(cekString('aiuaoe')); //TRUE
console.log(cekString('a3aa1')); //FALSE
console.log(cekString('aaab')); //FALSE
console.log(cekString('aaaAEo')); //TRUE
