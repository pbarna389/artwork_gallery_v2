import type { RouteObject } from 'react-router'

import { Places } from './Places'
import { Subpages } from '../Subpages'

export const placesRoute: RouteObject = {
	path: '/places',
	children: [
		{
			index: true,
			element: <Places />
		},
		{
			path: '/places/:id',
			element: <Subpages />
		}
	]
}
