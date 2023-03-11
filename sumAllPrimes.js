const sumAllPrimes=function(num){

    const isPrime=function(num){
       const sqr=Math.sqrt(num);
       for(let i=2;i<=sqr;i++){
        if(num % i ===0){
            return false;
        }
       }
       return true;
    }

    let sum=0;
  for(let i=2;i<=num;i++){
    if(isPrime(i)){
        sum +=i;
    }
  }
  return sum;
}

/// not clear 

function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }



 /// the simplest one is 
 const sumAllPrimesLoop=function(num){
    const checkPrimes=function(num){
          for(let i=2;i<num;i++){
            if(num %i === 0) return false
          }
          return true;
    }
    let sum=0;

    for(let j=2;j<=num;j++){
        if(checkPrimes(j)){
             sum +=j
        }
    }
    
    return sum;
 }

 
console.log(sumAllPrimesLoop(10));