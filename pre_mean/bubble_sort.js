function bubble_sort(arr){
    for(var i=0; i<arr.length-1; i++){
        var swapped = false
        for(var j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                swapped = true
            }
        }
        if(swapped==false){
            break
        }
    }
}
x = [6,5,3,1,8,7,2,4]
bubble_sort(x)
console.log(x)

//O(n)
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//O(1)
function findNth(arr, n){
    console.log(arr[n]);
}

//O(n/2) -> O(n)
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

//O(n^2)
function identityMatrix(n){
var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
    matrix.push(row);
    }
    return matrix;
}