import { Input } from '@/shared/ui/atoms/input'
import { Label } from '@/shared/ui/atoms/label'
import { Link } from '@tanstack/react-router'
import { OAUTH_PROVIDERS } from '@/features/auth/config/constants'
import { useState } from 'react'
import type { FieldConfig } from '@/shared/types/types.ts'
import { BaseFormCard } from '@/shared/ui/organism/BaseFormCard.tsx'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/atoms/form.tsx'
import { Button } from '@/shared/ui/atoms/button.tsx'

interface AuthFormProps {
  title: string
  description: string
  fields: FieldConfig[]
  form: any
  onSubmit: (data: any) => void
  isLoading?: boolean
  showOAuth?: boolean
}

export function AuthForm({
  title,
  description,
  fields,
  form,
  onSubmit,
  isLoading = false,
  showOAuth = false,
}: AuthFormProps) {
  const [isOAuthLoading, _] = useState(false)

  const handleGoogleLogin = () => {
    window.location.href = OAUTH_PROVIDERS.path
  }

  return (
    <BaseFormCard
      title={title}
      description={description}
      form={form}
      onSubmit={onSubmit}
    >
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <Label htmlFor={field.name}>{field.label}</Label>
              <FormControl>
                <Input
                  id={field.name}
                  placeholder={field.placeholder}
                  type={field.type ?? 'text'}
                  {...formField}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}

      {title === 'Register' ? (
        <Link to="/auth/login">Login</Link>
      ) : (
        <Link to="/auth/register">Register</Link>
      )}

      <Button type="submit" disabled={isLoading} className="mt-2 w-full">
        {isLoading ? 'Загрузка...' : title}
      </Button>

      {showOAuth && (
        <div className="mt-4 flex flex-col gap-2">
          <Button
            disabled={isOAuthLoading}
            type="button"
            onClick={handleGoogleLogin}
          >
            {isOAuthLoading ? 'Загрузка...' : 'Войти через Google'}
          </Button>
        </div>
      )}
    </BaseFormCard>
  )
}
