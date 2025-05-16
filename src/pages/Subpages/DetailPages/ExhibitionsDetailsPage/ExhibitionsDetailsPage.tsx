import { useGetSingularData } from '@hooks'
import type { ExhibitionType, IncomingDataType } from '@types'

import type { DetailsPageProps } from '../types'

export const ExhibitionDetailsPage = ({ queryKey, id }: DetailsPageProps) => {
	const { isError, isLoading } = useGetSingularData<
		ExhibitionType,
		Omit<IncomingDataType<ExhibitionType>, 'pagination'>
	>(queryKey, id)

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>Invalid identification number</h1>
	}

	return <div>ExhibitionDetailsPage</div>
}
