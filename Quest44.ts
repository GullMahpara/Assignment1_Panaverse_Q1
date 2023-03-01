
//QUESTION: 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*.*/

function orderSandwich(sandwich:string[])//sandwish is parameter wich shows the number of contant o=in sanwich
{
    console.log("SANDWICH INGREDIENTS: ");
    for(let i=0;i<sandwich.length;i++)
    {
        console.log("contant#"+(i+1)+":"+sandwich[i]);
    }
}
let sandwich_1:string[]=["meat","tomato","mivoneez"];
let sandwich_2:string[]=["kitchip","tomato","salides"];
let sandwich_3:string[]=["Onion","Peppers","cheez"];

orderSandwich(sandwich_1);
orderSandwich(sandwich_2);
orderSandwich(sandwich_3);