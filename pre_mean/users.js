var users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]
function userLanguages(x){
    var str = ""
    for(var i=0; i<x.length; i++){
        str += `${x[i]["fname"]} ${x[i]["lname"]} knows `
        for(var j=0; j<x[i]["languages"].length; j++){
            if(j==x[i]["languages"].length-1){
            str += `and ${x[i]["languages"][j]}.`
            } else{
                str += `${x[i]["languages"][j]}, `
            }
        }
        str += "\n"
        var interests = Object.values(x[i].interests)
        console.log(interests)
        str += `${x[i]["fname"]} is also interested in `
        for(var k=0; k<interests.length; k++){
            for(var v=0; v<interests[k].length; v++){
                if(k==interests.length-1 && v==interests[k].length-1){
                    str += `and ${interests[k][v]}.`
                } else{
                    str += `${interests[k][v]}, `
                }
            }
        }
        str += "\n"
    }
    return str
}
// console.log(userLanguages(users))

// function userLanguages2(someArray){
//     for (var i = 0; i<someArray.length;i++){
//         var int = []
//         for (var key in someArray[i]['interests']){
//             int += someArray[i]['interests'][key];
//         }
//         name = someArray[i].fname +' '+ someArray[i].lname
//         lang = someArray[i].languages
//         saying = name + " knows " + lang +"."
//         for (j = 0;j < someArray[i].interests.length; j++){
//         }
//         saying2 = name + " is also interested in " + int +"."
//         console.log(saying)
//         console.log(saying2)
//     }
//     return someArray
// }
// console.log(userLanguages2(users))