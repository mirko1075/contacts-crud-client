import React, { useCallback, useState, useEffect } from 'react'
import apiService from '../service/ApiService'
import ContactItem from '../components/ContactItem';

export default function ContactList() {
  const [contactsList, setContactsList] = useState([]);
  const [contactsListNoTouch, setContactsListNoTouch] = useState([]);
  const [searchText, setSearchText] = useState("")

  const loadData = useCallback(
    async () =>{
      const contactsListArr = await apiService.getContacts();
      setContactsList(contactsListArr);
      setContactsListNoTouch(contactsListArr);
    },
    [],
  )

  const deleteContact = async (id) =>{
    window.confirm("Do you really want to delete this contact?") && await apiService.deleteContact(id);
    loadData()
  }

  const manageSearch = (e) =>{
    const value= e.target.value;
    setSearchText(value);
    const newArray = contactsListNoTouch.filter(el=> 
      el.firstName.toUpperCase().includes(value.toUpperCase()) 
      || el.lastName.toUpperCase().includes(value.toUpperCase()) 
      || el.address.toUpperCase().includes(value.toUpperCase()) 
      || el.city.toUpperCase().includes(value.toUpperCase())
      || el.cap.toUpperCase().includes(value.toUpperCase())
      || el.tel.toUpperCase().includes(value.toUpperCase())
      || el.mail.toUpperCase().includes(value.toUpperCase()))
    setContactsList([...newArray])
  }

  const cancelSearch = () =>{
    setSearchText("")
    setContactsList([...contactsListNoTouch])
  }

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div className='container-fluid d-flex mb-3 flex-wrap'>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search"><span  onClick={cancelSearch}>X</span></span>
        </div>
        <input className="form-control mb-5" placeholder='Search...' name="search" id ="search" value={searchText} onChange={manageSearch}  aria-describedby="search" />
      </div>
      {
        contactsList && contactsList.map((contact)=>{
          return <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact}  />
        })
      }
    </div>
  )
}
