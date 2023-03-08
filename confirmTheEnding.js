// method one using substr()

const confirmTheEndingSubstr=function(string,target){
    return string.substr(-target.length)===target?true:false;
}

confirmTheEndingSubstr("Congratulation", "on");

//method three using slice
const confirmTheEndingSlice=function(str,target){
    return str.slice(-target.length)===target;

}

/// method two using endsWith()

const confirmTheEnding=function(str,target){
   return str.endsWith(target)
}
confirmTheEndingSlice("Congratulation", "on");
