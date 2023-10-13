'use client'

import React from 'react'
import { Modal } from './Modal'

export const AuthModal = () => {
  return (
    <Modal
      title="Welcome Back"
      description="Login in your account"
      isOpen
      onChange={() => {}}
    >
      Auth Modal
    </Modal>
  )
}
