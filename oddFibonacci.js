const oddFibonacci=function(num){
   let prevNumber=0;
   let currNumber=1;
   let result=0
   while(currNumber<=num){
    if(currNumber % 2 !== 0){
        result +=currNumber;
    }
     currNumber +=prevNumber;
     prevNumber=currNumber - prevNumber;
   }
return result;

}

// using unshift(),filter() and while

const oddFibonacciUnshift=function(num){
    if(num<=0) return 0;
    let arrFib=[1,1];
    let nextFib=0;
    while((nextFib=(arrFib[0]+arrFib[1])) <= num){
           arrFib.unshift(nextFib);
    }
    return arrFib.filter(ele=>ele %2 !== 0).reduce((a,b)=> a+b);
}
const oddFibonacciComThree=function(num){
    let f0=0;
    let f1=1;
    let f2=1;
    let sum=0;
    while(f1<=num){
        sum +=f1;
        if(f2<=num) {
            sum +=f2
        }
        [f0,f1]=[f1+f2,f2+(f1+f2)];
        f2=f0 +f1;
    }
    return sum;
}
oddFibonacciComThree(4);