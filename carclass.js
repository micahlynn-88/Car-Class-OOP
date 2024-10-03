class Car{
    contructor(theMake, theModel, theYear, thePrice){
        make = theMake;
        model = theModel;
        if(theYear >= 1900 && theYear <= 2030){
            year = theYear;
        }else{
            year = 1900;
        }
        if(thePrice >= 0){
            price = thePrice;
        }else{
            price = 0.00;
        }   
    }

    //Methods
    calculatePrice() {
        let price;
        let now = 2024;
        if(this.price >= 0){
            let depr = 500 * (now - this.year);
            if(this.price - depr >= 0){
                price = this.price - depr;
            }else{
                price = 0;
            }
        }
        console.log(price)
    }
}

class CarManager{
    //Constructor
    constructor() {
        this.carVal = []; 
        this.numCars = 0;
    }


    //Methods
    addCar(newCar) {
        this.carVal.push(newCar);
        console.log(newCar);
    }
    displayCars() {
        this.carVal.forEach(function(car){
            console.log(console.log(car.make, car.model, car.year, "$" + car.price));
        })
    }
    showTotalPrice() {
        let sum = 0;
        this.carVal.forEach(function(car){
            sum += car.calculatePrice();
        })
        console.log("Total Price: " + sum);
    }
}
let car1 = new Car();
let car2 = new Car("Toyota", "Corolla", 2018, 28500);
let car3 = new Car("Jeep", "Wrangler", 2020, 50000);

//Adding properties to "car1"
car1.make = "Ford";
car1.model = "Fusion";
car1.year = 2014;
car1.price = 20000;

car2.make = "Toyota";
car2.model = "Corolla";
car2.year = 2018;
car2.price = 28500;

car2.calculatePrice();
car1.calculatePrice();

//let list = new CarManager();
// list.addCar(car1);
// list.displayCars();
// list.addCar(car2);
// list.displayCars();
// list.addCar(car3);
// list.displayCars();