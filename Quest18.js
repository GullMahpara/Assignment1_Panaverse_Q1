//QUESTION:18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var places = ["islamabd", "wohan", "dahli", "rawalpindi", "Karachi"];
console.log("orginal order: " + places);
console.log("Print your array in alphabetical order without modifying the ");
var arr1 = [];
for (var i = 0; i < places.length; i++) {
    arr1.push(places[i]);
}
console.log(arr1.sort());
console.log(" Show that your array is still in its original order by printing it.: " + places);
console.log("Print your array in reverse alphabetical order without changing the order of the original list.");
var reversed = [];
for (var i = 0; i < places.length; i++) {
    reversed.push(places[i]);
}
console.log(reversed.reverse());
console.log("Original order of favourite places by reversing it back" + reversed.reverse());
console.log("Sorted Original array in alphabetically: " + places.sort());
console.log("Sorted Original array in reverse alphabetical order:" + places.reverse());
