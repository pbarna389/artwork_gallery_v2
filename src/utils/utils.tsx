import { createMemoryRouter, RouterProvider } from 'react-router'

import { router } from '@router'

export function UTTestWrapper() {
	const testRouter = createMemoryRouter(router.routes, {
		initialEntries: ['/']
	})

	return <RouterProvider router={testRouter} />
}
