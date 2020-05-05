function fizzbuzz(n){
    if(n<0){
        console.log("Parameter must be a positive number")
        return null
    }
    var str = ""
    for(var i=1; i<=n; i++){
        if(i%3==0 && i%5==0){
            str += "FizzBuzz"
        } else if(i%3==0){
            str += "Fizz"

        } else if(i%5==0){
            str += "Buzz"

        } else{
            str += i.toString()
        }
        if(i!=n){
            str += ", "
        }
    }
    return str
}
console.log(fizzbuzz(30))