import React, {useCallback, useEffect, useState} from 'react'
import apiService from "./../service/ApiService";
import { useParams } from 'react-router-dom';

export default function ContactEdit(props) {
  let {id} = useParams();
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [cap, setCap] = useState("")
  const [tel, setTel] = useState("")
  const [mail, setMail] = useState("")
  const [active, setActive] = useState(false)

  const handleChange = (e) =>{
    const setStateFunc= "set"+e.target.id[0].toUpperCase()+ e.target.id.slice(1);
    // eslint-disable-next-line no-eval
    console.log('Set func', `${setStateFunc}('${e.target.value}')`);
    eval(`${setStateFunc}('${e.target.value}')`);
  }

  const onSubmit = async (e) =>{
    e.preventDefault();
    const contact = { id,firstName, lastName, address, city, cap, tel, mail, active};
    console.log('contact :>> ', contact);
    const result = await apiService.editContact(contact);
    console.log('result :>> ', result);
    result.statusText === "OK" ? window.location="/" : console.log('error :>> ');
  }

  const loadContact = useCallback(
    async (id) =>{
      const contact = await apiService.getContact(id);
      console.log('contact :>> ', contact);
      const {firstName, lastName, address, city, cap, tel, mail, active} = contact;
      setFirstName(firstName);
      setLastName(lastName);
      setAddress(address);
      setCity(city);
      setCap(cap);
      setTel(tel);
      setMail(mail);
      setActive(active);
    },
    [],
  )
  
  useEffect(() => {
   loadContact(id)
  }, [])

  return (
    <div>
    <h3>Create new contact</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={lastName}  onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" value={city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cap" className="form-label">CAP</label>
          <input type="text" className="form-control" id="cap" name="cap" value={cap} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tel" className="form-label">Telephone</label>
          <input type="telephone" className="form-control" id="tel" name="tel" value={tel} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mail" className="form-label">Mail</label>
          <input type="mail" className="form-control" id="mail" name="mail" value={mail} onChange={handleChange} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" checked={active} id="active" name="active"  onChange={()=>setActive(!active)} />
          <label className="form-check-label" htmlFor="active">Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
