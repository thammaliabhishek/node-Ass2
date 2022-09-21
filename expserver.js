const express=require('express');
const app=express();
const port =5000

const usersData={
    name:'Abhishek',
    Age:23,
    Location:'Hyderabad'
}

const data=JSON.stringify(usersData);


app.get('/route/api/main',(req,res)=>{
    res.write("<h1>Hello welcome to express</h1>");
    res.write(data);
    res.end();
    

})


app.listen(port,()=>{
    console.log("port is connected");
})