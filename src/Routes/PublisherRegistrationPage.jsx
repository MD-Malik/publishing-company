import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../apiLink'
import styles from "./AuthorRegistration.module.css"

export const PublisherRegistrationPage = () => {
  const[publisherRegisterDetails, setPublisherRegisterDetails] = useState({
    firstName : "",
    lastName : "",
    organizationName : "",
    email : "",
    password : ""
})

const handleChange = (e) => {
    setPublisherRegisterDetails({
        ...publisherRegisterDetails,
        [e.target.id] : e.target.value
    })
}

const handleRegister = async() => {
   let result = await fetch(`${api}/publisherRegisteration`, {
    method : "POST",
    headers : {
        "Content-Type":"application/json"
    },
    body : JSON.stringify({...publisherRegisterDetails, userType : "publisher"})
   })
   let resp = await result.json();
   alert(resp.message);
}
return (
<div className={styles.authorRegistrationDiv}>
    <h1>Publisher Registeration</h1>
    <div>
        <input type="text" name="" id="firstName" placeholder='First Name' onChange={handleChange}/>
        <input type="text" name="" id="lastName" placeholder='Last Name' onChange={handleChange} />
        <input type="text" name="" id="organizationName" placeholder='Organization Name' onChange={handleChange} />
        <input type="email" name="" id="email" placeholder='Eamil' onChange={handleChange} />
        <input type="password" name="" id="password" placeholder='Password' onChange={handleChange}/>
        <button type="submit" onClick={handleRegister}>Register As a publisher</button>
    </div>
    <p>Already Registered then go to <Link to="/login">login</Link> page</p>
</div>
)
}
