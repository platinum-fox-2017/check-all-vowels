
function checkVowels(str) {

    var vowels = ['a', 'i', 'u', 'e', 'o'];
    var vowelsPoint = 0;
    var strSplit = str.split('');
    // console.log(strSplit.length); //['a','b','c','d','e'] // 5

    for (var j = 0; j < vowels.length; j++) {
        for (var i = 0; i < strSplit.length; i++) {
            if (strSplit[i] == vowels[j]) {
                vowelsPoint += 1;
                debugger
                break;
            }
            
        }
    }
        

    if (vowelsPoint < strSplit.length) {
        return false;
    } else {
        return true;
    }

    /*
    a vs a : true,next
    b vs a : false, next
    b vs i : false, next
    b vs u : false, next
    b vs e : false, next
    b vs o : false, END: false

    */


}


console.log(checkVowels('abcde'));