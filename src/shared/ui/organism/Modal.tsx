import * as React from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/molecules/dialog.tsx'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  footer?: React.ReactNode
  children: React.ReactNode
  trigger?: React.ReactNode
  showCloseButton?: boolean
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
  trigger,
  showCloseButton = true,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={className} showCloseButton={showCloseButton}>
        {title && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        <div>{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
