//QUESTION: 31
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var user_names = ["Mahpara", "admin", "Sitara", "Noor", "hoor"];
var Length = user_names.length;
for (var i = 0; i < Length; i++) {
    user_names.pop();
}
if (user_names.length == 0) {
    console.log("We need to find some users!");
}
