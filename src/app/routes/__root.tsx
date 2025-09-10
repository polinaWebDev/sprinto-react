import { Outlet, createRootRoute } from '@tanstack/react-router'

import Provider from '@/shared/providers/tanstack-query.provider.tsx'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/shared/providers/theme-provider.tsx'
import { ModalProvider } from '@/shared/providers/Modal/ModalProvider.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Outlet />
          <ModalProvider />
        </ThemeProvider>
      </Provider>
      <TanStackRouterDevtools />
    </>
  ),
})
