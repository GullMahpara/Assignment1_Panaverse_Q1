//QUESTION: 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
 //so you need to send out a new set of invitations. Yu’ll have to think of someone else to invite.
 let invite_guest:string[]=["Mahpara","YASMEEN","AMMARAH","SITARA","SHuraim"];
console.log("NOT MAKE DINNER: "+invite_guest[2]);
invite_guest.splice(2,1,"fjsbafbks");
 for(var i=0;i<invite_guest.length;i++)
{
     console.log((i+1)+": Dear "+invite_guest[i]+"! I would like to invite you to the dinner party held at our place.");
}