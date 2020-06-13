/*
=>  3. MEDIUM
    Q2. Hitting the Jackpot     
*/
let testJackpot = function(arr) 
{
    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === arr[i-1] && i>=1 && i<=3)
        {
            count++;
        }
        else 
        {
            count=0;
        }
    }
    if(count===3)
    {
        return true;
    }
    else{
        return false;
    }
}
let result3 = testJackpot(['@','@','@','@']);
console.log(result3);

result3 = testJackpot(['abc','abc','abc','abc']);
console.log(result3);

result3 = testJackpot(['&&','&','&&&','&&&&']);
console.log(result3);

result3 = testJackpot(['SS','SS','SS','Ss']);
console.log(result3);

// Q3. Remove the Duplicates
let removeDups = function(array)
{
    let brray=[];
    
    for(let i=0; i<array.length; i++)
    {
        brray.push(array[i]);
        for(let j=i+1; j<array.length; j++)
        {
            if(brray[0] === array[j])
            {
                array.splice(j,1);
            }
        }
        brray.pop();
    }

    return array;        
}
result3 = removeDups([1,0,1,0]);
console.log(result3);

result3 = removeDups([1,2,1,3]);
console.log(result3);

result3 = removeDups(['The','cat','big','cat']);
console.log(result3);

result3 = removeDups(['John',]);
console.log(result3);
