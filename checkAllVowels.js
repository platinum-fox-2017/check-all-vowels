function cekVowels(input){
  var vocal = "aiueoAIUEO";

  for(var i=0; i<input.length; i++){
    if(vocal.indexOf(input[i]) === -1){
      return false;
      i -= 1;
    }
  }
  return true;
  //return console.log(input);
}
console.log(cekVowels("aqrst"));
console.log(cekVowels("ukaei"));
console.log(cekVowels("ffooo"));
console.log(cekVowels("aiooau"));
