// //Release 0

let check_for_vowels = (input) => {
    input = input.toLowerCase();
    word_length =0;
    for(let i=0; i<input.length; i++){
        if(input[i] === 'a') word_length += 1;
        if(input[i] === 'e') word_length += 1;
        if(input[i] === 'i') word_length += 1;
        if(input[i] === 'o') word_length += 1;
        if(input[i] === 'u') word_length += 1;
    }
    return word_length === input.length;
}

inputA = 'abcdefghijklmnop';
inputB = 'aaaaaaaeeeeiioou';
inputC = 'aaAAAAEEEEEEEIII';
inputD = 'aaaaaaa111111111';

console.log(check_for_vowels(inputA));
console.log(check_for_vowels(inputB));
console.log(check_for_vowels(inputC));
console.log(check_for_vowels(inputD));

//Release 1

let make_array = (string) => {
    string = (string +',').split('');
    let outside =[];
    let inside =[];
    for(let i=0; i<string.length; i++){
        if(string[i] !== ','){
            inside.push(string[i]);
        } else {
            outside.push(inside);
            inside =[];
        }
    }
    console.log(outside);
}

string1 = 'aqrst,ukaei,ffooo';

console.log(make_array(string1));


