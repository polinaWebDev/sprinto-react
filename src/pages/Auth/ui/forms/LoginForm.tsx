import { useLoginForm } from '@/pages/Auth/ui/hooks/useLoginForm.ts'
import { loginFields } from '@/shared/api/generated/types.ts'
import { AuthForm } from '@/features/auth'

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
