const express=require('express')
const router=express.Router()
const Contact=require('../models/Contact')

//Post
// Path:http://localhost:5000/api/contacts/add
// add contact in DB from user
// privé/public

// router.post('/add',(req,res)=>{
//     const {name
// ,email,phone}=req.body
//     const newContact=new Contact({
//         name,email,phone
//     })
//     newContact.save()
//     .then(contact=>res.json({msg:"contact added",contact}))
//     .catch(err=>console.log(err));
// })

router.post('/add', async(req,res)=>{
    const {name,email,phone}=req.body;
    try {
        const newContact=new Contact({
            name,email,phone
        });
       let contactSaved= await newContact.save();
       res.json({msg:"contact added",contactSaved});
        
    } catch (error) {
        console.log(error);
        // res.status(500).json(error);
    }
})

//Get
// Path:http://localhost:5000/api/contacts/
// affichage des info
 // public
router.get("/",async(req,res)=>{
    try {
        const contacts= await Contact.find()
        res.json({msg:"data fetched",contacts})
    } catch (error) {
        res.json(error);
    }
})


//Edit
// Path:http://localhost:5000/api/contacts/edit/:_id
// Edit one contact
// public
router.put("/edit/:_id",async(req,res)=>{
    const {_id}=req.params
    const updated={$set:req.body}
    try {
        const contactupdated= await Contact.findOneAndUpdate({_id},{...updated})
         const contacts=await Contact.find()
        res.json({msg:"Contact updated",contactupdated,contacts})
    } catch (error) {
        res.json(error);
    }
})


//Delete
// Path:http://localhost:5000/api/contacts/delete/:_id
// delete one contact
// public
router.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params;
    try {
        const deletedContact= await Contact.findOneAndDelete({_id})
        const contacts=await Contact.find()
        res.json({msg:"Contact Deleted",deletedContact,contacts})
    } catch (error) {
        res.json(error);
    }
})

    module.exports = router