import { createMemoryRouter, RouterProvider } from 'react-router'

import { QueryClientProvider } from '@tanstack/react-query'

import { router } from '@router'
import { testQuery } from '@testing'

export function UTRouterWrapper({ initialEntry }: { initialEntry: string }) {
	const testRouter = createMemoryRouter(router.routes, {
		initialEntries: [initialEntry]
	})

	return (
		<QueryClientProvider client={testQuery}>
			<RouterProvider router={testRouter} />
		</QueryClientProvider>
	)
}
