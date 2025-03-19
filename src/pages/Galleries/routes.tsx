import type { RouteObject } from 'react-router'

import { Galleries } from './Galleries'

export const galleriesRoute: RouteObject = {
	path: '/galleries',
	element: <Galleries />
}
