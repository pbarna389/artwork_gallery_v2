import { QueryClient } from '@tanstack/react-query'

export const testQuery = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0, // Ensure fresh fetch each time
			retry: false // Avoid unnecessary retries in tests
		}
	}
})
