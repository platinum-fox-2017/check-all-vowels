function checkAllVowel(words) {
    let vowels = 'aiueo'
    for(let i = 0; i < words.length; i++) {
        if(vowels.indexOf(words[i]) === -1) {
            return false
        }
    }
    return true
}

console.log(checkAllVowel('aaaasa'))
console.log(checkAllVowel('aaaaa'))