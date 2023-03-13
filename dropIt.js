// using while and shift

const dropIt=function(arr,func){
       while(arr.length && !func(arr[0])){
        arr.shift();
        console.log(arr);
       }
       return arr;
}


// using findIndes and conditional 

const dropItFindIndex=function(arr,func){
    let sliceIndex=arr.findIndex(func);
    return arr.slice(sliceIndex>=0?sliceIndex:arr.length)

}
console.log(dropItFindIndex([1, 2, 3], function(n) {return n < 3; }))