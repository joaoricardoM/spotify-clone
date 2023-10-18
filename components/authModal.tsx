'use client'
import React, { useEffect } from 'react'

import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import useAuthModal from '@/hooks/useAuthModal'

import { Modal } from './Modal'

export const AuthModal = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { onClose, isOpen } = useAuthModal()

  const { session } = useSessionContext()

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  useEffect(() => {
    if (session) {
      router.refresh()
      onClose()
    }
  }, [session, router, onClose])

  return (
    <Modal
      title="Welcome Back"
      description="Login in your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e'
              }
            }
          }
        }}
        theme="dark"
        providers={['github']}
      />
    </Modal>
  )
}
