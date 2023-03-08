// using loop and indexOf();

const mutationsLoop=function(arr){
    const test=arr[1].toLowerCase();
    const target=arr[0].toLowerCase();
    for(let i=0;i<test.length;i++){
        if(target.indexOf(test[i])<0) return false;
    }
    return true;

}

// using every and indexOf

const mutationsEvery=function(arr){
    return arr[1].toLowerCase().split('').every(letter=>arr[0].toLowerCase().indexOf(letter) !== -1)
}

//using recursion and includes

const mutationsRecursion=function([target,test],i=0){
    target=target.toLowerCase();
    test=test.toLowerCase();
  return  i>=test.length ? true : (!target.includes(test[i])) ? false : mutationsRecursion([target,test], i+1)

}

console.log(mutationsRecursion(["hello", "hey"]))