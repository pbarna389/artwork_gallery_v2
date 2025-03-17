import { createBrowserRouter } from 'react-router'

import App from 'App'

import {
	agentsRoute,
	artworksRoute,
	collectionsRoute,
	exhibtionsRoute,
	galleriesRoute,
	homeRoutes,
	placesRoute
} from '@pages'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ ...homeRoutes },
			{ ...agentsRoute },
			{ ...artworksRoute },
			{ ...collectionsRoute },
			{ ...exhibtionsRoute },
			{ ...galleriesRoute },
			{ ...placesRoute }
		]
	}
])
