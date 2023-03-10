//using nested for loop and indexOf and also arguments
// also implement using spread operator and includes

const sortedUnion=function(arr){
   let unionArray=[];
   for(let i=0;i<arguments.length;i++){
    for(let j=0;j<arguments[i].length;j++){
        let indexValue=arguments[i][j];
        if(unionArray.indexOf(indexValue)<0){
            unionArray.push(indexValue);
        }
    }
   }
   return unionArray;
}
// using Set 

const sortedUnionSet=function(...array){
    return [...new Set(array.flat())]
}

// using arguments,flat,filter,indexOf
const sortedUnionFilter=function(){
    return [...arguments].flat().filter((ele,i,arr)=>arr.indexOf(ele)===i);
}
console.log(sortedUnionFilter([1, 3, 2], [5, 2, 1, 4], [2, 1]))