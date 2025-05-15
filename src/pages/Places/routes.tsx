import type { RouteObject } from 'react-router'

import { Places } from './Places'

export const placesRoute: RouteObject = {
	path: '/places',
	children: [
		{
			index: true,
			element: <Places />
		},
		{
			path: '/places/:id',
			element: <h1>Places subpage!</h1>
		}
	]
}
