import type { RouteObject } from 'react-router'

import { Agents } from './Agents'
import { Subpages } from '../Subpages'

export const agentsRoute: RouteObject = {
	path: '/agents',
	children: [
		{
			index: true,
			element: <Agents />
		},
		{
			path: '/agents/:id',
			element: <Subpages />
		}
	]
}
