function checkVowel(input) {
  var hurufVokal=['a','i','u','e','o'];
  var temp=0;
  var hit=0;
  for(var i=0;i<input.length;i++)
  {

    for(var j=0;j<hurufVokal.length;j++)
    {
        if(hurufVokal.indexOf(input[i])===-1)
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
