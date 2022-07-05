import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const[userType, setUserType] = useState("none");
  let path = useLocation();
  const navigate = useNavigate()
    let navData1 = [["Registered Books", "/books"], ["Review a Book", "/review"], ["Ready to proofing", "/proofing"], ["Ready to Publish", "/ready_to_publish"], ["Publisher", "/Publisher"]]
    let navData2 = [["Registered Books", "/books"], ["Review a Book", "/review"], ["Register New Book", "/book_registration"], ["Ready to proofing", "/proofing"], ["Ready to Publish", "/ready_to_publish"], ["Author", "/Author"]]
    useEffect(()=>{
      // console.log(path.pathname)
      let user = JSON.parse(localStorage.getItem("user"))
      setUserType(user.userType)
    },[userType])

    const handleLogout = () => {
      localStorage.setItem("user", JSON.stringify({userType : "none", userId : "none"}));
      alert("Logout Success");
      navigate("/login");
    }

  return (path.pathname!="/login"?(
    <div className={styles.navbar}>
        {(userType=="publisher"?navData1:navData2).map(item=>(
            <Link to={item[1]} key={item[0]}>{item[0]}</Link>
        ))}
        <div onClick={()=>navigate("/")}>App For Publishing Company</div>
        <span className={styles.logoutBtn} onClick={handleLogout}>Logout</span>
    </div>
  ):null)
}
