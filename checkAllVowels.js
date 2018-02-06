
//Release 0
function checkVowels(str){
    var vowels = ['a', 'i', 'u', 'e', 'o'];
    var strToArr = str.toLowerCase().split('');
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

//Release 1
function arrayGenerator(str){
    var strToArray = str.split(',');
    var result = [];
    for(var i=0; i<strToArray.length; i++){
        var temp = [];
        for(var j=0; j<strToArray[i].length; j++){
            temp.push(strToArray[i][j]);
        }
        console.log(temp);
    }
}

console.log(arrayGenerator('aqrst,ukaei,ffooo'));

console.log(checkVowels('eoaiu'));
console.log(checkVowels('aaIibiuU'));
console.log(checkVowels('ieuooaaji'));
console.log(checkVowels('AIuEO'));