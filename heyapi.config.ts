import type { CreateClientConfig } from '@/shared/api/generated/sdk/client'

export const createClientConfig: CreateClientConfig = (config) => ({
  credentials: 'include',
  ...config,
})
