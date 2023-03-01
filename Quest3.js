//QUESTION 03
/*Name Cases: Store a person’s name in a variable, and then print that person’s
 name in lowercase, uppercase, and titlecase.*/
var personName = "mahpara";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
function title_Case(person_Name) {
    return person_Name.substring(0, 1).toUpperCase() + person_Name.substring(1).toLowerCase();
}
console.log("Title case: " + title_Case(personName));
