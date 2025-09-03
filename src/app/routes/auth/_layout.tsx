import { Outlet, createFileRoute } from '@tanstack/react-router'
import { APP_NAME } from '@/shared/config/constants.ts'
import { CalendarFold } from 'lucide-react'

export const Route = createFileRoute('/auth/_layout')({
  component: () => (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
            <CalendarFold size={16} />
          </div>
          {APP_NAME}
        </a>

        <Outlet />
      </div>
    </div>
  ),
})
