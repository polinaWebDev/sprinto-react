import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '@/pages/Auth/Login.tsx'

export const Route = createFileRoute('/auth/_layout/login')({
  component: LoginPage,
})
