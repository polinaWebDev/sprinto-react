import { useRegisterForm } from '@/pages/Auth/ui/hooks/useRegisterForm.ts'
import { registerFields } from '@/shared/api/generated/types.ts'
import { AuthForm } from '@/features/auth'

export function RegisterForm() {
  const { form, onSubmit, isLoading } = useRegisterForm()

  return (
    <AuthForm
      title="Register"
      description="Register with your credentials"
      fields={registerFields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      form={form}
    />
  )
}
