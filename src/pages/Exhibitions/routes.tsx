import type { RouteObject } from 'react-router'

import { Exhibitions } from './Exhibitions'

export const exhibtionsRoute: RouteObject = {
	path: '/exhibitions',
	children: [
		{
			index: true,
			element: <Exhibitions />
		},
		{
			path: '/exhibitions/:id',
			element: <h1>Exhibitions subpage!</h1>
		}
	]
}
