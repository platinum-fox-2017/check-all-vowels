function checkVowels(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var result = true;

	for (var i = 0; i < str.length; i++) {
		if (!str.includes(vowels[i])) return false;
	}
	return result;
}

console.log(checkVowels('aiueo'));
console.log(checkVowels('katak'));