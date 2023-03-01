//QUESTION:43
// /*
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
// of the array of magicians’ names. Because the original array will be unchanged, return the new array and
//  store it in a separate array. Call show_magicians()
//  with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
var Magicians_Names = ["ALI", " NOMAN", "FIDA", "FAWAD", "KASHIF"];
function show_Magicians(Magicians_Names) {
    for (var i = 0; i < Magicians_Names.length; i++) {
        console.log((i + 1) + ": " + Magicians_Names[i]);
    }
}
function make_Great(Magicians_Names) {
    var new_Magicians = [];
    for (var i = 0; i < Magicians_Names.length; i++) {
        var name_magicn = Magicians_Names[i];
        new_Magicians[i] = "The Great " + Magicians_Names[i];
    }
    return new_Magicians;
}
var GreatMagiciansName = make_Great(Magicians_Names);
console.log("BEFORE UPDATION:" + Magicians_Names);
make_Great(Magicians_Names);
console.log(" after UPDATION " + Magicians_Names);
make_Great(Magicians_Names);
console.log("new magicians: " + GreatMagiciansName);
