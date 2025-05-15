import type { RouteObject } from 'react-router'

import { Artworks } from './Artworks'

export const artworksRoute: RouteObject = {
	path: '/artworks',
	children: [
		{
			index: true,
			element: <Artworks />
		},
		{
			path: '/artworks/:id',
			element: <h1>Artwork subpage!</h1>
		}
	]
}
