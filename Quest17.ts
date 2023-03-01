//QUESTION:17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/
let invite_guest:string[]=["Mahpara","YASMEEN","AMMARAH","SITARA","SHuraim"];
console.log("I can invite only two people for dinner.");
var lengths=invite_guest.length-1;
var pop=invite_guest.length-2;//remove name from array
for(var i=0;i<pop;i++)
{
    console.log("Dear "+invite_guest[lengths]+"sorry you can’t invite  to dinner.");
    invite_guest.pop();
    lengths--;
}
//still in array list name
for(var i=0;i<invite_guest.length;i++)
{
    console.log("Dear "+invite_guest[i]+"! You are still invited");
}
invite_guest.pop();
invite_guest.pop();
console.log("EMPOTY LIST : "+invite_guest);
