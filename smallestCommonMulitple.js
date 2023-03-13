// using looping 

const smallestCommonMultiple=function(arr){
const[min,max]=arr.sort((a,b)=> a-b);
const numberDivisors=(max-min)+1;
let upperBound=1;
for(let i=min;i<=max;i++){
    upperBound *=i;
}

for(let multiple=max;multiple<=upperBound;multiple +=max){
    let divisorCount=0
    for(let i=min;i<=max;i++){
        if(multiple % i ===0){
            divisorCount++;
        }
    }

    if(divisorCount === numberDivisors){
        return multiple;
    }
}


}

// using loop,reduce,every

const smallestCommonMultipleEvery=function(arr){
    const[min,max]=arr.sort((a,b)=> a-b);
    const range=Array((max-min) + 1).fill(0).map((_,i)=> i+min);
    const upperBound=range.reduce((product,current)=> product*current);
    for(let multiple=max;multiple<=upperBound;multiple +=max){
        const divisor=range.every(element=> multiple%element ===0);
        if(divisor){
            return multiple;
        }
    }
}



console.log(smallestCommonMultipleEvery([1,5]));