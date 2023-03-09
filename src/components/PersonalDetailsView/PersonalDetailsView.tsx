import React from 'react'
import type { PersonalDetails } from '../PersonalDetailsForm/PersonalDetailsForm'
import './PersonalDetailsView.css'

interface PersonalDetailsViewProps {
  personalDetails: PersonalDetails
}

const PersonalDetailsView: React.FC<PersonalDetailsViewProps> = ({ personalDetails }) => {
  return (
        <div id='personal-detailsx-container'>
          <p id='name'>{personalDetails.firstName} {personalDetails.lastName}</p>
          <p id='contact-details'>{personalDetails.email} | {personalDetails.phoneNumber}</p>
          <hr />
        </div>
  )
}

export default PersonalDetailsView
