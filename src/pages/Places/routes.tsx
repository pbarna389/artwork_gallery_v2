import type { RouteObject } from 'react-router'

import { Places } from './Places'

export const placesRoute: RouteObject = {
	path: '/places',
	element: <Places />
}
