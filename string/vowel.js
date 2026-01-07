let str=prompt("enter the string");
console.log(str);
let countvowel=0;
let countconsonant=0;
let vowel=['a','e','i','o','u','A','E','I','O','U'];
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(vowel.includes(ch)){
        countvowel++;
    }
    else{
        countconsonant++;
    }
}
console.log("vowel count is",countvowel);
console.log("consonant count is",countconsonant);
