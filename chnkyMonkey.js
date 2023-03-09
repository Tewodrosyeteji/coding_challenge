
// method one for loop and maths

const chunkyMonkey=function(array,size){
    let temp=[];
    let result=[];
    for(let i=0;i<array.length;i++){
        if(i%size !== size-1) temp.push(array[i]);
        else{
            temp.push(array[i]);
            result.push(temp);
            temp=[];
        }
    }
    return result;

}

// method two simple slice() and for loop

const chunkyMonkeySlice=function(arra,size){
    let newArray=[];
    for(let i=0;i<arra.length;i += size){
        newArray.push(arra.slice(i,i+size))
    }
    return newArray
}

// method three using splice and while

const chunkyMonkeyWhile=function(array,size){
    let newArray=[];
    while(array.length>0){
        newArray.push(array.splice(0,size))
    }
    return newArray;
}


// method for using slice and contact

const chunkyMonkeyConcat=function(arr,size){
    if(arr.length<=size){
        return [arr]
    }else{
        return [arr.slice(0,size)].concat(chunkyMonkeyConcat(arr.slice(size),size))
    }
}

chunkyMonkeyConcat(['a','b','c','d'],2);