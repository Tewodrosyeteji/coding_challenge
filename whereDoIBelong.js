// using for loop

const whereDoIBelong=function(arr,num){
      const sorted=arr.sort((a,b)=>a-b)
      for(let i=0;i<sorted.length;i++){
        if(sorted[i]>=num){
            return i;
        }
      }
      return arr.length;
}


// using filter()

const whereDoIBelongFilter=function(arr,num){

return arr.filter(value=> value<num ).length;

}

// using findIndex()
const whereDoIBelongFindIndex=function(arr,num){
  const index=arr.sort((a,b)=> a-b).findIndex(currentNum => currentNum>=num);
  index=== -1?arr.length:index;
  return index;
}

// using concat and indexOf()

const whereDoIBelongIndexOf=function(arr,num){
const index=arr.concat(num).sort((a,b)=> a-b).indexOf(num);
index=== -1?arr.length:index;
return index;
}
whereDoIBelongIndexOf([5, 3, 20, 3], 5);