//QUESTION: 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//TEST NUMBER:1
//Tests for equality and inequality with strings
var num = "TEN";
console.log(num == "TEN" ? 'The number is equal to 10' : 'The number is not equal to 10');
console.log(num == "Thousand");
console.log(num = "Thousand" ? 'The number is equal to 1000' : 'The number is  not equal to 1000');
console.log(num == "Thousand");
//TEST NUMBER:2
//Tests using the lower case function
var boss = "Quaid Azam";
console.log(boss + " is our leader");
console.log(boss == boss.toLowerCase() ? 'Quaid asazm in lower case' : 'Quaid Azm in not lower formet');
console.log(boss == 'ALI MUHAMMAD'.toLowerCase());
boss = 'ALI MUHAMMAD';
console.log("My boss name is " + 'ALI MUHAMMAD');
console.log(boss == boss.toLowerCase() ? 'My leader name is in lower Case' : 'My province name is not in lowerCase');
console.log(boss == 'ALI MUHAMMAD'.toLowerCase());
//Test 3
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 5;
var num2 = 10;
console.log("EQUALITY: " + (num1 == num1));
console.log("EQUALITY" + (num1 == num2));
console.log("INEQUALITY " + (num1 != num2));
console.log("INEQUALITY:" + (num1 != num1));
console.log("greater than : " + (num2 > num1));
console.log("greater than : " + (num1 > num2));
console.log("less than : " + (num1 < num2));
console.log("less than :" + (num2 < num1));
console.log("less than or equal to : " + (num1 <= num2));
console.log("less than or equal to : " + (num2 <= num1));
console.log("greater than or equal to: " + (num2 >= num1));
console.log("greater than or equal to : " + (num1 >= num2));
//Test 4
//Tests using "and" and "or" operators
var num3 = 100;
console.log("5<10 and 10<100: " + ((num1 < num2) && (num1 < num3)));
console.log("10<5 and 10<100 :" + ((num2 < num1) && (num2 < num3)));
console.log("10<5 or 100<10: " + ((num2 < num1) || (num2 < num3)));
console.log("100<5 or 100<10:  " + ((num3 < num1) || (num3 < num2)));
//Test 6
//Test whether an item is in a array
var arr = [10, 20, 30, 40, 50];
console.log("TRRAY NUMBER: " + arr);
console.log("check 100 is in array or not: ");
//Test 5
// Test whether an item is not in a array
console.log(arr.indexOf(100) == -1 ? 'false' : 'true');
console.log("The 50 is in array of number ");
console.log(arr.indexOf(50) == -1 ? 'false' : 'true');
