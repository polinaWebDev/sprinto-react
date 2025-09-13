import type { User } from '@/entities/user/model/types.ts'
import type { UserResponse } from '@/shared/api'

export const transformUserResponse = (response: UserResponse): User => ({
  ...response,
  fullName: `${response.firstName} ${response.lastName}`,
  initials: `${response.firstName[0]}${response.lastName[0]}`,
})
