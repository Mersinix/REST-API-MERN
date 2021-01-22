const express=require('express');
const app=express();

const connectDB=require('./config/connectDB')

//Connect to DB
connectDB();

// Middleware
app.use(express.json())

// routes
app.use('/api/contacts',require('./routes/contact'))

// Create a port to listen
const port= process.env.PORT||5000
app.listen(port, (err)=>
err?console.log(err):console.log(`aplication run in server${port}`))