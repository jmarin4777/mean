// 1) 
// console.log(hello);                                   
// var hello = 'world';                                 
var hello;
console.log(hello); //logs undefined
hello = 'world';

// 2)
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
var needle; //hoists variables and functions before running assignments
function test(){ //hoists variable within function scope but doesn't run yet
    var needle;
    needle = 'magnet';
    console.log(needle); //logs 'magnet'
}

needle = 'haystack';
test(); //runs test as shown above

// 3)
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
var brendan; //hoists variable and function
function print(){ //function never runs
    brendan = 'only okay';
    console.log(brendan);
}

brendan = 'super cool';
console.log(brendan) //logs 'super cool'

// 4)
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
var food; //hoists var and function
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); //logs 'half-chicken'
    food = 'gone';
}

food = 'chicken';
console.log(food); //logs 'chicken'
eat(); //runs eat as shown above

// 5)
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
var mean; //var hoisted
mean(); //function does not exist yet so error is produced

// 6)
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
var genre; //hoists var and function
function rewind(){
    var genre; //hoists var function scoped
    genre = "rock";
    console.log(genre); //logs "rock"
    genre = "r&b";
    console.log(genre); //logs "r&b"
}

console.log(genre)//logs undefined
genre = "disco";
rewind(); //runs rewind as shown above
console.log(genre)//logs disco

// 7)
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
function learn(){ //function hoisted
    var dojo; //function scoped
    dojo = "seattle";
    console.log(dojo); //logs "seattle"
    dojo = "burbank";
    console.log(dojo); //logs "burbank"
}

dojo = "san jose";
console.log(dojo); // logs "san jose"
learn(); //runs learn as shown above
console.log(dojo); // logs "san jose"

// 8)
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     } else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
function makeDojo(name, students){ //function hoisted
    const dojo; //hoisted but uninitialized
    dojo = {};
    dojo.name = name; //establishes attribute name
    dojo.students = students; //establishes attribute students
    if(dojo.students > 50){
        dojo.hiring = true; //establishes attribute hiring
    } else if(dojo.students <= 0){
        dojo = "closed for now"; //cannot reassign const
    }
    return dojo;
}

makeDojo("Chicago", 65); //returns dojo = { hiring: true, name: "Chicago", students: 65 }
console.log() //logs above function call
makeDojo("Berkeley", 0); //causes error as const dojo cannot be reassigned
