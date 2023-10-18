'use client'
import { AuthModal } from '@/components/authModal'
import { UploadModal } from '@/components/uploadModal'
import { useState, useEffect } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  )
}

export default ModalProvider
