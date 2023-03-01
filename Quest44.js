//QUESTION: 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*.*/
function orderSandwich(sandwich) {
    console.log("SANDWICH INGREDIENTS: ");
    for (var i = 0; i < sandwich.length; i++) {
        console.log("contant" + (i + 1) + sandwich[i]);
    }
}
var sandwich_1 = ["meat", "tomato", "mivoneez"];
var sandwich_2 = ["kitchip", "tomato", "salides"];
var sandwich_3 = ["Onion", "Peppers", "cheez"];
orderSandwich(sandwich_1);
orderSandwich(sandwich_2);
orderSandwich(sandwich_3);
