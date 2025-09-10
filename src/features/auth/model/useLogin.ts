import { useMutation } from '@tanstack/react-query'
import { authControllerLoginMutation } from '../api'
import type { User } from '@/entities/user/model/types.ts'
import {transformUserResponse} from "@/entities/user";

export interface UseLoginModelOptions {
  onSuccess?: (result: { user: User }) => void
  onError?: (error: Error) => void
}

export const useLoginModel = (options?: UseLoginModelOptions) => {
  const loginMutation = useMutation({
    ...authControllerLoginMutation(),
    onSuccess: (data) => {
      const user: User = transformUserResponse(data)

      options?.onSuccess?.({ user })
    },
    onError: (error) => {
      options?.onError?.(error)
    },
  })

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  }
}
