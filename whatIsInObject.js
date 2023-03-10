// using Object.valuse(),filter(),for loop

const whatIsInObject=function(collection,source){
 
let sourceKeys=Object.keys(source);

return collection.filter(obj=>{
    for(let i=0;i<sourceKeys.length;i++){
        if(!obj.hasOwnProperty(sourceKeys[i]) || (obj[sourceKeys[i]] !== source[sourceKeys[i]])){
                     return false;
        }
    }
    return true;
})
}
// Object.keys(),filter,every

const whatIsInObjectEvery=function(collection,source){
    const sourceKeys=Object.keys(source);
    return collection.filter(obj=> sourceKeys.every(key=> obj.hasOwnProperty(key) && obj.key==source.key))
}

// Object.keys(),filter,map,reduce => I cann't understand

const whatIsInObjectReduce=function(collection,source){
    const sourceKeys=Object.keys(source);
    return collection.filter(obj=> sourceKeys.map(key => obj.hasOwnProperty(key) && obj.key===source.key).reduce((a,b) => a && b));
}

// nested for loop and some condition checkers

 const whatIsInObjectNestedFor=function(collection,source){
    let foundedArray=[];
   for(let i=0;i<collection.length;i++){
    let found=true;
    for(const key in source){
        if(collection[i][key]!== source[key]){
            found=false;
            break;
        }
    }
    if(found) foundedArray.push(collection[i])
   }
   return foundedArray;
 }
console.log(whatIsInObjectNestedFor([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))

