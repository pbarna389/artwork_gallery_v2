import type { RouteObject } from 'react-router'

import { Exhibitions } from './Exhibitions'

export const exhibtionsRoute: RouteObject = {
	path: '/exhibitions',
	element: <Exhibitions />
}
