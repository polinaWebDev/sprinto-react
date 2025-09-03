import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from '@/pages/Auth/Register.tsx'

export const Route = createFileRoute('/auth/_layout/register')({
  component: RegisterPage,
})
