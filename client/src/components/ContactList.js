import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getContacts} from "../Redux/actions/constantAction";
import { ContactCard } from './ContactCard';

const ContactList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
dispatch(getContacts());
        
    }, []);
    const contacts = useSelector(state => state.contacts.contacts)
    return  <div style={{display:"flex",justifyContent:"center"}}> 
        {
        contacts&&contacts.map((contact)=><ContactCard key={contact._id} contact={contact}/>)
        } 
        </div>
    
}
  export default ContactList 

