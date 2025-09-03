import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  type LoginFormValues,
  zAuthControllerLoginData,
} from '@/features/auth/model/validators'
import { useLoginController } from '@/features/auth/model/useLoginController'

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
