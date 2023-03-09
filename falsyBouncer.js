// using for loop

const falsyBouncer=function(arr){
    let filtred=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            filtred.push(arr[i])
        }
    }
    return filtred;

}

// using filter()
const falsyBouncerFilter=function(arr){
    return arr.filter(Boolean)
}

falsyBouncerFilter(['ate', null, 0, NaN, undefined, ""])