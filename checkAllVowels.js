//SELASA
function cekString(str){
  var bukanVokal = 'bcdfghjklmnpqrstvwxyz123456789`~!@# $%^&*()_-+=\|[{}]";:/?.>,<'
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

console.log('------------------------');
//RABU
function arrDuaDimensi(kata){
  var arr = [];
  for(var i=0; i<3; i++){
    var arrDalam = [];
    for(var i=0; i<kata.length; i++){
      if(kata[i]===','){
        arr.push(arrDalam);
        arrDalam = [];
      } else {
        arrDalam.push(kata[i]);
      }
    }
  }
  arr.push(arrDalam);
  return arr;
}
console.log(arrDuaDimensi('aqrst,ukaei,ffooo'));
