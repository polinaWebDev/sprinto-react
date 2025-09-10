import { useRegisterForm } from '@/features/auth/ui/hooks/useRegisterForm'
import { registerFields } from '@/shared/types/types.ts'
import {AuthForm} from "@/features/auth";

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
