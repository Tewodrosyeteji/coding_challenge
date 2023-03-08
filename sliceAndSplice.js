
// method one using for loop
const sliceAndSpliceLoop=function(arr1,arr2,n){

    const newArra2=arr2.slice();
    for(let i=0;i<arr1.length;i++){
        newArra2.splice(n,0,arr1[i])
        n++;
    }
    return newArra2;
}
// using spread operator
const sliceAndSpliceSpread=function(arr1,arr2,n){
    const newArray2=arr2.slice();
        newArray2.splice(n,0,...arr1)
    return newArray2;
}


const sliceAndSpliceSpread2=function(arr1,arr2,n){
    return [...arr2.slice(0,n),...arr1,...arr2.slice(n)]
}



console.log(sliceAndSpliceSpread2([1, 2, 3], [4, 5, 6], 1))