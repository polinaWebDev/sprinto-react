import { useLoginForm } from '@/pages/Auth/ui/hooks/useLoginForm.ts'
import {loginFields} from "@/pages/Auth/config/constants.ts";
import {AuthForm} from "@/pages/Auth/ui";

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
