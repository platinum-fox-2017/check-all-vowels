function checkVowels(kata){
    var count = 0;
    for (i = 0; i < kata.length; i++){
        lower = kata[i].toLowerCase();
        if (lower == 'a' || lower == 'i' || lower == 'u' || lower == 'e' || lower == 'o'){
            count++;
        }
    }
    return (kata.length == count)?  true : false;
}

console.log(checkVowels('aAIueo')) // true
console.log(checkVowels('aAIuexo')) // false
