// using while 

const repeatStringWhile=function(str,num){
       let repeted=''
    while(num>0){
        repeted +=str;
        num--;
    }
    return repeted;
}

repeatStringWhile('hello',2);

// using recursion 

const repeatStringRecursion=function(str,num){
    if(num<1){
        return '';
    }
    else{
        return str+repeatStringRecursion(str,num-1)
    }

}

console.log(repeatStringRecursion('abc',3));

// using repeat()

const repeatStringRepeat=function(str,num){
    return num>0?str.repeat(num):''
}
repeatStringRepeat('abcd',2)