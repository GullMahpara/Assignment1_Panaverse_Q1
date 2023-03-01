//QUESTION:45
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
var Car = /** @class */ (function () {
    function Car(manufacturer1, model1, color1, optional_Feature1) {
        this.Manufacturer = manufacturer1;
        this.Model_Name = model1;
        this.Color = color1;
        this.Optional_Feature = optional_Feature1;
    }
    return Car;
}());
var c1 = new Car("bmw", "2019 model", "black", "4 wheel car"); //object
var c2 = new Car("toyota", "2020 model", "white", "2 wheel car"); //object
console.log(c1);
console.log(c2);
