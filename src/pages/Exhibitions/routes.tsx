import type { RouteObject } from 'react-router'

import { Exhibitions } from './Exhibitions'
import { Subpages } from '../Subpages'

export const exhibtionsRoute: RouteObject = {
	path: '/exhibitions',
	children: [
		{
			index: true,
			element: <Exhibitions />
		},
		{
			path: '/exhibitions/:id',
			element: <Subpages />
		}
	]
}
