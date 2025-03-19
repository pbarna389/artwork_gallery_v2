import { createMemoryRouter, RouterProvider } from 'react-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { router } from '@router'

export const testQuery = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0, // Ensure fresh fetch each time
			retry: false // Avoid unnecessary retries in tests
		}
	}
})

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
