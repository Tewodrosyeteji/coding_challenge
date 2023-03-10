// using regular expression  \s+|_+ and group selector and replace

const spinalCase=function(str){
    let regEx=/\s+|_+/g
const strAZ=str.replace(/([a-z])([A-Z])/g,'$1 $2');

 return strAZ.replace(regEx,"-").toLowerCase();

}
// using regular expresion, toLowercase(),split() and join()

const spinalCaseSplit=function(str){
      
    const strS=str.replace(/([a-z])([A-Z])/,"$1 $2")
    return strS.toLowerCase().split(/(?:_| )+/).join('-')
}
// the combination of the above

const spinalCaseCom=function(str){
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCaseCom("AllThe-small Things");