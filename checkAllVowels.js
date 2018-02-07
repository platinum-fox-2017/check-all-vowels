function checkAllVowels(arr) {
    for(var i in arr) {
        if(vowelChecker(arr[i])) console.log(true);
        else console.log(false);
    }
}

function vowelChecker(str) {
    var vowel='aiueo';
    for(var i=0; i<str.length; i++) {
        if(vowel.indexOf(str[i].toLowerCase())===-1) return false;
    }
    return true;
}

var arr=['aqrst','ukaei','ffooo','aiAAueo']
checkAllVowels(arr)