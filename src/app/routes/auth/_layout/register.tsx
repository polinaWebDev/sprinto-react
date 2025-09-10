import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from '@/pages/Auth/ui/pages/Register.tsx'

export const Route = createFileRoute('/auth/_layout/register')({
  component: RegisterPage,
})
