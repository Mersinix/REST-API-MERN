import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useDispatch} from 'react-redux'
import { addContact } from '../Redux/actions/constantAction';
import {Redirect} from "react-router-dom";

const AddModal = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cancel, setCancel] = useState(false)

    const dispatch = useDispatch()
    const add=() => {dispatch(addContact({name,email,phone})); setCancel(!cancel)}; 


    return (
        <>
        {
            cancel ? (
                 <Redirect to="/list"/>
            ) : (
                <Form style={{margin:"100px"}}>
            <FormGroup>
              <Label for="exampleEmail"><h4>Email</h4></Label>
              <Input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"><h4>name</h4></Label>
              <Input onChange={(e)=>setName(e.target.value)} value={name} type="name" name="name" id="examplePassword" placeholder="name placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"><h4>Phone</h4></Label>
              <Input onChange={(e)=>setPhone(e.target.value)} value={phone} type="Phone" name="Phone" id="examplePhone" placeholder="Phone placeholder" />
            </FormGroup>
            <Button onClick={add}>Add</Button>
            <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>
            </Form>
            )
        }
        </>
        
    )
}

export default AddModal
