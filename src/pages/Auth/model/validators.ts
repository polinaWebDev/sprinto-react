import { z } from 'zod'
import {
  zAuthControllerLoginData,
  zAuthControllerRegisterData,
} from '@/shared/api'

export {
  zRegisterDto,
  zAuthControllerLoginData,
} from '@/shared/api'

export type LoginFormValues = z.infer<typeof zAuthControllerLoginData>['body']
export type RegisterFormValues = z.infer<
  typeof zAuthControllerRegisterData
>['body']
