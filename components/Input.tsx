'use client'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

import React, { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...prop }, ref) => {
    return <input />
  }
)

Input.displayName = 'Input'

export default Input
