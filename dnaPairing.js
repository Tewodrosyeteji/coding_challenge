// object,split,map

const dnaPairing=function(str){
    const paring={
        A:'T',
        T:'A',
        C:'G',
        G:'C',
    }
    return str.split('').map(value=> [value,paring[value]])

}

// using switch statement 

const dnaPairingSwitch=function(str){
    const machingWithBasePairs=function(char){
        switch(char){
            case "A":
                return ["A","T"];
            case "T":
                return ["T","A"];
            case "C":
                return ["C","G"];
            case "G":
                return ["G","C"];
        }
    }
   let pairs=[];
   for(let i=0;i<str.length;i++){
     pairs.push(machingWithBasePairs(str[i]))
   }
   return pairs;
}

console.log(dnaPairingSwitch('CGC'))