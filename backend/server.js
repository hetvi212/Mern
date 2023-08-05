const express=require("express")
require('dotenv').config()
// express app
const app=express()
const mongoose=require('mongoose')

const workoutRoute=require('./routes/workouts')

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// Route
app.use('/api/workouts',workoutRoute)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and listioning on 4000")
        })
        
    })
    .catch((err)=>{
        console.log("err: ",err)
    })
// app.get("/",(req,res)=>{
//     res.json({message:"Welcome to the app"})
// })
// listion for request
