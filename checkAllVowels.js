const lib = ' aiueo'

//Release 0
function checkVowels(str) {
  for (let i = 0; i < str.length; i++) {
    if(lib.indexOf(str[i]) === -1) {
      return false
    }
  }
  return true
}

console.log(checkVowels('aaaaa'));
console.log(checkVowels('ababa'));


//Release 1
function insertIntoArray(str, row) {
  let arr = str.split(',')
  let result = []
  for (let i = 0; i < row; i++) {
    result.push([])
    for (let j = 0; j < arr[i].length; j++) {
      result[i].push(arr[i][j])
    }
  }
  return result
}

let input = 'aqrst,ukaei,ffooo'
console.log(insertIntoArray(input, 3))
