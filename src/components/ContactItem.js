import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = props => {
  const {contact, deleteContact} = props;

  return(
  <div className='row'>
    <div className='col me-3'>
      <div className='container card mb-3'  style={{width: "18rem"}}>
        <div className='row d-flex justify-content-between'>
          <div className='col-8'>{contact.firstName}</div>
          <div className='col'><span style={{color: contact.active?"green":"red", fontSize:"11px"}}>{contact.active? "ACTIVE" :"INACTIVE"}</span></div>
        </div>
        <div className='row'>
          <div className='col'>{contact.LastName}</div>
        </div>
        <div className='row'>
          <div className='col'>{contact.address}</div>
        </div>
        <div className='row'>
          <div className='col'>{contact.city}</div>
        </div>
        <div className='row'>
          <div className='col'>{contact.cap}</div>
        </div>
        <div className='row'>
          <div className='col'>{contact.tel}</div>
        </div>
        <div className='row'>
          <div className='col'>{contact.mail}</div>
        </div>
        <div className='row'>
          <div className='col'>
            <Link to={"/edit/"+contact._id}>Edit</Link> | <a href="#" onClick={() => deleteContact(contact._id)}>Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactItem 