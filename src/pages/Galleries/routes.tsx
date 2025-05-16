import type { RouteObject } from 'react-router'

import { Galleries } from './Galleries'

export const galleriesRoute: RouteObject = {
	path: '/galleries',
	children: [
		{
			index: true,
			element: <Galleries />
		},
		{
			path: '/galleries/:id',
			element: <h1>Galleries subpage</h1>
		}
	]
}
