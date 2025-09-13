import type { UserResponse } from '@/shared/api'

export interface User extends UserResponse {
  readonly fullName: string
  readonly initials: string
}
