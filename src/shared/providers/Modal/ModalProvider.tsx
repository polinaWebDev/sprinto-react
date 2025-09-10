import { useModalStore } from '@/shared/stores/modal-store'
import { modalRegistry } from '@/shared/providers/Modal/modal-registry.provider'

export function ModalProvider() {
  const { openModal, close } = useModalStore()

  if (!openModal) return null

  const { name, props } = openModal as {
    name: keyof typeof modalRegistry
    props?: any
  }
  const ModalComponent = modalRegistry[name]

  return ModalComponent ? (
    <>{ModalComponent({ ...props, onClose: close })}</>
  ) : null
}
