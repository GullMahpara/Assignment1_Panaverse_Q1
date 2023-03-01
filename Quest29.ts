
//QUESTION:29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favourite_fruits:string[]=["Mango","Banana","Orange"];
if(favourite_fruits.indexOf("Mango")!=-1)
{
    console.log("You really like Mango!");
}
if(favourite_fruits.indexOf("Banana")!=-1)
{
    console.log("You really like Banana");
}
if(favourite_fruits.indexOf("Carrot")!=-1)
{
    console.log("You really like Carrot");
}
if(favourite_fruits.indexOf("Orange")!=-1)
{
    console.log("You really like Orange");
}
if(favourite_fruits.indexOf("Apple")!=-1)
{
    console.log("You really like Apple");
}

