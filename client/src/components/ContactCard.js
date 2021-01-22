import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../Redux/actions/constantAction';
import EditModal from './EditModal';
export const ContactCard = ({contact}) => {
    const dispatch = useDispatch();
    const del=() => {dispatch(deleteContact(contact._id))}

    return (
        <div style={{width:"190px",height:"150px",margin:"5px"}}>
            <Card body inverse color="info">
        <CardTitle tag="h5">{contact.name}</CardTitle>
        <CardText>{contact.email}</CardText>
        <CardText>{contact.phone}</CardText>
        <CardText>{contact.dateCreation.slice(0,5)}/{contact.dateCreation.slice(6,8)}</CardText>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Button onClick={del} color="secondary">Delete</Button>
        <EditModal contact={contact}/>
        </div>
        
      </Card>
        </div>
    )
}
