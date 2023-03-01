//QUESTION:40
/*Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object 
 containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
 Print each return value to show that Objects are storing the album information correctly. 
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
 Make at least one new function call that includes the number of tracks on an album.*/
function make_Album(artist_Name:string,album_Title:string,tracks_Album:number=-1)
{
let Album=
{
    artist1:artist_Name,
    albumTitle1:album_Title,
    NumberTracks1:tracks_Album
};
return Album;
}

let Album1=make_Album("ABCD","ALI ZAFR",11);
let Album2=make_Album("TYUIOP","NOMAN IJAZ",5);
let Album3=make_Album("MBMGBDM","SAJAL ALI");


console.log("ALBUM 1\n"+"title:"+Album1.albumTitle1+"\nArtist: "+Album1.artist1+"\n number of tracks: ");
console.log(Album1.NumberTracks1!=-1?Album1.NumberTracks1:"not mentioned");
console.log("Album 2: "+Album2.albumTitle1+" \nArtist:  "+Album2.artist1+"\n number of tracks: ");
console.log(Album2.NumberTracks1!=-1?Album2.NumberTracks1:"not mentioned");
console.log("Album3: "+Album3.albumTitle1+"\nArtist: "+Album3.artist1+"\n number of tracks: ");
console.log(Album3.NumberTracks1!=-1?Album3.NumberTracks1:"not mentioned");

