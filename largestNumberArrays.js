// method one using for loop

const largestNumberArraysLoop=function(arr){
   let largest=new Array(arr.length).fill(0);

   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>largest[i]){
            largest[i]=arr[i][j];
        }
    }
   }
   return largest;

}
largestNumberArraysLoop([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// method two using map and reduce

const largestNumberArraysReduce=function(array){
    return array.map(subArray=>subArray.reduce((largest,current)=> current>largest?current:largest,0));
}
largestNumberArraysReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// method three using map and Math.max

const largestNumberArraysMax=function(array){
    return array.map(subArray=>Math.max(...subArray));
}

clargestNumberArraysMax([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
