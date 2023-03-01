//QUESTION: 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
 and a shirt of any size with a different message.*/
 function make_Shirt(size:String="Large",message:String="I love transcript"):String
{
    let modify:string="SIZE: "+size+"\n Message:"+message+"'";
    return modify;
}
console.log(make_Shirt()+"\n"+make_Shirt("medium")+"\n"+make_Shirt("medium","I love javascript")+"\n"+make_Shirt("small(any size)","I love php")+"\n"+make_Shirt("small"));

