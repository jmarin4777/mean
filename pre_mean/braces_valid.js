function braces_valid(str){
    var checker = []
    for(var i=0; i<str.length; i++){
        if(str[i]=="{" || str[i]=="[" || str[i]=="("){
            checker.push(str[i])
        } else{
            if(checker.length==0){
                return false
            }
            if(str[i]=="}"){
                if(checker[checker.length-1]=="{"){
                    checker.pop()
                }
                else{
                    return false
                }
            }
            if(str[i]=="]"){
                if(checker[checker.length-1]=="["){
                    checker.pop()
                }
                else{
                    return false
                }
            }
            if(str[i]==")"){
                if(checker[checker.length-1]=="("){
                    checker.pop()
                }
                else{
                    return false
                }
            }
        }
    }
    if(checker.length>0){
        return false
    }
    return true
}
console.log(braces_valid("{{()}}[]"))
console.log(braces_valid("{(})"))
console.log(braces_valid("}}}"))
console.log(braces_valid("({["))