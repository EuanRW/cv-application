import React from 'react'
import type { Experience } from '../ExperienceForm/ExperienceForm'
import './ExperienceView.css'

interface ExperienceViewProps {
  experienceDetails: Experience[]
}

const ExperienceView: React.FC<ExperienceViewProps> = ({ experienceDetails }) => {
  return (
    <div id="experience-details-container">
      {experienceDetails.map((experience, index) => (
        <div className="experience-row" key={index}>
          <div className="experience-title-container">
            <p className="company">{experience.company} | {experience.position}</p>
            <p className="start-date">
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <p className="description">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ExperienceView
