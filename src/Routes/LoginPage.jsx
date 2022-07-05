import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from "../apiLink"
import styles from "./AuthorRegistration.module.css"

export const LoginPage = () => {
    const navigate = useNavigate()
    const[userLoginDetails, setUserLoginDetails] = useState({
        email : "",
        password : ""
    })

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user"))
        if(user.userType=="author"){
            navigate("/book_registration")
        }
        else if(user.userType=="publisher"){
            navigate("/books")
        }
    },[])

    const handleChange = (e) => {
        setUserLoginDetails({
            ...userLoginDetails,
            [e.target.type] : e.target.value
        })
    }

    const handleLogin = async() => {
        let result = await fetch(`${api}/login`, {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(userLoginDetails)
        });
        let resp = await result.json();
        localStorage.setItem("user", JSON.stringify({userType : resp.userType, userId : resp.userId}))
        alert(resp.message);
        resp.userType=="author"?navigate("/book_registration"):resp.userType=="publisher"?navigate("/book"):navigate("/login")
    }
  return (
    <div className={styles.authorRegistrationDiv}>
        <h1>User Login</h1>
        <div>
            <input type="email" placeholder='Email' onChange={handleChange}/>
            <input type="password" placeholder="Password" onChange={handleChange}/>
            <button onClick={handleLogin}>log in</button>
        </div>
        <p>Don't have an account<br/>
        <Link to="/publisher_registration">Register as a publisher</Link><br />
        <Link to="/author_registration">Register as an author</Link>
        </p>
    </div>
  )
}
