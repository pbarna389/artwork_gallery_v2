import type { RouteObject } from 'react-router'

import { Artworks } from './Artworks'
import { Subpages } from '../Subpages'

export const artworksRoute: RouteObject = {
	path: '/artworks',
	children: [
		{
			index: true,
			element: <Artworks />
		},
		{
			path: '/artworks/:id',
			element: <Subpages />
		}
	]
}
