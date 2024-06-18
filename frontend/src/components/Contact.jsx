import React, { useState } from 'react'
import '../../src/App.css'
import { submitForm } from '../apiService'




const Contact = () => {
  const [inpVal, setInpVal] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (identifier,value) => {
    setInpVal((prevVal) => ({
      ...prevVal,
      [identifier]: value
    }))
  }
 

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm(inpVal)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log("error while submitting the form",error)
    })

    setInpVal({
      name: '',
      company: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <>
    <div className='contact'>
    <form onSubmit={handleSubmit}>
    <label>Your Name 
      <input type='text' name='name' value={inpVal.name} onChange={(e) => handleChange('name',e.target.value)}/>
    </label>
    <label>Designation & Company
      <input type='text' name='company' value={inpVal.company} onChange={(e) => handleChange('company',e.target.value)} />
    </label>
    <label>Phone *
      <input type='phone' name='phone'  value={inpVal.phone} onChange={(e) => handleChange('phone',e.target.value)}/>
    </label>
    <label>E-mail *
      <input type='email' name='email' value={inpVal.email} onChange={(e) => handleChange('email',e.target.value)} />
    </label>
    <label>Subject *
      <input type='text' name='subject'  value={inpVal.subject} onChange={(e) => handleChange('subject',e.target.value)}/>
    </label>
    <label>Message
      <input type='textarea' name='message' value={inpVal.message} onChange={(e) => handleChange('message',e.target.value)} />
    </label>
    <input type='submit' value={`submit`}/>
    </form>
    </div>
    </>
  )
}

export default Contact