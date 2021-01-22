/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Label,Input} from 'reactstrap';
import {useDispatch} from 'react-redux';
import {EditContact} from '../Redux/actions/constantAction';

const EditModal = ({contact}) => {
    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)
    const [phone, setPhone] = useState(contact.phone)
    
    const [modal, setModal] = useState(false);
    const toggle = () => {setModal(!modal);
                            setName(contact.name);
                            setEmail(contact.email);
                            setPhone(contact.phone)
                        };
    const dispatch = useDispatch();
    const Edit=() => {dispatch(EditContact(contact._id,{name,email,phone}));toggle();}
  

  return (
    <div>
      <Button color="danger" onClick={toggle}>Edit Contact</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit your Contact</ModalHeader>
        <ModalBody>
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
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Edit}>Edit Contact</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;