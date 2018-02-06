function twoDimensionArray(string) {
     let splitString = string.split(',')
     let result = []
     for (let i = 0; i < splitString.length; i++) {
        result.push(splitString[i].split(''))
     }
     return result
}

console.log(twoDimensionArray('aqrst,ukaei,ffooo'))