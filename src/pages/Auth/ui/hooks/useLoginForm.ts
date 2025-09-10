import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {useLoginController} from "@/pages/Auth/model/useLoginController.ts";
import {type LoginFormValues, zAuthControllerLoginData} from "@/pages/Auth/model/validators.ts";

export const useLoginForm = () => {
  const { login, isLoading } = useLoginController()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(zAuthControllerLoginData.shape.body),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((formData: LoginFormValues) => {
    login({ body: formData })
  })

  return { form, onSubmit, isLoading }
}
