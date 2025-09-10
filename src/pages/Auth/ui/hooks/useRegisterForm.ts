import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zAuthControllerRegisterData } from '@/shared/api'
import type {RegisterFormValues} from "@/pages/Auth/model/validators.ts";
import {useRegisterController} from "@/pages/Auth/model/useRegisterController.ts";

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
