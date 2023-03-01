//QUESTION: 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper
ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
and each result should be on a separate line.*/
var ordinal_number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinal_Number = '';
for (var i = 0; i < ordinal_number_arr.length; i++) {
    if (ordinal_number_arr[i] == 1) {
        ordinal_Number = ordinal_Number + ordinal_number_arr[i] + "st \n";
    }
    else if (ordinal_number_arr[i] == 2) {
        ordinal_Number = ordinal_Number + ordinal_number_arr[i] + "nd \n";
    }
    else if (ordinal_number_arr[i] == 3) {
        ordinal_Number = ordinal_Number + ordinal_number_arr[i] + "rd \n";
    }
    else {
        ordinal_Number = ordinal_Number + ordinal_number_arr[i] + "th \n";
    }
}
console.log("Ordinal numbers:\n" + ordinal_Number);
