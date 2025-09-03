import { AppleIcon } from 'lucide-react'

export const OAUTH_PROVIDERS = {
  name: 'Google',
  icon: AppleIcon,
  action: 'loginWithGoogle',
  path: `${import.meta.env.VITE_API_BASE}/auth/oauth`,
} as const
