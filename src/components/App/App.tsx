import React, { useState } from 'react'
import type { ReactElement } from 'react'

import '../../globals.css'
import './App.css'

import { Helmet } from 'react-helmet'
import Header from '../Header/Header'
import PersonalDetailsForm from '../PersonalDetailsForm/PersonalDetailsForm'
import PersonalDetailsView from '../PersonalDetailsView/PersonalDetailsView'
import type { PersonalDetails } from '../PersonalDetailsForm/PersonalDetailsForm'
import ExperienceTable from '../ExperienceTable/ExperienceTable'
import type { Experience } from '../ExperienceForm/ExperienceForm'
import EducationTable from '../EducationTable/EducationTable'
import type { Education } from '../EducationForm/EducationForm'
import EducationView from '../EducationView/EducationView'
import ExperienceView from '../ExperienceView/ExperienceView'
import Footer from '../Footer/Footer'

function App (): ReactElement {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const [details, setDetails] = useState<PersonalDetails>({
    firstName: 'Euan',
    lastName: 'Williams',
    email: 'euanwilliams00@gmail.com',
    phoneNumber: '+1 202-918-2132'
  })

  const initialEducation: Education[] = [
    {
      degree: 'Bachelor of Science in Electrical Engineering and Computer Science',
      institution: 'University of California, Berkeley',
      fieldOfStudy: 'Engineering',
      startDate: '01/01/2014',
      endDate: '12/31/2018'
    },
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      fieldOfStudy: 'Engineering',
      startDate: '01/01/2020',
      endDate: '12/31/2022'
    }
  ]

  const [education, setEducation] = useState(initialEducation)

  const initialExperiences: Experience[] = [
    {
      company: 'Acme Inc.',
      position: 'Software Engineer',
      startDate: '01/01/2018',
      endDate: '12/31/2020',
      description: 'Developed and maintained web applications using React and Node.js'
    },
    {
      company: 'Beta Corp.',
      position: 'Senior Software Engineer',
      startDate: '01/01/2021',
      endDate: 'present',
      description: 'Lead development of new features for large-scale enterprise software'
    }
  ]

  const [experiences, setExperiences] = useState(initialExperiences)

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>CV Application</title>
      </Helmet>
      <header className="App-header darker">
        <Header {...{ theme, setTheme }}></Header>
      </header>
      <main>
        <div className="form-container">
          <PersonalDetailsForm details={details} setDetails={setDetails}></PersonalDetailsForm>
          <EducationTable educationDetails={education} setEducation={setEducation}></EducationTable>
          <ExperienceTable experiences={experiences} setExperiences={setExperiences}></ExperienceTable>
        </div>
        <div className="details-container">
          <PersonalDetailsView personalDetails={details}></PersonalDetailsView>
          <EducationView educationDetails={education}></EducationView>
          <ExperienceView experienceDetails={experiences}></ExperienceView>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
