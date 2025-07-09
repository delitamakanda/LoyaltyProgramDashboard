import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './button'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('renders with provided text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
