// method one using loop  

const factorializeLoop=function(num){
    let product=1;
    for(let i=2;i<=num;i++){
        product *=i
    }
    return product;
}

factorializeLoop(5);

// method two using recusion

const factorializeRecursion=function(num){
return (num <=0) ? 1:num*factorializeRecursion(num-1);
}

factorializeRecursion(5);

// method three  using tail recursion

const factorialzeTailRecursion=function(num,factorial=1){
    return num === 0 ? factorial:factorialzeTailRecursion(num-1,factorial * num);
}
factorialzeTailRecursion(5);

/// method four using reduce()

const factorializeReduce=function(num){
    if(num<0){
        return 1;
    }else{
        return new Array(num).fill(undefined).reduce((product,_,index)=> product *(index+1),1)
    }
}

factorializeReduce(5);




