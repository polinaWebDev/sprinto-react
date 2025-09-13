import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../molecules/card.tsx'
import { type FieldValues, type UseFormReturn } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

interface BaseFormCardProps<T extends FieldValues> {
  title?: string
  description?: string
  form: UseFormReturn<T>
  onSubmit: (data: T) => void
  children: React.ReactNode
  className?: string
}

export function BaseFormCard<T extends FieldValues>({
  title,
  description,
  form,
  onSubmit,
  children,
  className,
}: BaseFormCardProps<T>) {
  return (
    <Card className={`${className ?? ''}`}>
      {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
      )}
      <CardContent>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {children}
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  )
}
