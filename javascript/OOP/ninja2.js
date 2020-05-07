function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;

    this.punch = function(target){
        if(target instanceof Ninja){
            target.health -= 5;
            console.log(target.name + " was punched by " + this.name + " and lost 5 Health!");
        }
    }
    this.kick = function(target){
        if(target instanceof Ninja){
            target.health -= 15 * strength;
            console.log(target.name + " was punched by " + this.name + " and lost " + 15 * strength + " Health!");
        }
    }
    this.sayName = function(){
        console.log("My name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    }

    //private
    var speed = 3;
    var strength =3;
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.punch(redNinja);
redNinja.kick(blueNinja);