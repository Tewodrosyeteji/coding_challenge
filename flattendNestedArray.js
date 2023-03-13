// recursion,Array.isArray()

const flattendNestedArray=function(array){
 let flattendArray=[];
for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
         flattendArray.push(...flattendNestedArray(array[i]));
    }else{
        flattendArray.push(array[i]);
    }
}
return flattendArray;
}

const flattendNestedArraySome=function(array){
 const flat=[].concat(...array);
  return flat.some(Array.isArray)? flattendNestedArraySome(flat):flat;

}



console.log(flattendNestedArraySome([1, [2], [3, [[4]]]]))