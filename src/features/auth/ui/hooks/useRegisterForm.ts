import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zAuthControllerRegisterData } from '@/shared/types/sdk/zod.gen'
import { useRegisterController } from '@/features/auth/model/useRegisterController'
import type { RegisterFormValues } from '@/features/auth/model/validators.ts'

export const useRegisterForm = () => {
  const { register, isLoading } = useRegisterController()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(zAuthControllerRegisterData.shape.body),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  })

  const onSubmit = form.handleSubmit((formData: RegisterFormValues) => {
    register({ body: formData })
  })

  return { form, onSubmit, isLoading }
}
