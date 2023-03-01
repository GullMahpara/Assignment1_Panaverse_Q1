// QUESTION:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the arraY
 let Magicians_Names:string[]=["ALI"," NOMAN","FIDA","FAWAD","KASHIF"];
function show_Magicians(Magicians_Names:string[])//PASS ARRAY AS  parameter
{
for(var i=0;i<Magicians_Names.length;i++)
{
    console.log("magician"+(i+1)+": "+Magicians_Names[i]);
}
}
show_Magicians(Magicians_Names);