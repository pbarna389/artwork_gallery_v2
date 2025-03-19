import { createBrowserRouter } from 'react-router'

import App from 'App'

import {
	agentsRoute,
	artworksRoute,
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
			{ ...exhibtionsRoute },
			{ ...galleriesRoute },
			{ ...placesRoute }
		]
	}
])
