import type { UserResponse } from '@/shared/types/sdk'
import type { User } from '@/entities/user/model/types.ts'

export const transformUserResponse = (response: UserResponse): User => ({
  ...response,
  fullName: `${response.firstName} ${response.lastName}`,
  initials: `${response.firstName[0]}${response.lastName[0]}`,
})
