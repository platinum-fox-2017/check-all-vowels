const vowels = (string) => {
    let dictionary_vowels = ['a', 'i', 'u', 'e', 'o']
    for (let i = 0; i < string.length; i++) {
        if (-1 == dictionary_vowels.indexOf(string[i])) {
            return false
        }
    }
    return true
}

console.log(vowels('hello')) //false
console.log('-------');
console.log(vowels('aaaaaa')); //true
console.log(vowels('aiueob')); //false
