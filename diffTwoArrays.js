 // using for loop and indexOf

const diffTwoArrays=function(arr1,arr2){
    const newArray=[];
    const different=function(first,second){
        for(let i=0;i<first.length;i++){
            if(second.indexOf(first[i]) === -1){
               newArray.push(first[i]);
            }
        }
    }
       different(arr1,arr2);
       different(arr2,arr1);
       return newArray;
}

// using filter and concat
const diffTwoArraysConcat=function(arr1,arr2){
    return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element))
}


// using Set

const diffTwoArraysSet=function(arr1,arr2){
    const difference=new Set(arr1);
    arr2.forEach(element => difference.has(element)? difference.delete(element):difference.add(element))
return Array.from(difference);
}



console.log(diffTwoArraysSet([1, 2, 3, 5], [1, 2, 3, 4, 5]))