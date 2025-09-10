import { Input } from '@/shared/ui/atoms/input'
import { Label } from '@/shared/ui/atoms/label'
import { FormControl, FormField, FormItem, FormMessage } from '../atoms/form'
import type { FieldConfig } from '@/shared/api/generated/types.ts'

interface FormInputProps {
  field: FieldConfig
  form: any
}

export function FormInput({ field, form }: FormInputProps) {
  return (
    <FormField
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
  )
}
