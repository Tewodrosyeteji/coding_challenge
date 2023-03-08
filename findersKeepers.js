
// using for loop


function findElement(arr, func) {
    for(let i=0;i<arr.length;i++){
      if(func(arr[i])){
        return arr[i];
      }
    }}

// using find

const findElementFind=function(arr,fun){
    return arr.find(fun);
}


// using map

const findElementMap=function(arr,fun){
    return arr[arr.map(fun).indexOf(true)]
}
    
// using recursion

const findElementRecrsion=function(arr,fun){
    if(arr.length>0 && !fun(arr[0])){
        return findElementRecrsion(arr.slice(1),fun)
    }else{
        return arr[0];
    }
}
  


console.log(findElementRecrsion([1, 2, 3, 4], num => num % 2 === 0));
  