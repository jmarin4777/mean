function coin_change(x){
    var change = {"D":0, "q":0, "d":0, "n":0, "p":0}
    if(x/100 >= 1){
        change["D"] = Math.floor(x/100)
        x -= change["D"]*100
    }
    if(x/25 >= 1){
        change["q"] = Math.floor(x/25)
        x -= change["q"]*25
    }
    if(x/10 >= 1){
        change["d"] = Math.floor(x/10)
        x -= change["d"]*10
    }
    if(x/5 >= 1){
        change["n"] = Math.floor(x/5)
        x-= change["n"]*5
    }
    if(x > 0){
        change["p"] = x
    }
    return change
}

function coin_change2(change){
    var x = 0
    if("D" in change){
        x += change["D"]*100
        change["D"] = 0
    }
    if("q" in change){
        x += change["q"]*25
        change["q"] = 0
    }
    if("d" in change){
        x += change["d"]*10
        change["d"] = 0
    }
    if("n" in change){
        x += change["n"]*5
        change["n"] = 0
    }
    if("p" in change){
        x += change["p"]
        change["p"] = 0
    }
    if(x/100 >= 1){
        change["D"] = Math.floor(x/100)
        x -= change["D"]*100
    }
    if(x/25 >= 1){
        change["q"] = Math.floor(x/25)
        x -= change["q"]*25
    }
    if(x/10 >= 1){
        change["d"] = Math.floor(x/10)
        x -= change["d"]*10
    }
    if(x/5 >= 1){
        change["n"] = Math.floor(x/5)
        x-= change["n"]*5
    }
    if(x > 0){
        change["p"] = x
    }
    return change
}

console.log(coin_change(312))
console.log(coin_change(167))

console.log(coin_change2({"D":2, "d":15, "p":5}))