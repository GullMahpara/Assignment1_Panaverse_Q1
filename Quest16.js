//QUESTION:16
/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
     bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var invite_guest = ["Mahpara", "YASMEEN", "AMMARAH", "SITARA", "SHuraim"];
console.log("iNVITED PEOPLE IN BIG TABLE DINNER:\n1: Hira\n2: fatima\n3: jannat,noor");
invite_guest.unshift("  Hira"); //beginning
invite_guest.splice(invite_guest.length / 2, 0, "fatima");
invite_guest.push("noor");
for (var i = 0; i < invite_guest.length; i++) {
    console.log(invite_guest[i] + "! I  invite you to the dinner party at our home on coming saturday.");
}
