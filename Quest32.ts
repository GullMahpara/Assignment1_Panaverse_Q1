
//QUESTION:32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
 print a message that the person will need to enter a new username. If a username has not been used,
  print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users_list:string[]=["mahpara","ammarah","sitara","noor","farhat"];
let new_users:string[]=["ayesha","areeeba","ammarah","sitara","laraib"];
for(var i=0;i<new_users.length;i++)
{
    if(current_users_list.indexOf(new_users[i])!=-1)
    {
        console.log("new user name\t"+new_users[i]);
    }
    else 
    {
        console.log("already present in list");
    }
}

