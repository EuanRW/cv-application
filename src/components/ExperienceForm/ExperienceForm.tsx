import React, { useState } from 'react'
import '../../globals.css'
import './ExperienceForm.css'

interface ExperienceFormProps {
  onSave: (experience: Experience) => void
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ onSave }) => {
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const experience: Experience = {
      company,
      position,
      startDate,
      endDate,
      description
    }

    onSave(experience)

    setCompany('')
    setPosition('')
    setStartDate('')
    setEndDate('')
    setDescription('')
  }

  return (
    <form id='experience-form' onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(event) => {
            setCompany(event.target.value)
          }}
        />
      </div>

      <div className="form-input">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(event) => {
            setPosition(event.target.value)
          }}
        />
      </div>

      <div className="form-input">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => {
            setStartDate(event.target.value)
          }}
        />
      </div>

      <div className="form-input">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => {
            setEndDate(event.target.value)
          }}
        />
      </div>

      <div className="form-input">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  )
}

export default ExperienceForm
