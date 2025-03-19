import { createMemoryRouter, RouterProvider } from 'react-router'

import { router } from '@router'

export function UTRouterWrapper({ initialEntry }: { initialEntry: string }) {
	const testRouter = createMemoryRouter(router.routes, {
		initialEntries: [initialEntry]
	})

	return <RouterProvider router={testRouter} />
}
