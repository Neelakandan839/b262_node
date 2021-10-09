
 
function double(num){
    return num * 2 ;
}
const num=process.argv[2];
console.log(double(num))
const os=require('os')
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.arch())

const fs=require('fs');
fs.readFile("./nk.txt","utf8",(err,data)=>{
   
        console.log(data)
   fs.writeFile("./nk3.txt",data + "ssfgh",()=>console.log("hi"))
    
})

// fs.copyFile("./nk.txt","nk5.txt",()=>console.log("copied"))
// fs.rename("./nk.txt","nk-46.txt",()=>console.log("renamed"))

// const m= fs.readFileSync("./nk.txt","utf8")
// console.log(m,"dfgh")
fs.appendFile("./nk1.txt","\n wertyuiopsdfghjklzxcv",()=>console.log("k"))