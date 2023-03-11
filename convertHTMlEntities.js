
// using switch and for



const convertHTMLEntities=function(str){
 let string=str.split('');
    for(let i=0;i<string.length;i++){
 switch(string[i]){
     case "<":
        string[i] = "&lt;";
        break;
      case "&":
        string[i] = "&amp;";
        break;
      case ">":
        string[i] = "&gt;";
        break;
      case '"':
        string[i] = "&quot;";
        break;
      case "'":
        string[i] = "&apos;";
        break;

        }
    }
    string=string.join('');
    return string;
}

// using regular expression and replace

const convertHTMLEntitiesReg=function(str){
    const HTMLEntities={
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
    }
    return str.replace(/([&<>\"'])/g,match=>HTMLEntities[match])
}


// using spilt(),map,join
const convertHTMLEntitiesMap=function(str){
    const HTMLEntities={
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
    }
return str.split('').map(entity=> HTMLEntities[entity] || entity).join('');
}


convertHTMLEntitiesMap('Stuff in "quotation marks"');