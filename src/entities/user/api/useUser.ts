import { transformUserResponse } from '@/entities/user/model/transformers.ts'
import { useQuery } from '@tanstack/react-query'
import {authControllerGetMeOptions} from "@/shared/api";


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