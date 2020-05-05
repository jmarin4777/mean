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




