import { Outlet, createRootRoute } from '@tanstack/react-router'

import Provider from '@/shared/providers/tanstack-query.proviser.tsx'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider>
        <Outlet />
      </Provider>
      <TanStackRouterDevtools />
    </>
  ),
})
