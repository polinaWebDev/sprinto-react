import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import {useRegisterModel} from "@/pages/Auth/model/useRegister.ts";
import type {User} from "@/entities/user";

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
