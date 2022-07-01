const express =require("express")
const app= express()
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel =require('./models/Form')
require("./db")
app.use(express.json())
app.use(cors())


app.post('/addcar',async(req,res)=>{

const name= req.body.name;
const price= req.body.price;
const colour= req.body.colour;
const mileage= req.body.mileage;
const availability= req.body.availability;

const user= new UserModel({name: name, price: price, colour: colour, mileage: mileage, availability: availability})
 await user.save();
res.send("Data Inserted")
})

app.get('/read',async(req,res)=>{
    UserModel.find({}, (err, result)=>{
    if(err){
        res.send(error);
    }    
    else{
        res.send(result);

    }
    } ) 
    await user.save();
   res.send("Data Inserted")
   })

   app.get('/read',async(req,res)=>{
    const Car= new UserModel({name: "Audi"})
    await user.save();
   res.send("Data Inserted")
   })


app.listen(3000, ()=>{
    console.log("running on port 3000");
})