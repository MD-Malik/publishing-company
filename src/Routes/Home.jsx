import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
      let value = JSON.parse(localStorage.getItem("user"));
      if(value.userType=="author" || value.userType=="publisher"){
        if(value.userType=="author"){
          navigate("/book_registration");
        }
        else if(value.userType=="publisher"){
          navigate("/books");
        }
      }
      else{
        navigate("/login")
      }
    }, [])
    
  return (
    <div>Redirecting to home page </div>
  )
}
