///using for loop the return should be a number

const longestWordLoop=function(string){
 let splitString=string.split(' ');

 let longest=0;
 

 for(let i=0;i<splitString.length;i++){
    if(splitString[i].length> longest){
        longest=splitString[i].length;
    }
 }

 return longest;

}
longestWordLoop('The quick brown fox jumped over the lazy dog');

// method two using sort()

const longestWordSort=function(str){
    const longest=str.split(' ').sort((a,b)=> b.length-a.length);
    return longest[0].length;
}
longestWordSort('The quick brown fox jumped over the lazy dog');

// method three using reduce()

const longestWordReduce=function(str){
    const longestWord=str.split(' ').reduce((longest,current)=> current.length>longest.length?current:longest,'');
    return longestWord.length;
}

console.log(longestWordReduce('The quick brown fox jumped over the lazy dog'));

