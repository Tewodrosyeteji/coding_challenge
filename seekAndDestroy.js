/// method one nested for loop 

const seekAndDestroy=function(arr){
    const removedArray=Object.values(arguments).slice(1);

    const finalRemove=[];

    for(let i=0;i<arr.length;i++){
        let removed=false;
        for(let j=0;j<removedArray.length;j++){
            if(arr[i] === removedArray[j]){
                removed=true;
            }
        }

        if(!removed){
           finalRemove.push(arr[i])
        }
    }
    return finalRemove;
}


/// method two filter and Object.values(argurment)

const seekAndDestroyFilter=function(arr){
    const removedArray=Object.values(arguments).slice(1);
    return arr.filter(value => !removedArray.includes(value))
}

/// method three filter and spread operators

const seekAndDestroySpread=function(arr,...removedArray){
    return arr.filter(value => !removedArray.includes(value))
}
seekAndDestroySpread([1,2,3,1,2,3],2,3);

