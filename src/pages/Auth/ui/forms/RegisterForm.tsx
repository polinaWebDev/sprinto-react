import {AuthForm, useRegisterForm} from "@/pages/Auth/ui";
import {registerFields} from "@/pages/Auth/config/constants.ts";


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
