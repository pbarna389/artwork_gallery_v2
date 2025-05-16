import { useGetSingularData } from '@hooks'
import type { IncomingDataType, PlacesType } from '@types'

import type { DetailsPageProps } from '../types'

export const PlacesDetailsPage = ({ queryKey, id }: DetailsPageProps) => {
	const { isError, isLoading } = useGetSingularData<
		PlacesType,
		Omit<IncomingDataType<PlacesType>, 'pagination'>
	>(queryKey, id)

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>Invalid identification number</h1>
	}

	return <div>PlacesDetailsPage</div>
}
