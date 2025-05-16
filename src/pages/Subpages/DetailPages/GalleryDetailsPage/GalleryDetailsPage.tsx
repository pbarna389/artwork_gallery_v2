import { useGetSingularData } from '@hooks'
import type { GalleryType, IncomingDataType } from '@types'

import type { DetailsPageProps } from '../types'

export const GalleryDetailsPage = ({ queryKey, id }: DetailsPageProps) => {
	const { isError, isLoading } = useGetSingularData<
		GalleryType,
		Omit<IncomingDataType<GalleryType>, 'pagination'>
	>(queryKey, id)

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>Invalid identification number</h1>
	}

	return <div>GalleryDetailsPage</div>
}
