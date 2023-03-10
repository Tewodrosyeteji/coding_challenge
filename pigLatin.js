// using regural expression, concat,replace


const pigLatin=function(str){
    const consonantRegEx=/^[^aeiou]+/;  
    const myConsonant=str.match(consonantRegEx);

    return myConsonant !== null ?str.replace(consonantRegEx,'').concat(myConsonant).concat('ay'):str.concat('way')
;
}

// using regular expression,indexOf(),subString()

const pigLatinSub=function(str){
    const vowelReEx=/[aeiou]+/gi;
    pigWord=''

    if(str[0].match(vowelReEx)){
      pigWord= str + 'way';
    }else if( str.match(vowelReEx) === null){
      pigWord = str + 'ay';
    }else{
      const vowelIndex= str.indexOf(str.match(vowelReEx)[0]);
      pigWord = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
    }
    return pigLatin;
}

// using regular expression and substring

const pigLatinreEs=function(str){
  if(str.match(/^[aeiou]/)) return str + 'way';
  const consonat=str.match(/^[^aeiou]+/)[0];
  return str.substring(consonat.length) + consonat + 'ay'
}

// using regural expression and replace

const pigLatinRegRep=function(str){
  return str.replace(/^[aeiou]\w*/,"$&way")
         .replace(/(^[^aeiou]+)(\w*)/,"$2$1ay")
}
console.log(pigLatinRegRep('hwartz'))