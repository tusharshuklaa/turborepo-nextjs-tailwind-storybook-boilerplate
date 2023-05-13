import { render, screen } from '@testing-library/react'
import React from 'react'
import HelloWorld from './hello-world'

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
