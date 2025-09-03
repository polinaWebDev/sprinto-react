import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import { useLoginModel } from '@/features/auth/model/useLogin'
import type { User } from '@/entities/user/model/types.ts'

export const useLoginController = () => {
  const navigate = useNavigate()

  const handleLoginSuccess = ({ user }: { user: User }) => {
    navigate({ to: '/dashboard' })
    toast.success(`Welcome back, ${user.fullName}`)
  }

  const handleLoginError = (error: Error) => {
    toast.error(`Login failed: ${error.message}`)
  }

  return useLoginModel({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  })
}
