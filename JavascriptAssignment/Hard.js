/*  ANSWER THE QUESTION
=>  1. HARD
    Q1. Get Real Type
*/
let realType = function(anything) {
    if(null == anything)
    {
        return "null";
    }
    else if(typeof(anything) === typeof([]))
    {
        return "array";
    }
    else if(typeof(anything) == typeof(1))
    {
        return "number";
    }
    else if(typeof(anything) === typeof('a'))
    {
        return typeof('a');
    }
    else if(typeof(anything) === typeof(true))
    {
        return typeof(true);
    }
    
}

let result4 = realType(null);
console.log(`${result4}`);

result4 = realType(['abcd']);
console.log(`${result4}`);

result4 = realType(1);
console.log(`${result4}`);

result4 = realType(false);
console.log(`${result4}`);

result4 = realType("a");
console.log(`${result4}`);

