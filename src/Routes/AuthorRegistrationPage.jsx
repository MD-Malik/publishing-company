import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from "../apiLink"
import styles  from "./AuthorRegistration.module.css"

export const AuthorRegistrationPage = () => {
    const[authorRegisterDetails, setAuthorRegisterDetails] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        setAuthorRegisterDetails({
            ...authorRegisterDetails,
            [e.target.id] : e.target.value
        })
    }

    const handleRegisterAuthor = async() => {
       let result = await fetch(`${api}/authorRegisteration`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({...authorRegisterDetails, userType : "author"})
       })
       let resp = await result.json();
       alert(resp.message);
    }
  return (
    <div className={styles.authorRegistrationDiv}>
        <h1>Author Registeration</h1>
        <div>
            <input type="text" name="" id="firstName" placeholder='First Name' onChange={handleChange}/>
            <input type="text" name="" id="lastName" placeholder='Last Name' onChange={handleChange} />
            <input type="email" name="" id="email" placeholder='Eamil' onChange={handleChange} />
            <input type="password" name="" id="password" placeholder='Password' onChange={handleChange}/>
            <button onClick={handleRegisterAuthor}>Register As an author</button>
        </div>
        <p>Already Registered then go to <Link to="/login">login</Link> page</p>
    </div>
  )
}
