// using for loop,charCodeAt(),fromCharCode()

const missingLetters=function(str){
   for(let i=0;i<str.length;i++){
      const codeChar=str.charCodeAt(i);
      if(codeChar !== (str.charCodeAt(0) + i)){
        return String.fromCharCode(codeChar - 1);
      }
   }
   return undefined;
}
// using split,forEach, charCodeAt(),String.fromCharCode()

const missingLettersForEach=function(str){
    let currCharCode=str.charCodeAt(0);
    let missed=undefined;
     str.split('').forEach(element=>{
        if(element.charCodeAt(0) === currCharCode){
            currCharCode++;
        }else{
            missed=String.fromCharCode(currCharCode)
        }
    });
    return missed;
}

//  using String.fromCharCode(),charCodeAt() and difference rule

const missingLettersDiff=function(str){
    for(let i=1;i<str.length;i++){
        if(str.charCodeAt(i)-str.charCodeAt(i-1)>1){
            return String.fromCharCode(str.charCodeAt(i-1)+1)
        }
    }
}
console.log(missingLettersDiff('abce'))