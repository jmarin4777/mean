var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
}; // start with just the character attribute
var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother.")
    }
};
var piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Oh d-d-d-dear! I wasn't expecting company!")
    }
};
var owl = { 
    character: "Owl", 
    greet: function(){
        console.log("Hoot")
    }
};
var christopher = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Christopher Robin at your service")
    }
};
var bees = { 
    character: "Bees", 
    greet: function(){
        console.log("Buzzzz")
    }
};
var rabbit = { 
    character: "Rabbit", 
    greet: function(){
        console.log("Hop, hop, hop")
    }
};
var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("I'm a gopher")
    } 
};
var kanga = { 
    character: "Kanga", 
    greet: function(){
        console.log("Bounce, bounce, bounce")
    }
};
var eeyore = { 
    character: "Eeyore", 
    greet: function(){
        console.log("Snoring")
    }
};
var heffalumps = { 
    character: "HeffaLumps",
    greet: function(){
        console.log("What is a heffalump")
    }
};

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
            console.log("You are now at " + player.location.character + "'s house")
            player.location.greet()
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "south"){
        if(player.location.south){
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house")
            player.location.greet()
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "east"){
        if(player.location.east){
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house")
            player.location.greet()
        } else{
            return "You may not go that way!"
        }
    } else if(direction == "west"){
        if(player.location.west){
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house")
            player.location.greet()
        } else{
            return "You may not go that way!"
        }
    } else{
        return "Valid directions are: 'north', 'south', 'east', and 'west'."
    }
}

move(player1, "north")