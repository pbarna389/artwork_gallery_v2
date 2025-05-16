import { useGetSingularData } from '@hooks'
import type { ArtworkType, IncomingDataType } from '@types'

import type { DetailsPageProps } from '../types'

export const ArtworkDetailsPage = ({ queryKey, id }: DetailsPageProps) => {
	const { isError, isLoading } = useGetSingularData<
		ArtworkType,
		Omit<IncomingDataType<ArtworkType>, 'pagination'>
	>(queryKey, id)

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>Invalid identification number</h1>
	}

	return <div>ArtworkDetailsPage</div>
}
