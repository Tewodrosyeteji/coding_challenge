// method one using for loop

const titleCaseSentence=function(string){
    let splitString=string.split(' ');
    let newString=[];
    for(let str in splitString){
       newString[str]=splitString[str][0].toUpperCase() + splitString[str].slice(1).toLowerCase()
    }

    return newString.join(' ');

}

// method two using map() replace()

const titleCaseSentenceMap=function(string){
    return string.toLowerCase().split(' ').map(ele => ele.replace(ele[0],ele[0].toUpperCase())).join(' ')
}
const titleCaseSentenceMapM=function(string){
    return string.toLowerCase().split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join(' ')
}


titleCaseSentenceMap("I'm a little tea pot");