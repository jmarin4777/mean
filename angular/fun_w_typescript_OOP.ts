class Bike {
    price: number;
    max_speed: string;
    miles: number;

    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
        return this
    }
    ride() {
        console.log('Riding');
        this.miles += 10;
        return this
    }
    reverse() {
        if (this.miles >= 5) {
            console.log('Reversing');
            this.miles -= 5;
        } else {
            console.log("Uh-oh, the odometer can't go any lower than 0");
        }
        
        return this
    }
}

const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "30mph");
const bike3 = new Bike(100, "15mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();