
// using indexOf,replace
const searchAndReplace=function(str,before,after){
    const index=str.indexOf(before);
    if(str[index]===str[index].toUpperCase()){
        after=after.charAt(0).toUpperCase() + after.slice(1);
    }else{
        after=after.charAt(0).toLowerCase() + after.slice(1); 
    }

    return str.replace(before,after);
}

// using regular expression and replace
const searchAndReplaceEx=function(str,before,after){
    if(/^[A-Z]/.test(before)){
        after=after[0].toUpperCase() + after.substring(1);
    }else{
        after=after[0].toLowerCase() + after.substring(1);
    }

    return str.replace(before,after)
}

// using split(),filter,map(),join();

const searchAndReplaceMap=function(str,before,after){
    const newStr=str.split(' ');
    const [wordToReplace]=newStr.filter(elem => elem===before);
    const replacement= wordToReplace[0] === wordToReplace[0].toUpperCase()?after[0].toUpperCase() +after.slice(1):after[0].toLowerCase() + after.slice(1);
    return newStr.map(elem => elem===before?replacement:elem).join(' ');
}



console.log(searchAndReplaceMap("He is Sleeping on the couch", "Sleeping", "sitting"))