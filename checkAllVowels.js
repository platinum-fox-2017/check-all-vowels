
function checkVowels(str) {
  let dict = 'aiueo'

  for (var i = 0; i < str.length; i++) {
    // console.log(dict.indexOf(str[i]));
    if (dict.indexOf(str[i]) === -1) {
      return false
      i = -1
    }
  }
  return true
}

console.log(checkVowels('aaiauisdae'));
console.log(checkVowels('aiueo'));




// function check(arr) {
//   let firstArr = []
//   for (var i = 0; i < 3; i++) {
//     firstArr.push([])
//   }
//
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (var j = 0; j < 3; j++) {
//       firstArr[j].push[arr[i]]
//     }
//     console.log(firstArr);
//     // console.log(firstArr[arr]);
//   }
// }
//
// console.log(check(['a','q','r','s','t','u','k','a','e','i','f','f','o','o','o']));
