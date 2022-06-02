//bubble sort 


var arr = [3,5,1,4,3,2,8];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; (j < arr.length -i -1); j++) {
        if(arr[j] < arr[j+1]) {
          var tempVariable = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tempVariable;
            }      
        }  
    }
return arr;
}

console.log(arr);