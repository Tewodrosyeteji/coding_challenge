/// using slice()

const truncatString=function(str,num){
    return str.length>num? str.slice(0,8) +'...':'';
}

truncatString("A-tisket a-tasket A green and yellow basket", 8);