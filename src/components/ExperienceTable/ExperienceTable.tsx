import React from 'react'
import ExperienceForm, {
  type Experience
} from '../ExperienceForm/ExperienceForm'
import './ExperienceTable.css'

interface ExperienceTableProps {
  experiences: Experience[]
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>
}

const ExperienceTable: React.FC<ExperienceTableProps> = ({ experiences, setExperiences }) => {
  const handleSave = (experience: Experience): void => {
    setExperiences([...experiences, experience])
  }

  const handleDelete = (index: number): void => {
    const newExperiences = [...experiences]
    newExperiences.splice(index, 1)
    setExperiences(newExperiences)
  }

  return (
    <div>
      <div className="title-container">
        <h3>Experience</h3>
      </div>
      <ExperienceForm onSave={handleSave} />
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience, index) => (
            <tr key={index}>
              <td className="twenty-percent-width">{experience.company}</td>
              <td className="twenty-percent-width">{experience.position}</td>
              <td className="ten-percent-width">{experience.startDate}</td>
              <td className="ten-percent-width">{experience.endDate}</td>
              <td className="fourty-percent-width">{experience.description}</td>
              <td className="fourty-percent-width">
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

export default ExperienceTable
