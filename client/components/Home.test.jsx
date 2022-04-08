import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Home from './Home'

describe('<Home/>', () => {
  it('renders on the screen', () => {
    render(<Home/>)
    const button = screen.getByRole('button', { name: 'Prompt me'})
    expect(button).toBeInTheDocument()
  })


  it('displays a new prompt message', () => {
    // ARRANGE
    render(<Home />)
    // ASSERT
    const button = screen.getByRole('button', { name: 'Prompt me' })
    fireEvent.click(button)

    const prompt = screen.getByText(/with/)
    expect(prompt).toBeInTheDocument()
  })
})
