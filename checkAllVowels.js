const checkAllVowels = string=>{
    let strToLower = string.toLowerCase();
    let vocal = 'aiueo';
    for (let i = 0; i<string.length; i++){
        if(vocal.indexOf(strToLower[i]) === -1){
            return false
        }
    }
    return true
}

console.log(checkAllVowels('AIUoe'))
console.log(checkAllVowels('AAAAAa'))
console.log(checkAllVowels('AlUBCoe'))
console.log(checkAllVowels('xUCCoe'))