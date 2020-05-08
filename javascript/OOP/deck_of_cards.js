class Card{
    constructor(suit, str, num){
        this.suit = suit;
        this.str = str;
        this.num = num;
    }

    show(){
        console.log(`This is the ${this.str} of ${this.suit}`);
        return this
    }
}

class Deck{
    constructor(){
        this.deck = [];
        const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const values = {"Ace":1, "Two":2, "Three":3, "Four":4, "Five":5, "Six":6, "Seven":7, "Eight":8, "Nine":9, "Ten":10, "Jack":11, "Queen":12, "King":13};

        for(var i=0; i<suits.length; i++){
            for(const key in values){
                this.deck.push(new Card(suits[i], key, values[key]));
            }
        }
    }

    shuffle(){
        var i, rand, temp;
        for(i=this.deck.length-1; i>0; i--){
            rand = Math.floor(Math.random() * (i+1))
            temp = this.deck[i];
            this.deck[i] = this.deck[rand];
            this.deck[rand] = temp;
        }
        return this;
    }
    reset(){
        this.deck = [];
        const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const values = {"Ace":1, "Two":2, "Three":3, "Four":4, "Five":5, "Six":6, "Seven":7, "Eight":8, "Nine":9, "Ten":10, "Jack":11, "Queen":12, "King":13};

        for(var i=0; i<suits.length; i++){
            for(const key in values){
                this.deck.push(new Card(suits[i], key, values[key]));
            }
        }
        return this
    }

    deal(){
        return this.deck.pop()
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    drawCard(deck){
        this.hand.push(deck.deal());
        return this
    }

    discard(index){
        var end = this.hand.length-1;
        if(index != end){
            var temp = this.hand[end];
            this.hand[end] = this.hand[index];
            this.hand[index] = temp;
        }
        this.hand.pop();
        return this
    }
}
var deck = new Deck();
// var card = new Card("Spades", "Ace", 1)
// card.show();
deck.shuffle();
console.log(deck);
var player1 = new Player("Jeff");
console.log(player1.name);
player1.drawCard(deck);
player1.drawCard(deck);
player1.drawCard(deck);
console.log(player1.hand)
player1.discard(1);
console.log(player1.hand)