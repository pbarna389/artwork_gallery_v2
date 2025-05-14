import { PageLoading } from '@components'
import { useLoadInfiniteData } from '@hooks'
import type { IncomingDataType } from '@types'

import type { InfinitePlaces } from './types'
import { INFINITE_PLACE_FIELDS } from './types'

export const Places = () => {
	const queryFields = Object.values(INFINITE_PLACE_FIELDS)

	const { data, isFetching } = useLoadInfiniteData<IncomingDataType<InfinitePlaces>>(
		'places',
		queryFields
	)

	if (isFetching) return <PageLoading />

	const placesData: InfinitePlaces[] = []

	data?.pages.forEach((el) => placesData.push(...el.data))

	return (
		<div>
			<h1>Places</h1>
			{placesData.map((el) => (
				<p key={el.id}>{el.title}</p>
			))}
		</div>
	)
}
