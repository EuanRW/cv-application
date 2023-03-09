import React from 'react'
import type { Education } from '../EducationForm/EducationForm'
import './EducationView.css'

interface EducationViewProps {
  educationDetails: Education[]
}

const EducationView: React.FC<EducationViewProps> = ({ educationDetails }) => {
  return (
    <div id="education-details-container">
      {educationDetails.map((education, index) => (
        <div className="education-row" key={index}>
          <div className="education-title-container">
            <p className="institution">{education.institution}</p>
            <p className="start-date">
              {education.startDate} - {education.endDate}
            </p>
          </div>
          <p className="degree">
            {education.fieldOfStudy} | {education.degree}
          </p>
        </div>
      ))}
      <hr />
    </div>
  )
}

export default EducationView
