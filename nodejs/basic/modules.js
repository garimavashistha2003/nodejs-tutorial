const { isUtf8 } = require('buffer');

const fs = require('fs').promises;
// const os = require('os')

// fs.writeFileSync("dummy.txt","hello whats up....")

// console.log(os.platform());

// console.log(process.cwd())


//sync
// console.log("start reading file");
// const data = fs.readFileSync("dummy.txt" , 'utf8');
// console.log(data);
// console.log("file reading finished");



//async
console.log("start reading file");


//callback
// fs.readFile("dummy.txt" , 'utf8', (err,data)=>{
//     if (err) {
//         console.log("Error:", err.message);
//         return;
//     }
//     console.log("File content:", data);

// })



//using async await 


// async function readFile(){
//     try{
//         const data = await fs.readFile('dummy.txt' , 'utf8');
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// readFile();


function readFile(){
return fs.readFile('dummy.txt' ,'utf8')

}

readFile()
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})

// fs.readFile('dummy.txt' ,'utf8')
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

console.log("file reading finished");