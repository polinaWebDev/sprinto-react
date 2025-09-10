import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '@/pages/Auth/ui/pages/Login.tsx'

export const Route = createFileRoute('/auth/_layout/login')({
  component: LoginPage,
})
