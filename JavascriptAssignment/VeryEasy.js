/*  ANSWER THE QUESTION
=>  1. VERY EASY
    Q1. Convert Minutes into seconds
*/
let convert = function(min) {
    let sec = min * 60;
    return sec;
}
let result1 = convert(5);
console.log(`${result1} seconds.`);

result1 = convert(3);
console.log(`${result1} seconds.`);

result1 = convert(4);
console.log(`${result1} seconds.`);

//  Q2. Divides Evenly

let DividesEvenly = function(a,b) {
    if(a%b === 0)
    {
        return (true);
    }
    else
    {
        return (false);
    }
}
result1 = DividesEvenly(12,2);
console.log(`${result1}`);

result1 = DividesEvenly(12,5);
console.log(`${result1}`);

