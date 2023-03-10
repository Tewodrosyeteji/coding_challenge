const sumAllNumberRange=function(array){
    const maxNum=Math.max(...array);
    const minNum=Math.min(...array);
    let sum=0;
    for(let i=minNum;i<=maxNum;i++){
           sum +=i;
    }
    return sum;
}


const sumAllNumberRangeArithimatic=function(array){
    const startNum=array[0];
    const endNum=array[1];
    const countNum= Math.abs(startNum-endNum) + 1;
    const sum=((startNum + endNum) * countNum)/2;
    return sum;
}

const sumAllNumberRangeRecursion=function(array){
 const [first,last]=array.sort((a,b)=> a-b);
 return first !==last? first + sumAllNumberRangeRecursion([first +1, last]):first;
}
sumAllNumberRangeRecursion([4,1]);