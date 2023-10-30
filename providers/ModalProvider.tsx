'use client'
import SubscribeModal from '@/components/SubscribeModal'
import { AuthModal } from '@/components/authModal'
import { UploadModal } from '@/components/uploadModal'
import { ProductWithPrice } from '@/types'
import { useState, useEffect } from 'react'

interface ModalProviderProps {
  products: ProductWithPrice[]
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
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
      <SubscribeModal products={products} />
    </>
  )
}

export default ModalProvider
