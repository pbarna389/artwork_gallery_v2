import { http, HttpResponse } from 'msw'

/**
 * @remarks
 * This is the handler for outgoing requests for unit tests
 * @returns an array with predefined get requests
 */

export const handlers = [
	http.get('http://localhost:5173', () => {
		return HttpResponse.json({
			message: 'MSW works :)'
		})
	})
]
