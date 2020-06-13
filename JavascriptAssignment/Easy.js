/*
=>  2. EASY
    Q1. Count instances of character in a string      
*/  
let charCount = function(firsts, seconds) {
    let count1=0;
    for(let i=0; i<seconds.length; i++)
    {
        if(firsts === seconds[i])
        {
            count1++;
        }
    }
    return count1;
}

let result2 = charCount("a","A cat is beautiful and amAzing");
console.log(`${result2}`);

result2 = charCount("C","Chambers of secrets");
console.log(`${result2}`);

//  Q2. Add up the Numbers from a Single Number

let addUp = function(num) {
    num = num*(num+1)/2;
    return num;
}
result2 = addUp(4);
console.log(`${result2}`);

result2 = addUp(13);
console.log(`${result2}`);

//  Q3. Replace Vowel with Another Character

let replaceVowel = function( name ) {
    let a = name.replace(/a/gi , '1');
    let e = a.replace(/e/gi , '2');
    let i = e.replace(/i/gi , '3');
    let o = i.replace(/o/gi , '4');
    let u = o.replace(/u/gi , '5');
    return u;    
}
result2 = replaceVowel('karachi');
console.log(result2);

result2 = replaceVowel('chembur');
console.log(result2);

result2 = replaceVowel('aeiou uoiea');
console.log(result2);
