'use strict'

function checkAllVowel(string) {
    let vowel = ['a', 'i', 'u', 'e', 'o',' '];
    for (let str of string) {
        if (vowel.indexOf(str.toLowerCase()) === -1) {
            return false
            // debugger
        }
    }
    return true;
}

console.log(checkAllVowel('o e u i a'))
console.log(checkAllVowel('kevin'))
console.log(checkAllVowel('gu st Av'))
console.log(checkAllVowel('uUe Ai aA'))
