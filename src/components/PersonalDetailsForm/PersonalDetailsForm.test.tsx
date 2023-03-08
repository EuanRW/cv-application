import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import PersonalDetailsForm from './PersonalDetailsForm'

describe('PersonalDetailsForm', () => {
  test('should update state when user enters details', () => {
    render(<PersonalDetailsForm />)

    const firstNameInput = screen.getByLabelText('First Name:')
    const lastNameInput = screen.getByLabelText('Last Name:')
    const emailInput = screen.getByLabelText('Email:')
    const phoneNumberInput = screen.getByLabelText('Phone Number:')

    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } })

    expect(firstNameInput).toHaveValue('John')
    expect(lastNameInput).toHaveValue('Doe')
    expect(emailInput).toHaveValue('john.doe@example.com')
    expect(phoneNumberInput).toHaveValue('1234567890')
  })
})
