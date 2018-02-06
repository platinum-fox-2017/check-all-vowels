function checkAllVowels(input){
   input = input.toLowerCase();
   var vocal = ['a','i','u','e','o'];
   var isVocal = true;
   i = 0;
   while(isVocal){
      var cekVokal = vocal.indexOf(input[i]);
      debugger
      if(cekVokal < 0){
         return false
      }
      if(i === input.length - 1){
        isVocal = false;
        return true;
      }
      debugger
      i++
   }
    
}

console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('anbiueo'));
console.log(checkAllVowels('Anbiueo'));
