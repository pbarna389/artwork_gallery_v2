import { http, HttpResponse } from 'msw'

export const handlers = [
	http.get('http://localhost:5173', () => {
		return HttpResponse.json({
			message: 'MSW works :)'
		})
	})
]
