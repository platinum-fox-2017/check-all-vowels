function checkAllVowels(str){
  let tempArray = str.toLowerCase().split("");
  let result = tempArray.reduce((hasil,value) => value|(value!='a'&&value!='i'&&value!='u'&&value!='e'&&value!='o')?false:true)
  return result;
}

function checkAllVowels(str){
  let tempArray = str.toLowerCase().split("");
  for(var i=0;i<tempArray.length;i++){
    if(tempArray[i]!='a'&&tempArray[i]!='i'&&tempArray[i]!='u'&&tempArray[i]!='e'&&tempArray[i]!='o'){
      return false
    }
  }
  return true;
}

console.log(checkAllVowels("aiueo"));
console.log(checkAllVowels("aiueodfetij"));
