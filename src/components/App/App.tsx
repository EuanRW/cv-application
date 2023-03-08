import React, { useState } from 'react'
import type { ReactElement } from 'react'
import '../../globals.css'
import './App.css'
import { Helmet } from 'react-helmet'
import logo from './logo.svg'
import Header from '../Header/Header'
import PersonalDetailsForm from '../PersonalDetailsForm/PersonalDetailsForm'
import ExperienceTable from '../ExperienceTable/ExperienceTable'
import type { Experience } from '../ExperienceForm/ExperienceForm'

function App (): ReactElement {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

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
          <PersonalDetailsForm></PersonalDetailsForm>
          <ExperienceTable initialExperiences={initialExperiences}></ExperienceTable>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div className="details-container">
          <p>Placeholder</p>
        </div>
      </main>
    </div>
  )
}

export default App
