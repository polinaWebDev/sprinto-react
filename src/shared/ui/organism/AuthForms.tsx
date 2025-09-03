import { Button } from '../atoms/button'
import { Input } from '@/shared/ui/atoms/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../atoms/form'
import { Label } from '@/shared/ui/atoms/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../molecules/card'
import { OAUTH_PROVIDERS } from '@/features/auth/config/constants'
import type { FieldConfig } from '@/shared/types/types.ts'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

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

  const handleGoogleLogin = async () => {
    try {
      window.location.href = OAUTH_PROVIDERS.path
    } catch (error) {
      console.error('Google auth error:', error)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
