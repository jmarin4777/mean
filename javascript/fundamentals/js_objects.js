let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(arr){
    for(var i=0; i<arr.length; i++){
        var str = ""
        for(var key in arr[i]){
            if(key=="cohort"){
                str += key + ": " + arr[i][key]
            } else{
                str += key + ": " + arr[i][key] + ", "
            }
        }
        console.log(str)
    }
}
print(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function info(obj){
    for(var key in obj){
        console.log(key.toUpperCase())
        for(var i=0; i<obj[key].length; i++){
            var str = obj[key][i]["last_name"] + ", " + obj[key][i]["first_name"]
            console.log((i+1).toString() + " - " + str.toUpperCase() + " - " + (str.length-2).toString())
        }
    }
}
info(users)