import type { RouteObject } from 'react-router'

import { Collections } from './Collections'

export const collectionsRoute: RouteObject = {
	path: '/collections',
	element: <Collections />
}
