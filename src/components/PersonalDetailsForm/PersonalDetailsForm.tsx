import React, { useState } from 'react'
import './PersonalDetailsForm.css'
import '../../globals.css'

interface PersonalDetails {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

const PersonalDetailsForm: React.FC = () => {
  const [details, setDetails] = useState<PersonalDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log(details)
  }

  return (
    <form id='personal-details-form' onSubmit={handleSubmit}>
      <div className='title-container'>
        <h3>Personal Details</h3>
      </div>
      <div className='form-input'>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange} />
      </div>
      <div className='form-input'>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange} />
      </div>
      <div className='form-input'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={details.email} onChange={handleChange} />
      </div>
      <div className='form-input'>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} />
      </div>
      <button id='personal-details-submit-btn' className='submit-btn' type="submit">Save</button>
    </form>
  )
}

export default PersonalDetailsForm
