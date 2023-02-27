import React from 'react'
import type { ReactElement } from 'react'
import '../../globals.css'
import './Header.css'

interface headerProps {
  setThemeFunction: React.Dispatch<React.SetStateAction<string>>
}

function Header (props: headerProps): ReactElement {
  return (
    <div className="header">
        <p>
          My Curriculum Vitae
        </p>
        <button onClick={props.setThemeFunction}>Switch Theme</button>
    </div>
  )
}

export default Header
