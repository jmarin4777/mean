var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};
var owl = { character: "Owl" };
var christopher = { character: "Christopher Robin" };
var bees = { character: "Bees" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "HeffaLumps" };

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
tigger.north.west = piglet;
piglet.east = tigger.north;
piglet.north = owl;
owl.south = piglet;
owl.east = christopher;
christopher.west = owl;
christopher.south = pooh;
pooh.north = christopher;
pooh.east = bees;
bees.west = pooh;
bees.north = rabbit;
rabbit.south = bees;
rabbit.west = christopher;
christopher.east = rabbit;
rabbit.east = gopher;
gopher.west = rabbit;
christopher.north = kanga;
kanga.south = christopher;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player1 = { 
    location: tigger
}

function move(player, direction){
    if(direction == "north"){
        if(player.location.north){
            player.location = player.location.north
            return `You are now at ${player.location.character}'s house`
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "south"){
        if(player.location.south){
            player.location = player.location.south
            return `You are now at ${player.location.character}'s house`
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "east"){
        if(player.location.east){
            player.location = player.location.east
            return `You are now at ${player.location.character}'s house`
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "west"){
        if(player.location.west){
            player.location = player.location.west
            return `You are now at ${player.location.character}'s house`
        } else{
            return "You may not go that way!"
        }
    } else{
        return "Valid directions are: 'north', 'south', 'east', and 'west'."
    }
}

console.log(move(player1, "north"))