import { useQuery } from '@tanstack/react-query'
import { transformUserResponse } from '@/entities/user/model/transformers.ts'
import { authControllerGetMeOptions } from '@/features/auth/api'

export const useUser = () => {
  const userQuery = useQuery({
    ...authControllerGetMeOptions(),
    retry: 0,
  })

  const user = userQuery.data
    ? transformUserResponse(userQuery.data)
    : undefined

  return {
    user,
    isLoading: userQuery.isPending,
    error: userQuery.error,
  }
}
