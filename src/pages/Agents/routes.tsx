import type { RouteObject } from 'react-router'

import { Agents } from './Agents'

export const agentsRoute: RouteObject = {
	path: '/agents',
	children: [
		{
			index: true,
			element: <Agents />
		},
		{
			path: '/agents/:id',
			element: <h1>Agents subpage!</h1>
		}
	]
}
