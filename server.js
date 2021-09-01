const express = require ('express');
const path = require ('path');
const app = express();
const port = 5000 ;
//const student = require('./student');
// const studentFiltre = require('./studentFiltre');
// const student=[
//     {
//         id:1,
//         name:"bilel",
//         age:18,
//     },
//     {
//         id:2,
//         name:"chadha",
//         age:9,
//     },
//     {
//         id:3,
//         name:"zahra",
//         age:20,
//     },
//     {
//         id:4,
//         name:"leyla",
//         age:25,
//     }
// ];

app.use(date=(req,res,next)=>{
    var objetdate = new Date();
    var hours = objetdate.getHours();
    var day = objetdate.getDay();
    if ((hours>=17 && hours<=9) &&(day==0 || day==6) ) {
        res.send("we are closed")
    } else {
        next();
    }
})



app.use(express.static(path.join(__dirname,"Public")));
// app.use(studentFiltre);
// //Get all student
// app.get("/student",(req,res)=>{
//     res.json(student);
// })

//Get only 1 student
// app.get("/student/:id",(req,res)=>{
//     let a=student.filter((el)=>{
//         el.id === parseInt(req.params.id); 
        
//     })
//     if (a.length===0) {
//         res.json({Message:"student not found"+req.params.id})
//     }
//     else{
//         res.json(a)
//     }
// });
    

app.listen(5000,(err)=>err ? console.log("error") : console.log(`server is on line on port ${port}`));

