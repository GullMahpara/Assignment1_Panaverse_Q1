//QUESTION:42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array
 of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// */
let Magicians_Names:string[]=["ALI"," NOMAN","FIDA","FAWAD","KASHIF"];
function show_Magicians(Magicians_Names:string[])
{
for(let i=0;i<Magicians_Names.length;i++)
{
    console.log((i+1)+": "+Magicians_Names[i]);
}
}
function make_Great(Magicians_Names:string[])
{
    for(let i=0;i<Magicians_Names.length;i++)
    {
        var name=Magicians_Names[i];
        Magicians_Names[i]="The Great "+Magicians_Names[i];
    }
}
console.log("BEFORE UPDATION: ");
show_Magicians(Magicians_Names);
make_Great(Magicians_Names);
console.log("AFTER UPPDATIONS ");
show_Magicians(Magicians_Names);