function mma(arr){
    var sum = 0
    var min = arr[0]
    var max = arr[0]
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return `Min: ${min}, Max: ${max}, Avg: ${sum/arr.length}`
}
var x = [1, -2, 9, 4]
console.log(mma(x))