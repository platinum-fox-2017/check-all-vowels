function checkVowel(input) {
  var aa=['a','i','u','e','o'];
  var temp=0;
  var hit=0;
  for(var i=0;i<input.length;i++)
  {
    for(var j=0;j<aa.length;j++)
    {
      if(input[i]!==aa[j])
      {
        temp++;
      }
    }
    if(temp<5)
    {
      hit++;
    }

  }
  if(hit>0)
  {
      return true;
  }
   else
  {
      return false;
  }
}

console.log(checkVowel('fffuuis'));
console.log(checkVowel('aaaiiuu'));
console.log(checkVowel('eeeiiuuu'));
console.log(checkVowel('ddddgguu '));
