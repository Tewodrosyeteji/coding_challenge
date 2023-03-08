// method one using three in built methods spilt(),reverse(),join(),
// spilt()->spliting the String object into array of string by separating the string into sub string,
// reverse() -> reverse an array in place. last become first.
// join() -> join all element of the array into string. 

const reverseString=function(str){
   return str.split('').reverse().join('');

}

reverseString('hello');

// method two  by looping the string

const reverseStingLooping=function(string){
           reverse='';
           for(let i=string.length-1;i>=0;i--){
            reverse +=string[i];
        }
        return reverse;
}

reverseStingLooping('hello');

// method three  using substring() and charAt() and recursion 

const reverseStringRecursion=function(str){
  return  ( str === '')? '' : reverseStringRecursion(str.substring(1))  + str.charAt(0);
}

reverseStringRecursion('hello');