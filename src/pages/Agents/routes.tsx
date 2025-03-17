import type { RouteObject } from 'react-router'

import { Agents } from './Agents'

export const agentsRoute: RouteObject = {
	path: '/agents',
	element: <Agents />
}
