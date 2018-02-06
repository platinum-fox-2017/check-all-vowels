function checkAllVowels(str) {
    var count = 0;
    var vowels = ['a','i','u','e','o'];
    for(var i=0; i<vowels.length; i++){
        for(var j=0; j<str.length; j++){
            if(vowels[i] == str[j]){
                count++;
                break;
            }
        }
    }
    if(count == 5){
        return true;
    }
    return false;
}
console.log(checkAllVowels('baiufegoh'));
console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('asiuExxo'));
