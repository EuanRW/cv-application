import React, { useState } from 'react'

interface EducationFormProps {
  onSubmit: (education: Education) => void
}

export interface Education {
  degree: string
  institution: string
  fieldOfStudy: string
  startDate: string
  endDate: string
}

const EducationForm: React.FC<EducationFormProps> = ({ onSubmit }) => {
  const [education, setEducation] = useState<Education>({
    degree: '',
    institution: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(education)
    setEducation({
      degree: '',
      institution: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={education.institution}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="fieldOfStudy">Field of Study:</label>
        <input
          type="text"
          id="fieldOfStudy"
          name="fieldOfStudy"
          value={education.fieldOfStudy}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default EducationForm
