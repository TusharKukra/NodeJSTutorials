// There are 4 Operations in File System (fs) : readFile (sync method / async method), writeFile, appendFile, deleteFile 

const fs = require("fs");

/* readFile : works asynchronously (works on call back) */
// fs.readFile('abc.txt', (error,data)=> {

//     // here is the function which runs automatically when our file gives error
//     // parameter for this function : error & data
//     if(error){
//         // print this if u got error:
//         console.log("Error: "+error);        
//     }

//     else{
//         // else print the data: (if there is no error)
//         console.log("Data: "+data);
//     }
// });

// readFileSync : works synchronously (written the content only when it reads the whole file)
// It will written the whole data-
console.log("Terminated");


/* writeFile (in this also we have both methods: sync, or async) */
// let content = "This is write file operation, whatever we write in the content will be saving to the new.txt file";
// fs.writeFile('new.text', content, (error) => {
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Saved!!");
//     }
// });


/* appendFile: this operation will add data into the existing file */
// fs.appendFile("oldFilePath", "newContent", (error) => {

// fs.appendFile("abc.txt", " new Content", (error) => {
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Appended!!!");
//     }
// })


/* deleteFile */
// fs.unlink("new.text", (error)=>{
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Deleted");
//     }
// })