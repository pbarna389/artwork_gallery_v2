import type { RouteObject } from 'react-router'

import { Artworks } from './Artworks'

export const artworksRoute: RouteObject = {
	path: '/artworks',
	element: <Artworks />
}
