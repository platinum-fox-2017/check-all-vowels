// function checkAllVowels(kata){
//   let kamus = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
//   for(let i=0;i<kata.length;i++){
//     for(let j=0;j<kamus.length;j++){
//       if(kata[i]===kamus[j]){
//         return false
//       }
//     }
//   }
//   return true
// }


function checkAllVowels(kata){
  let kamus = 'a i u e o'
  for(let i=0;i<kata.length;i++){
    if(kamus.indexOf(kata[i])==-1){
      return false
    }
  }
  return true
}
console.log(checkAllVowels('aaaaa'))
console.log(checkAllVowels('agrha'))
console.log(checkAllVowels('aiueod'))
