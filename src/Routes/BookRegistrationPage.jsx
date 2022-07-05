import React from 'react';
import { useState } from 'react';
import styles from "./AuthorRegistration.module.css";

export const BookRegistrationPage = () => {
  const [imgSrc, setImgSrc] = useState("")
  const handleChange = (e) => {
    setImgSrc(e.target.files[0])
    console.log(e.target.files[0]);
  }
  const handleSubmit = () => {
    console.log("done")
  }
  return (
    <div className={styles.authorRegistrationDiv}>
      <h1>Register New Book</h1>
      <div>
          <input type="text" name="" id="title" placeholder='Title of Book'/>
          <input type="file" name="" id="document" placeholder='Document in word only' onChange={handleChange}/>
          <input type="text" name="" id="summary" placeholder='Summary of the book'/>
          <input type="text" id="noOfAuthors" placeholder='No. Of Authors'/>
          <input type="text" name="" id="remark" placeholder='Remarks' />
          <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}
