import { useLocation } from 'react-router'

import {
	AgentDetailsPage,
	ArtworkDetailsPage,
	ExhibitionDetailsPage,
	GalleryDetailsPage,
	PlacesDetailsPage
} from './DetailPages'

//TODO - ADD THE LOGIC FOR THE SUBPAGES
//TODO - CREATE THE TESTS!

export const Subpages = () => {
	const { pathname } = useLocation()

	const [queryKey, id] = pathname.split('/').splice(1)

	switch (queryKey) {
		case 'agents':
			return <AgentDetailsPage id={id} queryKey={queryKey} />
		case 'artworks':
			return <ArtworkDetailsPage id={id} queryKey={queryKey} />
		case 'exhibitions':
			return <ExhibitionDetailsPage id={id} queryKey={queryKey} />
		case 'galleries':
			return <GalleryDetailsPage id={id} queryKey={queryKey} />
		case 'places':
			return <PlacesDetailsPage id={id} queryKey={queryKey} />
		default:
			return <h1>No subpage has been created for this subroute!</h1>
	}
}
