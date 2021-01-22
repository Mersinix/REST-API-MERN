const mongoose=require('mongoose')
const schema=mongoose.Schema

const ContactSchema= new schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    //     required: true,
    //     lowercase: true,
    //     validate: (value) => {
    //   return validator.isEmail(value)}
    
    },
    phone:{
        type:String
    },
    dateCreation:{
        type:String,
        default:Date.now()
    }

}) 
module.exports=Contact=mongoose.model("Contact",ContactSchema)