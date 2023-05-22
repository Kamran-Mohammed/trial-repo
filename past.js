const num = 12;

if(num > 10){
    console.log("large number");
}
else{
    console.log("small number");
}

console.log("hello world!");


//globals


console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);


//


setInterval(()=>{
    console.log("Hello World");
},1000);


//import export


const {kamran, john} = require('./vars');
const sayHi = require('./func');

sayHi(kamran);
sayHi(john);


//os module


const os = require('os');
const user = os.userInfo();

console.log(user);
console.log(`the system is running for ${os.uptime()} seconds(uptime)`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
};

console.log(currentOS);


//path module


const path = require('path');

console.log(path.sep);

const filePath = path.join('/folder/','/subfolder','text.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolutePath = path.resolve(__dirname,'folder','subfolder','text.txt');
console.log(absolutePath);


//fs module(synchronous)


const fs = require('fs');

const first = fs.readFileSync('./folder/first.txt','utf8');
const second = fs.readFileSync('./folder/second.txt','utf8');

console.log(first);
console.log(second);


//this creates a new file and adds content in it if file doesnt exist or replaces the content if it exists
fs.writeFileSync('./folder/third.txt','This is third text file');

//This appends to existing file
fs.writeFileSync('./folder/second.txt',' Append',{flag:'a'});


//fs module(async)


const fs = require('fs');

// fs.writeFile('./folder/random.txt','This is a random text file',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('task completed');
// })

console.log('start');//start
fs.readFile('./folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./folder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile('./folder/result.txt',`Result : ${first}, ${second}`,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('task complted');//task complted
        })
    })
})
console.log('starting next task');//starting next task

//console output:
//start
//strating next task
//task completed
//this means that async tyoe of code doesnt wait for the task to be completed before doing the next one