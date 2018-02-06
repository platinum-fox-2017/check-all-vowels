const checkVowel = str =>{
    const strlowercase = str.toLowerCase()
    const vowel = ' aiueo'
    for(let i = 0; i< strlowercase.length; i++){
        let indexVowel = vowel.indexOf(strlowercase[i])
        if(indexVowel === -1){
            return false
        }
    }
    return true
}
console.log(checkVowel('aiO eo'))
console.log(checkVowel('aiobEo'))
