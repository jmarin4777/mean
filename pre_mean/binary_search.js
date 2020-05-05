function binary_search(arr, v, start, end){
    var mid = Math.floor((start+end)/2)

    if(arr[mid] == v){
        return mid
    }
    if(start>end){
        return false
    }
    if(arr[mid] > v){
        end = mid-1
    } else{
        start = mid+1
    }
    return binary_search(arr, v, start, end)
}
x = [1,2,3,4,5,6]

console.log(binary_search(x, 10, 0, x.length-1))
//time complexity O(log n)