import { type FieldValues, useForm } from 'react-hook-form'
import { BaseFormCard } from './BaseFormCard.tsx'
import { Modal } from '../Modal.tsx'
import { FormInput } from '@/shared/ui/molecules/FormInput.tsx'
import type { FieldConfig } from '@/shared/api/generated/types.ts'

interface FormModalProps<T extends FieldValues> {
  modalTitle: string
  modalDescription?: string
  fields: FieldConfig[]
  onSubmit: (data: T) => void
  onClose: () => void
  actionName?: string
}

export function FormModal<T extends FieldValues>({
  modalTitle,
  modalDescription,
  fields,
  onSubmit,
  onClose,
  actionName,
}: FormModalProps<T>) {
  const form = useForm<T>()

  return (
    <Modal
      open
      onOpenChange={onClose}
      title={modalTitle}
      description={modalDescription}
    >
      <BaseFormCard
        className="border-none p-0 shadow-none"
        form={form}
        onSubmit={onSubmit}
      >
        {fields.map((field) => (
          <FormInput key={String(field.name)} field={field} form={form} />
        ))}

        {actionName && (
          <button
            type="submit"
            className="w-full rounded bg-blue-500 py-2 text-white"
          >
            {actionName}
          </button>
        )}
      </BaseFormCard>
    </Modal>
  )
}
