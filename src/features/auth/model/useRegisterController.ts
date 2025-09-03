import { toast } from 'sonner'
import { useRegisterModel } from '@/features/auth/model/useRegister'
import type { User } from '@/entities/user/model/types.ts'
import { useNavigate } from '@tanstack/react-router'

export const useRegisterController = () => {
  const navigate = useNavigate()

  const handleRegisterSuccess = ({ user }: { user: User }) => {
    navigate({ to: '/dashboard' })
    toast.success(`Welcome, ${user.fullName}`)
  }

  const handleRegisterError = (error: Error) => {
    toast.error(`Registration failed: ${error.message}`)
  }

  return useRegisterModel({
    onSuccess: handleRegisterSuccess,
    onError: handleRegisterError,
  })
}
