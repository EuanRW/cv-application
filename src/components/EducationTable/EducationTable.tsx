import React from 'react'
import EducationForm, { type Education } from '../EducationForm/EducationForm'
import './EducationTable.css'

interface EducationTableProps {
  educationDetails: Education[]
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>
}

const EducationTable: React.FC<EducationTableProps> = ({ educationDetails, setEducation }) => {
  const handleSave = (newEducation: Education): void => {
    setEducation([...educationDetails, newEducation])
  }

  const handleDelete = (index: number): void => {
    const newEducation = [...educationDetails]
    newEducation.splice(index, 1)
    setEducation(newEducation)
  }

  return (
    <div>
      <div className="title-container">
        <h3>Education</h3>
      </div>
      <EducationForm onSubmit={handleSave} />
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Field Of Study</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {educationDetails.map((education, index) => (
            <tr key={index}>
              <td className="fourty-percent-width">{education.degree}</td>
              <td className="twenty-percent-width">{education.institution}</td>
              <td className="twenty-percent-width">{education.fieldOfStudy}</td>
              <td className="ten-percent-width">{education.startDate}</td>
              <td className="ten-percent-width">{education.endDate}</td>
              <td className="ten-percent-width">
                <button
                  onClick={() => {
                    handleDelete(index)
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EducationTable
