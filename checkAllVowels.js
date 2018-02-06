function checkVowels(str){
    var vowels = ['a', 'i', 'u', 'e', 'o'];
    var strToArr = str.toLowerCase().split('');
    //console.log(strToArr);
    var isVowels = 0;

    for(var i=0; i<str.length; i++){
        for(var j=0; j<=vowels.length; j++){
            if(strToArr[i]==vowels[j]){
                isVowels += 1;
            }
        }
    }
    
    if(isVowels !== str.length){
        return false;
    }
    return true;
}

console.log(checkVowels('eoaiu'));
console.log(checkVowels('aaIibiuU'));
console.log(checkVowels('ieuooaaji'));
console.log(checkVowels('AIuEO'));