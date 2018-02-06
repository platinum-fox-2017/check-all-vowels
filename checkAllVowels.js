function checkVowels(str) {
    var jlhKarakter = str.length;
    var counterVowel = 0;
    for(var i = 0; i < str.length; i++) {
        var observe = str[i].toLowerCase();
        if (observe == 'a' || observe == 'i' || observe == 'u' || observe == 'e' || observe == 'o') {
            counterVowel = counterVowel + 1;
        }
    }

    if (counterVowel == jlhKarakter) {
        return true;
    } else {
        return false;
    }
}

console.log(checkVowels('aiueo'));
console.log(checkVowels('aaaaa'));
console.log(checkVowels('abiueo'));