const vowels = (string) => {
    let dictionary_vowals = ['a', 'i', 'u', 'e', 'o']
    for (let i = 0; i < string.length; i++) {
        let dictionary_vowels
        if (-1 == dictionary_vowels.indexOf(string[i])) {
            return false
        }

    }
    return true
}
// const result = string.filter(word => word.length > 6);

console.log(vowels('hello')) //false
console.log('-------');
console.log(vowels('aaaaaa')); //true
console.log(vowels('aiueob'));
