import { useLoginForm } from '@/features/auth/ui/hooks/useLoginForm'
import { loginFields } from '@/shared/types/types.ts'
import { AuthForm } from '@/shared/ui/organism/AuthForms.tsx'

export function LoginForm() {
  const { form, onSubmit, isLoading } = useLoginForm()

  return (
    <AuthForm
      title="Welcome back"
      description="Login with your credentials"
      fields={loginFields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      showOAuth
      form={form}
    />
  )
}
